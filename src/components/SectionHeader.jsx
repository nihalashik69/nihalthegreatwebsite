export default function SectionHeader({ index, label, aside, className = "" }) {
  return (
    <div
      className={`section-header ${className}`}
      data-reveal
    >
      <div className="flex items-center gap-4">
        <span className="eyebrow text-blue">{index}</span>
        <span className="section-header-rule" aria-hidden="true" />
        <span className="eyebrow text-paper-dim">{label}</span>
      </div>
      {aside ? <span className="eyebrow text-mute hidden md:block">{aside}</span> : null}
    </div>
  );
}
