import { Star } from "lucide-react";

/**
 * CSS-driven infinite marquee of testimonial cards, pausing on
 * hover/focus. Same technique as the existing Marquee ticker, sized
 * up for card content — mirrors Aceternity/Magic UI's "infinite
 * moving cards" pattern without pulling in the dependency.
 */
export default function InfiniteMovingCards({ items, speed = 38 }) {
  const doubled = [...items, ...items];

  return (
    <div
      className="group/marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      style={{ "--duration": `${speed}s` }}
    >
      <div className="flex w-max animate-cardMarquee gap-6 group-hover/marquee:[animation-play-state:paused]">
        {doubled.map((t, i) => (
          <figure
            key={i}
            className="flex w-[320px] flex-shrink-0 flex-col border border-ink/10 bg-white p-7 sm:w-[360px]"
          >
            <div className="flex gap-1 text-safety-dim">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 font-body text-[15px] leading-relaxed text-ink/75">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
              <img src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover grayscale" />
              <div>
                <div className="font-head text-sm font-bold text-ink">{t.name}</div>
                <div className="font-mono text-[11px] uppercase tracking-wide text-ink/45">
                  {t.role}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
