import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

const CHARS = "3M01#/·";

/**
 * Scrambles toward the final "3M" mark before settling — a cheap
 * version of the "encrypted text" reveal seen on Aceternity UI.
 */
function useScrambleReveal(target, active) {
  const [text, setText] = useState(target);

  useEffect(() => {
    if (!active) {
      setText(target);
      return;
    }
    let frame = 0;
    const totalFrames = 14;
    const id = setInterval(() => {
      frame += 1;
      if (frame >= totalFrames) {
        setText(target);
        clearInterval(id);
        return;
      }
      const revealCount = Math.floor((frame / totalFrames) * target.length);
      setText(
        target
          .split("")
          .map((ch, i) =>
            i < revealCount ? ch : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      );
    }, 45);
    return () => clearInterval(id);
  }, [target, active]);

  return text;
}

export default function Preloader({ onDone }) {
  const [percent, setPercent] = useState(0);
  const [exiting, setExiting] = useState(false);
  const mark = useScrambleReveal("3M", true);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setPercent(Math.round(v)),
      onComplete: () => {
        setExiting(true);
        setTimeout(onDone, 650);
      },
    });
    return () => controls.stop();
  }, [onDone]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: exiting ? "-100%" : 0 }}
      transition={{ duration: 0.65, ease: [0.83, 0, 0.17, 1] }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
    >
      <div className="blueprint-grid absolute inset-0 opacity-20" />

      <motion.div
        initial={{ opacity: 0, scale: 1.4, rotate: -14 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex h-24 w-24 items-center justify-center border-2 border-dashed border-safety sm:h-28 sm:w-28"
      >
        <span className="font-display text-3xl text-safety sm:text-4xl">{mark}</span>
      </motion.div>

      <div className="relative mt-8 font-mono text-sm tracking-[0.3em] text-white/50">
        CARREGANDO {String(percent).padStart(3, "0")}%
      </div>

      <div className="relative mt-4 h-1 w-48 overflow-hidden bg-white/10">
        <motion.div
          className="h-full bg-safety"
          style={{ width: `${percent}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      <div className="hazard-stripe absolute inset-x-0 bottom-0 h-2.5" />
    </motion.div>
  );
}
