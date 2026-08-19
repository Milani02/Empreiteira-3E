export function BentoGrid({ children, className = "" }) {
  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${className}`}>
      {children}
    </div>
  );
}

export function BentoCell({ children, span = 1, className = "" }) {
  const spanClass =
    span === 2
      ? "sm:col-span-2"
      : span === "full"
        ? "sm:col-span-2 lg:col-span-full"
        : "";
  return <div className={`${spanClass} ${className}`}>{children}</div>;
}
