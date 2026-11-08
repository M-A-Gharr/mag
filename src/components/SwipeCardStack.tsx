// Swipe Stack: adapted from Originkit's "Swipe Card Stack" for this portfolio.
import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react';
import { motion, useInView, useReducedMotion, type PanInfo, type Transition } from 'framer-motion';

const PERSPECTIVE = 1000; // px
const DEPTH_SPACING = 10; // px

export type SwipeCardImage = {
  src: string;
  alt?: string;
};

type SwipeCardStackProps = {
  images: SwipeCardImage[];
  /** Maximum card width in px; the card shrinks to fit narrow containers. */
  maxCardWidth?: number;
  /** Card height / width. Screenshots are landscape, so the default is 10:16. */
  aspectRatio?: number;
  /** 0 (square corners) to 20 (fully rounded). */
  cardRadius?: number;
  swipeThreshold?: number;
  tiltAngle?: number;
  tiltAngleStart?: number;
  /** Horizontal spread of the stack in px; capped so it never overflows. */
  xOffset?: number;
  transition?: Transition;
  /** Called with the image index when the top card is clicked (not dragged), or Enter is pressed. */
  onCardClick?: (imageIndex: number) => void;
  /** Called with the image index of the new top card. */
  onTopCardChange?: (imageIndex: number) => void;
  ariaLabel?: string;
  className?: string;
};

const SwipeCardStack = ({
  images,
  maxCardWidth = 340,
  aspectRatio = 10 / 16,
  cardRadius = 2,
  swipeThreshold = 50,
  tiltAngle = -12,
  tiltAngleStart = 0,
  xOffset = 60,
  transition = { type: 'spring', stiffness: 300, damping: 30 },
  onCardClick,
  onTopCardChange,
  ariaLabel,
  className,
}: SwipeCardStackProps) => {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(maxCardWidth + xOffset);
  // Cards start gathered and fan out ("dealt") the first time the stack scrolls into view.
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const [hasDealt, setHasDealt] = useState(false);

  // Order of image indexes; the first one is the top card.
  const [order, setOrder] = useState<number[]>(() => images.map((_, i) => i));
  const [isPressed, setIsPressed] = useState(false);
  const [shouldReturnToCenter, setShouldReturnToCenter] = useState(false);
  const returnTimer = useRef<ReturnType<typeof setTimeout>>();
  // A drag ends with a pointer-up on the card; this keeps it from counting as a click.
  const wasDragged = useRef(false);

  useEffect(() => {
    setOrder(images.map((_, i) => i));
  }, [images.length]);

  useEffect(() => () => clearTimeout(returnTimer.current), []);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setHasDealt(true), 1200);
    return () => clearTimeout(timer);
  }, [isInView]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (order.length > 0) onTopCardChange?.(order[0]);
  }, [order]);

  if (images.length === 0) return null;

  // Fit the card and its horizontal spread inside the container.
  const cardWidth = Math.min(maxCardWidth, Math.max(160, containerWidth - 48));
  const cardHeight = Math.round(cardWidth * aspectRatio);
  const spread = Math.max(0, Math.min(xOffset, containerWidth - cardWidth - 16));
  const radiusPx = (cardRadius / 20) * (Math.min(cardWidth, cardHeight) / 2);
  const total = order.length;

  const rotate = (direction: 1 | -1) =>
    setOrder((prev) =>
      direction === 1 ? [...prev.slice(1), prev[0]] : [prev[prev.length - 1], ...prev.slice(0, -1)]
    );

  const handleDragEnd = (info: PanInfo) => {
    setIsPressed(false);
    const distance = Math.hypot(info.offset.x, info.offset.y);
    if (distance > swipeThreshold) {
      rotate(1);
    } else {
      setShouldReturnToCenter(true);
      clearTimeout(returnTimer.current);
      returnTimer.current = setTimeout(() => setShouldReturnToCenter(false), 1000);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      rotate(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      rotate(-1);
    } else if (e.key === 'Enter' && onCardClick) {
      e.preventDefault();
      onCardClick(order[0]);
    }
  };

  const getCardStyle = (index: number) => {
    if (!isInView) {
      return { zIndex: total - index, scale: 0.9, x: 0, y: 24, rotate: 0, z: -index * DEPTH_SPACING, opacity: 0 };
    }
    const progress = total > 1 ? index / (total - 1) : 0;
    const shouldReturn = index === 0 && shouldReturnToCenter;
    return {
      zIndex: total - index,
      scale: 1 - index * 0.05,
      x: shouldReturn ? 0 : progress * spread,
      y: shouldReturn ? 0 : -index * 8,
      rotate: shouldReturn ? 0 : tiltAngleStart + progress * (tiltAngle - tiltAngleStart),
      z: -index * DEPTH_SPACING,
      opacity: 1,
    };
  };

  const motionTransition = reduceMotion ? { duration: 0 } : transition;
  const dealDelay = (index: number) => (hasDealt || reduceMotion ? 0 : 0.15 + index * 0.07);

  return (
    <div
      ref={containerRef}
      role="group"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`relative flex w-full items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#483dfb] ${className ?? ''}`}
      style={{ perspective: `${PERSPECTIVE}px`, height: cardHeight + 40 }}
    >
      {/* Shift left by half the spread so the whole stack stays centered. */}
      <div className="relative" style={{ width: cardWidth, height: cardHeight, marginRight: spread }}>
        {order.map((imageIndex, index) => {
          const isTopCard = index === 0;
          const image = images[imageIndex];
          return (
            <motion.div
              key={imageIndex}
              aria-hidden={!isTopCard}
              drag={isTopCard}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.7}
              dragMomentum={false}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
              onPointerDown={
                isTopCard
                  ? () => {
                      wasDragged.current = false;
                      setIsPressed(true);
                    }
                  : undefined
              }
              onDragStart={isTopCard ? () => { wasDragged.current = true; } : undefined}
              onPointerUp={isTopCard ? () => setIsPressed(false) : undefined}
              onDragEnd={isTopCard ? (_, info) => handleDragEnd(info) : undefined}
              onTap={
                isTopCard && onCardClick
                  ? () => {
                      if (!wasDragged.current) onCardClick(imageIndex);
                    }
                  : undefined
              }
              animate={getCardStyle(index)}
              transition={{
                x: { ...motionTransition, delay: dealDelay(index) },
                y: { ...motionTransition, delay: dealDelay(index) },
                rotate: { ...motionTransition, delay: dealDelay(index) },
                scale: { ...motionTransition, delay: dealDelay(index) },
                opacity: { duration: 0.5, delay: dealDelay(index) },
                zIndex: { duration: 0.3, ease: 'easeOut' },
                z: { duration: 0.3, ease: 'easeOut' },
              }}
              initial={false}
              whileDrag={{ scale: 1.05, rotate: tiltAngleStart, zIndex: 1000 }}
              className="absolute inset-0 overflow-hidden border border-border bg-secondary shadow-lg select-none"
              style={{
                borderRadius: radiusPx,
                cursor: isTopCard ? (isPressed ? 'grabbing' : 'grab') : 'default',
                touchAction: isTopCard ? 'none' : 'auto',
              }}
            >
              <img
                src={image.src}
                alt={isTopCard ? image.alt ?? '' : ''}
                draggable={false}
                loading="lazy"
                className="pointer-events-none h-full w-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SwipeCardStack;
