import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap, ScrollTrigger } from "../lib/gsap";

/**
 * Vertical timeline with a beam that fills in sync with scroll
 * progress through the section — the same "tracing beam" idea used
 * by Aceternity UI's Timeline component, hand-rolled with GSAP.
 */
export default function Timeline({ items }) {
  const containerRef = useRef(null);
  const beamRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current || !beamRef.current || reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        beamRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-[15px] top-0 h-full w-px bg-white/10 sm:left-[19px]" />
      <div
        ref={beamRef}
        style={{ transformOrigin: "top" }}
        className="absolute left-[15px] top-0 h-full w-px scale-y-0 bg-gradient-to-b from-safety via-safety to-safety/20 sm:left-[19px]"
      />

      <div className="flex flex-col gap-12">
        {items.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            className="relative pl-11 sm:pl-14"
          >
            <span className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-safety bg-ink font-mono text-[10px] font-bold text-safety sm:h-10 sm:w-10">
              {item.year.slice(2)}
            </span>
            <div className="font-mono text-xs uppercase tracking-widest text-safety/80">
              {item.year}
            </div>
            <h3 className="mt-1.5 font-head text-lg font-bold text-white sm:text-xl">
              {item.title}
            </h3>
            <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-white/55">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
