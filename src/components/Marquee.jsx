export default function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden bg-safety py-3">
      <div className="hazard-stripe absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
      <div className="hazard-stripe absolute inset-x-0 bottom-0 h-1.5" aria-hidden="true" />
      <div className="animate-marquee flex flex-shrink-0 items-center gap-8 pr-8">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink"
          >
            {item}
            <span className="text-ink/40">✦</span>
          </span>
        ))}
      </div>
      <div className="animate-marquee flex flex-shrink-0 items-center gap-8 pr-8" aria-hidden="true">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink"
          >
            {item}
            <span className="text-ink/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
