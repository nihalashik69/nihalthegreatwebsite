export default function Marquee({ text = "ROBOTICS * AI * ENGINEERING * RESEARCH * ", className = "" }) {
  const content = text.repeat(6);
  return (
    <div className={`relative overflow-hidden border-y border-[var(--color-line)] py-6 md:py-8 ${className}`}>
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="font-display text-4xl md:text-6xl font-bold text-[var(--color-text)] mr-8">
          {content}
        </span>
        <span className="font-display text-4xl md:text-6xl font-bold text-[var(--color-accent)] mr-8">
          {content}
        </span>
      </div>
    </div>
  );
}
