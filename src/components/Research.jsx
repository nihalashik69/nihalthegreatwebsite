import { useEffect, useRef, useState } from "react";
import { research } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import ProjectVisual from "./ProjectVisual";
import SectionHeader from "./SectionHeader";

export default function Research() {
  const sectionRef = useRef(null);
  const [activeId, setActiveId] = useState(research[0].id);
  const active = research.find((item) => item.id === activeId) ?? research[0];

  useReveal(sectionRef);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const rows = Array.from(section.querySelectorAll("[data-research-id]"));
    if (!rows.length || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.getAttribute("data-research-id"));
          }
        });
      },
      {
        rootMargin: "-32% 0px -50% 0px",
        threshold: 0,
      }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="research" ref={sectionRef} className="section research">
      <div className="shell">
        <SectionHeader
          index="03"
          label="Research"
          aside="Current inquiries / Lab notes"
        />

        <div className="research-intro">
          <h2 className="research-heading" data-reveal>
            Questions bigger
            <br />
            than the <em>build.</em>
          </h2>
          <p className="research-intro-copy" data-reveal>
            Research is where the work stops being only a product and starts
            becoming a question. My focus moves between micro-robotics,
            nanomaterials, and additive manufacturing.
          </p>
        </div>

        <div className="research-layout">
          <div className="research-visual-panel" aria-hidden="true">
            <div
              className={`research-visual tone-${active.tone}`}
              key={active.id}
            >
              <ProjectVisual kind={active.visual} />
            </div>
            <div className="research-panel-meta">
              <span>{active.index}</span>
              <span>{active.year}</span>
              <span>{active.status}</span>
            </div>
          </div>

          <ol className="research-list">
            {research.map((item) => (
              <li
                key={item.id}
                className={`research-row ${active.id === item.id ? "is-active" : ""}`}
                data-research-id={item.id}
              >
                <div className="research-row-head">
                  <span className="research-index">{item.index}</span>
                  <span className="research-year">{item.year}</span>
                </div>

                <div
                  className={`research-inline-visual tone-${item.tone}`}
                  aria-hidden="true"
                >
                  <ProjectVisual kind={item.visual} />
                </div>

                <h3 className="research-title">{item.title}</h3>
                <p className="research-subtitle">{item.subtitle}</p>
                <p className="research-description">{item.description}</p>

                <div className="research-row-foot">
                  <span className="research-category">{item.category}</span>
                  <ul className="research-tags" aria-label="Topics">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
