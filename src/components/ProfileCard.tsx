// Profile card for the About section: the cut-out photo over a theme backdrop, in a rounded square framed by a slowly
// turning violet gradient border, tilting in 3D towards the pointer, with an
// "available for freelance" pill and a location tag.
import { type PointerEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { EASE_OUT } from './motion';

const MAX_TILT = 8; // degrees

const ProfileCard = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  // Pointer position over the card, from -0.5 to 0.5 on each axis.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]), { stiffness: 180, damping: 18 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]), { stiffness: 180, damping: 18 });
  // A soft light that follows the pointer across the avatar.
  const glareX = useTransform(px, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(py, [-0.5, 0.5], ['0%', '100%']);
  // Depth: the backdrop glow and the photo shift in opposite directions as the card tilts.
  const photoX = useSpring(useTransform(px, [-0.5, 0.5], [-8, 8]), { stiffness: 180, damping: 20 });
  const photoY = useSpring(useTransform(py, [-0.5, 0.5], [-5, 5]), { stiffness: 180, damping: 20 });
  const glowX = useSpring(useTransform(px, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 20 });
  const glowY = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 });
  const glare = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.28), transparent 55%)`
  );

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      className="relative mb-8 [perspective:900px]"
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: EASE_OUT }}
    >
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative h-64 w-64 sm:h-72 sm:w-72"
      >
        {/* Turning gradient border */}
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl shadow-[#483dfb]/25">
          <div
            aria-hidden
            className="absolute inset-[-50%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg,#261bfb,#9b87f5,transparent_35%,transparent_60%,#261bfb)] motion-reduce:animate-none"
          />
          <div className="absolute inset-[3px] overflow-hidden rounded-[calc(2rem-3px)] bg-background">
            {/* Theme backdrop: soft lavender light in light mode, deep night with a violet glow in dark mode */}
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,#ffffff_0%,#f1edff_42%,#ddd5fb_100%)] dark:bg-[radial-gradient(circle_at_50%_38%,#2b2080_0%,#15103a_42%,#08070f_100%)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgb(72_61_251_/_0.35)_1px,transparent_1px)] [background-size:14px_14px] [mask-image:radial-gradient(circle_at_50%_40%,black,transparent_75%)] dark:opacity-25"
            />
            <motion.div
              aria-hidden
              className="absolute left-1/2 top-[18%] h-44 w-44 -translate-x-1/2 rounded-full bg-[#9b87f5]/35 blur-3xl dark:bg-[#6d5dfc]/55"
              style={{ x: glowX, y: glowY }}
            />
            {/* The photo, cut out: it moves a little against the backdrop when the card tilts */}
            <motion.img
              src="/images/profile/profile-cutout.webp"
              alt={t('about.avatarAlt')}
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              className="absolute inset-x-0 bottom-0 mx-auto h-[93%] w-[93%] object-contain object-bottom transition-[filter] duration-500 [filter:drop-shadow(0_10px_24px_rgb(38_27_251_/_0.18))] dark:[filter:drop-shadow(0_0_1px_rgb(155_135_245_/_0.9))_drop-shadow(0_0_22px_rgb(109_93_252_/_0.55))]"
              style={{ x: photoX, y: photoY }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: glare }}
            />
          </div>
        </div>

        {/* Location tag, floating over the left edge at shoulder height */}
        <motion.span
          className="absolute top-[52%] -start-6 flex items-center gap-1.5 rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs font-medium shadow-lg backdrop-blur-md"
          style={{ z: 40 }}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.5 }}
        >
          <MapPin className="h-3.5 w-3.5 text-[#483dfb]" />
          {t('contact.info.addressValue')}
        </motion.span>

        {/* Availability pill, centred under the avatar */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-4 flex justify-center" style={{ transformStyle: 'preserve-3d' }}>
        <motion.span
          className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-md"
          style={{ z: 50 }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.65 }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          {t('about.available')}
        </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
