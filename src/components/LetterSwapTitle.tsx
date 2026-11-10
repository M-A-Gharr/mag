// Letter swap for a multi-line title, adapted from Originkit's "Random Letter Swap".
// Only the animation is kept: on hover the letters slide up in a random order and an
// identical copy slides in from below (ping-pong: they slide back on leave). All typography
// (size, weight, colour, line breaks, wrapping) is inherited from the parent heading.
import { Fragment, useEffect, useMemo, useRef } from 'react';
import { motion, useAnimate, useReducedMotion, type AnimationOptions, type Variants } from 'framer-motion';

type LetterSwapTitleProps = {
  lines: string[];
  /**
   * 'letter' splits into graphemes. Use 'word' for scripts whose letters join or form
   * ligatures (Arabic, Devanagari): splitting them into separate boxes breaks their shaping.
   */
  unit?: 'letter' | 'word';
  /** Entrance variants applied to each line (it rises out of its own mask). */
  lineVariants?: Variants;
  /** Delay between two units, in seconds. */
  stagger?: number;
  transition?: AnimationOptions;
};

const DEBOUNCE_MS = 100;

// Intl.Segmenter keeps emoji and accented letters whole; it isn't in this project's TS lib yet.
type GraphemeSegmenter = { segment: (text: string) => Iterable<{ segment: string }> };
const SegmenterCtor = (Intl as unknown as { Segmenter?: new (locale?: string, options?: { granularity: 'grapheme' }) => GraphemeSegmenter })
  .Segmenter;
const segmenter = SegmenterCtor ? new SegmenterCtor(undefined, { granularity: 'grapheme' }) : null;
const graphemes = (text: string) => (segmenter ? Array.from(segmenter.segment(text), (s) => s.segment) : Array.from(text));

// Same shuffle as the original component.
const shuffle = (arr: number[]) => [...arr].sort(() => Math.random() - 0.5);

const LetterSwapTitle = ({
  lines,
  unit = 'letter',
  lineVariants,
  stagger = 0.025,
  transition = { type: 'spring', duration: 0.8 },
}: LetterSwapTitleProps) => {
  const reduce = useReducedMotion();
  const [scope, animate] = useAnimate<HTMLSpanElement>();

  // lines → words → units, each unit with a global index for its selector.
  const { structure, count } = useMemo(() => {
    let n = 0;
    const structure = lines.map((line) =>
      line
        .split(' ')
        .filter(Boolean)
        .map((word) => (unit === 'word' ? [word] : graphemes(word)).map((text) => ({ text, index: n++ })))
    );
    return { structure, count: n };
  }, [lines, unit]);

  const handlers = useRef<{ start: () => void; end: () => void; once: () => void }>();

  useEffect(() => {
    if (reduce || count === 0) return;
    const indexes = Array.from({ length: count }, (_, i) => i);
    const at = (i: number): AnimationOptions => ({ ...transition, delay: i * stagger });

    const swapIn = () =>
      shuffle(indexes).map((idx, i) =>
        Promise.all([
          animate(`.swap-${idx}`, { y: '-100%' }, at(i)),
          animate(`.swap-alt-${idx}`, { top: '0%' }, at(i)),
        ])
      );
    const swapOut = () =>
      shuffle(indexes).map((idx, i) =>
        Promise.all([
          animate(`.swap-${idx}`, { y: 0 }, at(i)),
          animate(`.swap-alt-${idx}`, { top: '100%' }, at(i)),
        ])
      );

    // Leading + trailing debounce, as in the original: the final hover state always wins.
    const debounce = (fn: () => void) => {
      let timer: ReturnType<typeof setTimeout> | null = null;
      let trailing = false;
      return () => {
        if (timer) {
          trailing = true;
          return;
        }
        fn();
        timer = setTimeout(() => {
          if (trailing) fn();
          trailing = false;
          timer = null;
        }, DEBOUNCE_MS);
      };
    };

    // Touch has no hover: a tap plays the swap and settles back once it lands.
    let busy = false;
    const once = async () => {
      if (busy) return;
      busy = true;
      await Promise.all(swapIn());
      await Promise.all(swapOut());
      busy = false;
    };

    handlers.current = { start: debounce(swapIn), end: debounce(swapOut), once };
  }, [animate, count, reduce, stagger, transition]);

  const fullText = lines.join(' ');

  return (
    <span
      ref={scope}
      className="inline-block"
      onPointerEnter={(e) => e.pointerType === 'mouse' && handlers.current?.start()}
      onPointerLeave={(e) => e.pointerType === 'mouse' && handlers.current?.end()}
      onPointerUp={(e) => e.pointerType !== 'mouse' && handlers.current?.once()}
    >
      <span className="sr-only">{fullText}</span>
      {structure.map((words, l) => (
        // The line keeps the hero's entrance: it rises out of its own mask.
        // Extra room above and below each mask (cancelled by negative margins, so the layout does
        // not move) keeps tall marks visible: Devanagari vowel signs, Arabic diacritics.
        <span key={l} aria-hidden className="-mt-[0.2em] block overflow-hidden pt-[0.2em]">
          <motion.span className="block" variants={lineVariants}>
            {words.map((units, w) => (
              <Fragment key={w}>
                {w > 0 && ' '}
                {/* A word never breaks inside; lines still wrap between words on small screens. */}
                <span className="inline-flex whitespace-nowrap">
                  {units.map(({ text, index }) => (
                    <span key={index} className="relative -mb-[0.1em] -mt-[0.2em] inline-flex overflow-hidden">
                      <motion.span className={`swap-${index} relative block pb-[0.22em] pt-[0.2em]`}>{text}</motion.span>
                      <motion.span className={`swap-alt-${index} absolute inset-x-0 block pb-[0.22em] pt-[0.2em]`} style={{ top: '100%' }}>
                        {text}
                      </motion.span>
                    </span>
                  ))}
                </span>
              </Fragment>
            ))}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default LetterSwapTitle;
