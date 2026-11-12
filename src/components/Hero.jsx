import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { scrollToTarget } from "../lib/scroll";
import { site } from "../data/site";
import { ArrowDown, ArrowUpRight } from "./Icons";
import Signature from "./Signature";

const IMAGE_SIZES = "(max-width: 767px) 86vw, 62vw";

export default function Hero() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const mm = gsap.matchMedia();

    const buildTimeline = ({ isDesktop }) => {
      const q = gsap.utils.selector(root);
      const portrait = q(".hero-portrait")[0];
      const nameInner = q(".hero-name-inner");
      const intro = q(".hero-intro")[0];
      const meta = q(".hero-meta-top")[0];
      const footer = q(".hero-footer")[0];
      const cue = q(".hero-scroll")[0];
      const halo = q(".hero-halo")[0];
      const mobileSignature = q(".hero-signature-mobile")[0];

      gsap.set(nameInner, { yPercent: 120 });
      gsap.set(intro, { opacity: 0, y: isDesktop ? 36 : 22 });
      gsap.set(meta, { opacity: 0, y: -12 });
      gsap.set(footer, { opacity: 0 });
      gsap.set(mobileSignature, { opacity: 0, y: 14 });
      gsap.set(portrait, {
        scale: isDesktop ? 1.58 : 1.42,
        x: 0,
        yPercent: isDesktop ? 4 : 8,
      });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.65,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(cue, { opacity: 0, duration: 0.12 }, 0)
        .to(
          portrait,
          {
            scale: 1,
            x: isDesktop ? () => window.innerWidth * 0.19 : 0,
            yPercent: 0,
            duration: 0.92,
            ease: "power1.out",
          },
          0.02
        )
        .to(halo, { opacity: 1, scale: 1.06, duration: 0.9 }, 0)
        .to(meta, { opacity: 1, y: 0, duration: 0.22 }, 0.16)
        .to(
          nameInner,
          {
            yPercent: 0,
            duration: 0.52,
            stagger: 0.06,
            ease: "power2.out",
          },
          0.25
        )
        .to(intro, { opacity: 1, y: 0, duration: 0.28 }, 0.64);

      if (isDesktop) {
        timeline.to(footer, { opacity: 1, duration: 0.16 }, 0.8);
      } else {
        timeline.to(
          mobileSignature,
          { opacity: 1, y: 0, duration: 0.18 },
          0.76
        );
      }

      return timeline;
    };

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => buildTimeline({ isDesktop: true })
    );

    mm.add(
      "(max-width: 767.98px) and (prefers-reduced-motion: no-preference)",
      () => buildTimeline({ isDesktop: false })
    );

    return () => mm.revert();
  }, []);

  const goTo = (event, href) => {
    event.preventDefault();
    scrollToTarget(href);
    window.history.replaceState(null, "", href);
  };

  return (
    <section id="hero" ref={rootRef} className="hero" aria-label="Introduction">
      <div className="hero-sticky">
        <div className="hero-backdrop" aria-hidden="true">
          <div className="hero-grid" />
          <div className="hero-halo" />
          <div className="hero-vignette" />
        </div>

        <div className="hero-meta-top" aria-hidden="true">
          <span className="eyebrow">Portfolio · 2026</span>
          <span className="hero-meta-role">
            Mechanical engineer / Roboticist / Researcher
          </span>
          <span className="eyebrow">Doha, Qatar</span>
        </div>

        <h1 className="hero-wordmark" aria-label="Nihal Ashik">
          <span className="hero-name-line" aria-hidden="true">
            <span className="hero-name-inner">NIHAL</span>
          </span>
          <span className="hero-name-line" aria-hidden="true">
            <span className="hero-name-inner">
              ASHIK<span className="hero-name-dot">.</span>
            </span>
          </span>
        </h1>

        <div className="hero-portrait-wrap">
          <div className="hero-portrait">
            <picture>
              <source
                type="image/webp"
                srcSet="/images/portrait-600.webp 600w, /images/portrait-900.webp 900w, /images/portrait-1254.webp 1254w"
                sizes={IMAGE_SIZES}
              />
              <img
                src="/images/portrait-900.webp"
                alt="Nihal Ashik, wearing a dark shirt and making a peace sign."
                width="1254"
                height="1254"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onLoad={() => ScrollTrigger.refresh()}
              />
            </picture>
            <span className="hero-portrait-tag" aria-hidden="true">
              N.A · 2026
            </span>
          </div>
        </div>

        <div className="hero-intro">
          <p className="hero-tagline">
            I turn ideas into <em>working things.</em>
          </p>
          <p className="hero-bio">
            Mechanical engineering student at Qatar University. I build systems
            that move, sense, and solve, then share what I learn.
          </p>
          <div className="hero-actions">
            <a
              className="hero-link"
              href="#work"
              onClick={(event) => goTo(event, "#work")}
            >
              Selected work
              <ArrowUpRight size={15} />
            </a>
            <a
              className="hero-link hero-link--muted"
              href="#contact"
              onClick={(event) => goTo(event, "#contact")}
            >
              Get in touch
            </a>
          </div>
          <Signature className="hero-signature" />
        </div>

        <Signature className="hero-signature-mobile" />

        <div className="hero-footer" aria-hidden="true">
          <span>25.2854° N / 51.5310° E</span>
          <span className="hero-footer-status">
            <span className="status-dot" />
            {site.availability}
          </span>
          <span>Built with intent</span>
        </div>

        <a
          className="hero-scroll"
          href="#about"
          onClick={(event) => goTo(event, "#about")}
          aria-label="Scroll to about Nihal Ashik"
        >
          <span>Scroll to explore</span>
          <span className="hero-scroll-line" aria-hidden="true">
            <ArrowDown size={13} />
          </span>
        </a>
      </div>
    </section>
  );
}
