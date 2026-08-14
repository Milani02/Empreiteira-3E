import Lenis from "lenis";

let lenis = null;
let rafId = null;

export function initSmoothScroll() {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.1,
  });

  function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  return lenis;
}

export function destroySmoothScroll() {
  if (rafId) cancelAnimationFrame(rafId);
  lenis?.destroy();
  lenis = null;
  rafId = null;
}

export function getLenis() {
  return lenis;
}

export function scrollToHash(hash, options = {}) {
  if (lenis) {
    lenis.scrollTo(hash, { offset: -84, duration: 1.2, ...options });
  } else {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }
}
