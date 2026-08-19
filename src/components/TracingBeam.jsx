import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * A vertical beam that fills as the user scrolls past numbered steps,
 * with a glowing dot marking current progress — the "tracing beam"
 * idea from Aceternity UI, rebuilt with Framer Motion's scroll hooks
 * to stay consistent with the rest of this codebase.
 */
export default function TracingBeam({ children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-white/10 sm:left-6" />
      <motion.div
        style={{ height: reduceMotion ? "100%" : pathHeight }}
        className="absolute left-[19px] top-2 w-px bg-gradient-to-b from-safety to-safety/30 sm:left-6"
      />
      {!reduceMotion && (
        <motion.div
          style={{ top: dotTop }}
          className="absolute left-[19px] z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-safety shadow-[0_0_12px_3px_rgba(255,200,0,0.55)] sm:left-6"
        />
      )}
      <div className="flex flex-col gap-10 pl-11 sm:pl-16">{children}</div>
    </div>
  );
}
