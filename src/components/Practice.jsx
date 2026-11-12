import { useRef } from "react";
import { practice } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import SectionHeader from "./SectionHeader";

export default function Practice() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section id="practice" ref={sectionRef} className="section practice">
      <div className="shell">
        <SectionHeader
          index="05"
          label="Practice"
          aside="Toolkit / Disciplines"
        />

        <div className="practice-intro">
          <h2 className="practice-heading" data-reveal>
            A working
            <br />
            <em>toolkit.</em>
          </h2>
          <p className="practice-copy" data-reveal>
            Not a list of logos. These are the disciplines I keep returning to,
            and the tools I reach for when an idea needs to leave the page.
          </p>
        </div>

        <div className="practice-list">
          {practice.map((item) => (
            <article className="practice-row" key={item.index} data-reveal>
              <span className="practice-index">{item.index}</span>
              <div className="practice-main">
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
              </div>
              <ul className="practice-tools" aria-label={`Tools for ${item.title}`}>
                {item.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
