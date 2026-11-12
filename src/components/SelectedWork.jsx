import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { projects, site } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import ProjectVisual from "./ProjectVisual";
import SectionHeader from "./SectionHeader";
import { ArrowUpRight } from "./Icons";

export default function SelectedWork() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const countRef = useRef(null);

  useReveal(sectionRef);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return undefined;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const distance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth);

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.75,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(${self.progress})`;
              }
              if (countRef.current) {
                const current = Math.min(
                  projects.length,
                  Math.floor(self.progress * projects.length) + 1
                );
                countRef.current.textContent = String(current).padStart(
                  2,
                  "0"
                );
              }
            },
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section work">
      <div className="work-pin">
        <div className="shell work-head">
          <SectionHeader
            index="02"
            label="Selected work"
            aside="2023–2026"
          />

          <div className="work-head-row">
            <h2 className="work-heading" data-reveal>
              Things I have <em>made.</em>
            </h2>
            <p className="work-note" data-reveal>
              A selection of systems, products, and experiments.
              <span>
                Visuals are original diagrams, not photographs of the work.
              </span>
            </p>
          </div>
        </div>

        <div className="work-viewport">
          <div className="work-track" ref={trackRef}>
            {projects.map((project) => (
              <article
                key={project.id}
                className={`work-card tone-${project.tone}`}
                aria-labelledby={`project-${project.id}-title`}
              >
                <div className="work-card-top">
                  <span className="work-index">{project.index}</span>
                  <span className="work-category">{project.category}</span>
                  <span className="work-year">{project.meta}</span>
                </div>

                <div className="work-visual-wrap" aria-hidden="true">
                  <ProjectVisual kind={project.visual} />
                </div>

                <div className="work-card-body">
                  <div className="work-title-row">
                    <h3 id={`project-${project.id}-title`}>{project.title}</h3>
                    <span className="work-status">{project.status}</span>
                  </div>
                  <p className="work-subtitle">{project.subtitle}</p>
                  <p className="work-description">{project.description}</p>

                  <div className="work-card-foot">
                    <ul className="work-tags" aria-label="Areas">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>

                    {project.links.length > 0 ? (
                      <div className="work-links">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="work-link"
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noreferrer noopener" : undefined}
                          >
                            {link.label}
                            <ArrowUpRight size={13} />
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}

            <aside className="work-end" aria-label="More on GitHub">
              <span className="eyebrow text-blue">Elsewhere</span>
              <p className="work-end-title">
                More experiments,
                <br />
                <em>in the open.</em>
              </p>
              <p className="work-end-copy">
                Repositories, half-finished ideas, and the things I am still
                figuring out.
              </p>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className="work-end-link"
              >
                Visit GitHub
                <ArrowUpRight size={16} />
              </a>
            </aside>
          </div>
        </div>

        <div className="work-progress" aria-hidden="true">
          <span className="work-progress-count">
            <span ref={countRef}>01</span>
            <span className="work-progress-total">
              / {String(projects.length).padStart(2, "0")}
            </span>
          </span>
          <span className="work-progress-track">
            <span ref={progressRef} />
          </span>
          <span className="work-progress-hint">Scroll to travel</span>
        </div>
      </div>
    </section>
  );
}
