import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({ value, suffix = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 30, stiffness: 90 });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  const nodeRef = useRef(null);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      if (nodeRef.current) nodeRef.current.textContent = Math.round(latest).toString();
    });
    return unsub;
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      <span ref={nodeRef}>0</span>
      {suffix}
    </span>
  );
}
