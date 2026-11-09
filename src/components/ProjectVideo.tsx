// Project video: shows the poster with a play button and only loads the file on click,
// so the page doesn't download several MB up front. Then it's a normal video with controls.
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { EASE_OUT } from './motion';

export type ProjectVideoHandle = { play: () => void };

type ProjectVideoProps = {
  src: string;
  poster: string;
  /** Accessible name, e.g. "VR Showroom – video". */
  label: string;
  playLabel: string;
};

const ProjectVideo = forwardRef<ProjectVideoHandle, ProjectVideoProps>(function ProjectVideo(
  { src, poster, label, playLabel },
  ref
) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    // preload="none": nothing is downloaded until this first play.
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      // Autoplay with sound refused: leave the native controls to the user.
    });
  };

  useImperativeHandle(ref, () => ({ play }));

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-black shadow-xl shadow-[#483dfb]/10">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="none"
        playsInline
        controls={started}
        aria-label={label}
        className="h-full w-full object-contain"
      />

      <AnimatePresence>
        {!started && (
          <motion.button
            type="button"
            onClick={play}
            aria-label={`${playLabel}: ${label}`}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-black/10 to-transparent focus-visible:outline-none"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
          >
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#483dfb] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-focus-visible:ring-4 group-focus-visible:ring-[#483dfb]/50">
              {/* Soft pulse that invites the click */}
              <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-white/40 [animation-duration:2.2s] motion-reduce:hidden" />
              <Play className="relative ms-1 h-7 w-7 fill-current" />
            </span>
            <span className="absolute bottom-3 start-4 rounded-md bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
              {playLabel}
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
});

export default ProjectVideo;
