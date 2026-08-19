import { useRef, useState, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";

/**
 * Drag-to-compare before/after image slider — the construction-industry
 * killer app of Aceternity UI's "Compare" component: nothing sells a
 * finished reform like literally revealing it by hand.
 */
export default function CompareSlider({ before, after, beforeLabel = "Antes", afterLabel = "Depois", className = "" }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const stopDragging = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
      className={`relative aspect-[4/3] w-full touch-none select-none overflow-hidden ${className}`}
    >
      <img
        src={after}
        alt={afterLabel}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={before}
        alt={beforeLabel}
        draggable={false}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      <span className="pointer-events-none absolute left-3 top-3 bg-ink/80 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 bg-safety px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-ink">
        {afterLabel}
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
          <MoveHorizontal className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
