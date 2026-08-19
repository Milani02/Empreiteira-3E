import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap, ScrollTrigger } from "../lib/gsap";

/**
 * Splits a heading into words and reveals them with a staggered
 * clip/translate animation as the section scrolls into view.
 * Pattern based on GSAP's SplitText showcase demos.
 */
export default function SplitText({ children, as: Tag = "h2", className = "", once = true }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const text = typeof children === "string" ? children : "";

  useEffect(() => {
    if (!ref.current || reduceMotion || !text) return;
    const words = ref.current.querySelectorAll("[data-word]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.045,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [text, reduceMotion, once]);

  if (!text) {
    return (
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span data-word className="inline-block will-change-transform">
            {word}
            {i < text.split(" ").length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
