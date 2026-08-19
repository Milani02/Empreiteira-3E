import { useEffect, useRef } from "react";
import { useMotionValue, motion, useReducedMotion } from "framer-motion";

/**
 * Card wrapper with a spotlight that follows the cursor, plus a
 * matching glow along the border. Inspired by the "card spotlight" /
 * "glowing effect" pattern used on Cursor.com and Aceternity UI.
 */
export default function GlowCard({ children, className = "", spotlightColor = "255,200,0" }) {
  const ref = useRef(null);
  const fillRef = useRef(null);
  const borderRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(50);
  const y = useMotionValue(50);

  const handleMove = (e) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width) * 100);
    y.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  useEffect(() => {
    const setVars = (v, axis) => {
      fillRef.current?.style.setProperty(axis, `${v}%`);
      borderRef.current?.style.setProperty(axis, `${v}%`);
    };
    const unsubX = x.on("change", (v) => setVars(v, "--x"));
    const unsubY = y.on("change", (v) => setVars(v, "--y"));
    return () => {
      unsubX();
      unsubY();
    };
  }, [x, y]);

  return (
    <motion.div ref={ref} onMouseMove={handleMove} className={`group relative overflow-hidden ${className}`}>
      <div
        ref={fillRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(320px circle at var(--x) var(--y), rgba(${spotlightColor},0.16), transparent 65%)`,
        }}
      />
      <div
        ref={borderRef}
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px z-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at var(--x) var(--y), rgba(${spotlightColor},0.9), transparent 70%)`,
          WebkitMaskImage: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  );
}
