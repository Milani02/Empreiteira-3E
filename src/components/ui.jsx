export function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.06h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.84-3.04-.2-.31a8.15 8.15 0 0 1-1.26-4.33c0-4.52 3.68-8.2 8.24-8.2 2.2 0 4.27.86 5.83 2.42a8.16 8.16 0 0 1 2.41 5.8c0 4.52-3.68 8.17-8.24 8.17Zm4.52-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function HazardStripe({ className = "h-2.5" }) {
  return <div className={`hazard-stripe w-full ${className}`} aria-hidden="true" />;
}

export function StampBadge({ label, sub, className = "" }) {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center rounded-full border-2 border-dashed border-ink bg-safety px-6 py-6 text-center leading-tight shadow-[6px_6px_0_0_#0A0A0A] ${className}`}
    >
      <span className="font-head text-sm font-extrabold uppercase tracking-wide text-ink">
        {label}
      </span>
      {sub && (
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink/70">{sub}</span>
      )}
    </div>
  );
}

export function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] ${
        dark ? "text-safety" : "text-ink/60"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-safety" : "bg-ink"}`} />
      {children}
    </span>
  );
}
