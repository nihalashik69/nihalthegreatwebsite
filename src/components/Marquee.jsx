import { marqueeItems } from "../data/site";

function MarqueeGroup({ items, hidden }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span className="marquee-item" key={item}>
          {item}
          <span className="marquee-star" aria-hidden="true">
            ✳
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee({ className = "" }) {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-viewport">
        <div className="marquee-track" aria-hidden="true">
          <MarqueeGroup items={marqueeItems} />
          <MarqueeGroup items={marqueeItems} hidden />
        </div>
      </div>
      <ul className="sr-only">
        {marqueeItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
