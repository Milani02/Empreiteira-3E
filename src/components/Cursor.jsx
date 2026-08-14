import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Custom ring cursor, desktop-only (fine pointer + hover capable).
 * Interactive elements opt in with data-cursor="view" | "link" and
 * an optional data-cursor-text label.
 */
export default function Cursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = (e) => setEnabled(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const active = enabled && !reduceMotion;
    document.body.classList.toggle("custom-cursor-active", active);
    return () => document.body.classList.remove("custom-cursor-active");
  }, [enabled, reduceMotion]);

  useEffect(() => {
    if (!enabled || reduceMotion) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setVariant(target.getAttribute("data-cursor") || "link");
        setLabel(target.getAttribute("data-cursor-text") || "");
      } else {
        setVariant("default");
        setLabel("");
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, reduceMotion, x, y]);

  if (!enabled || reduceMotion) return null;

  const isBig = variant !== "default";

  return (
    <motion.div
      style={{ left: springX, top: springY }}
      className="pointer-events-none fixed z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
    >
      <motion.div
        animate={{
          width: isBig ? (label ? 88 : 56) : 14,
          height: isBig ? (label ? 88 : 56) : 14,
        }}
        transition={{ type: "spring", damping: 22, stiffness: 300 }}
        className="flex items-center justify-center rounded-full bg-white"
      >
        {label && (
          <span className="font-mono text-[9px] font-bold uppercase tracking-wide text-ink">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
