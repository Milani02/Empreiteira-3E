import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Wraps interactive elements (buttons, links) and gently pulls them
 * toward the cursor when nearby. No-op on touch devices or when the
 * user prefers reduced motion.
 */
export default function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 200, mass: 0.5 });
  const springY = useSpring(y, { damping: 15, stiffness: 200, mass: 0.5 });

  const handleMove = (e) => {
    if (reduceMotion || !ref.current || !window.matchMedia("(hover: hover)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
