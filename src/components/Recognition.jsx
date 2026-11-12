import { useRef } from "react";
import { awards } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import SectionHeader from "./SectionHeader";

const sortedAwards = [...awards].sort(
  (a, b) => Number(b.year) - Number(a.year)
);

export default function Recognition() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section
      id="recognition"
      ref={sectionRef}
      className="section recognition"
    >
      <div className="shell">
        <SectionHeader
          index="04"
          label="Recognition"
          aside="Selected record / 2023–2025"
        />

        <div className="recognition-layout">
          <div className="recognition-intro">
            <h2 className="recognition-heading" data-reveal>
              Work that
              <br />
              <em>travelled.</em>
            </h2>
            <p className="recognition-copy" data-reveal>
              A gold medal, a patent filing, a book on a shelf. Recognition is
              not the reason to build, but it is a useful record of what left
              the workbench.
            </p>
          </div>

          <ol className="awards-list" aria-label="Awards and recognition">
            {sortedAwards.map((award) => (
              <li
                className="award-row"
                key={`${award.year}-${award.title}`}
                data-reveal
              >
                <span className="award-year">{award.year}</span>
                <div className="award-main">
                  <h3>{award.title}</h3>
                  <p>
                    {award.event}
                    <span> · {award.place}</span>
                  </p>
                </div>
                <p className="award-note">{award.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
