import { useRef } from "react";
import { aboutCopy, aboutFacts, nowFocus, principles } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  const [before, after] = aboutCopy.lede.split(aboutCopy.emphasis);

  return (
    <section id="about" ref={sectionRef} className="section about">
      <div className="shell">
        <SectionHeader
          index="01"
          label="About"
          aside="Qatar University / Doha, Qatar"
        />

        <div className="about-grid">
          <div className="about-lede-wrap">
            <p className="about-lede" data-reveal>
              {before}
              <em>{aboutCopy.emphasis}</em>
              {after}
            </p>
            <p className="about-closing" data-reveal>
              {aboutCopy.closing}
            </p>
          </div>

          <aside className="about-side" aria-label="At a glance">
            <div className="about-facts" data-reveal>
              {aboutFacts.map((fact) => (
                <div className="about-fact" key={fact.label}>
                  <span className="about-fact-label">{fact.label}</span>
                  <span className="about-fact-value">{fact.value}</span>
                </div>
              ))}
            </div>

            <div className="about-now" data-reveal>
              <span className="eyebrow text-blue">Right now</span>
              <ul>
                {nowFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="about-lower">
          <div className="about-narrative">
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph} data-reveal>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-principles" aria-label="How I work">
            <span className="eyebrow text-mute" data-reveal>
              How I work
            </span>
            <ol>
              {principles.map((principle) => (
                <li key={principle.index} data-reveal>
                  <span className="principle-index">{principle.index}</span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
