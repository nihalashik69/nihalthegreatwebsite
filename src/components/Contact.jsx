import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nihal-ashik/", handle: "/in/nihal-ashik" },
  { label: "Email", href: "mailto:nihalashikmm@gmail.com", handle: "nihalashikmm@gmail.com" },
  { label: "Location", href: "#", handle: "Doha, Qatar" },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const bigTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-char",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.04,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bigTextRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".social-row",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".social-list",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headline = "Let's build something.";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-center py-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="text-sm font-mono text-[var(--color-accent)] tracking-widest">
            (04)
          </span>
          <span className="h-px w-12 bg-[var(--color-line)]" />
          <span className="text-sm tracking-[0.3em] uppercase text-[var(--color-text-mute)]">
            Get in touch
          </span>
        </div>

        <h2
          ref={bigTextRef}
          className="font-display text-[14vw] md:text-[12vw] font-bold leading-[0.9] tracking-tighter mb-12 text-center"
        >
          {headline.split("").map((char, i) => (
            <span
              key={i}
              className="contact-char inline-block"
              style={{ color: char === "." ? "var(--color-accent)" : undefined }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="text-center">
            <p className="text-[var(--color-text-dim)] text-lg leading-relaxed mb-8 max-w-md mx-auto">
              Open to research collaborations, robotics projects, and
              engineering opportunities. Let's build something that solves a
              real problem.
            </p>
            <a
              href="mailto:nihalashikmm@gmail.com"
              className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-display font-bold text-white hover:text-[var(--color-accent)] transition-colors duration-300"
            >
              nihalashikmm@gmail.com
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </a>
          </div>

          <div className="social-list max-w-md mx-auto w-full">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="social-row group flex items-center justify-between py-5 border-b border-[var(--color-line)] hover:border-[var(--color-accent)] transition-colors duration-300"
              >
                <span className="text-lg font-display font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors">
                  {s.label}
                </span>
                <span className="text-sm text-[var(--color-text-mute)] group-hover:text-[var(--color-text-dim)] transition-colors">
                  {s.handle} →
                </span>
              </a>
            ))}
          </div>
        </div>

        <footer className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12 border-t border-[var(--color-line)]">
          <p className="text-sm text-[var(--color-text-mute)]">
            © 2025 Nihal Ashik. Mechanical Engineering @ Qatar University.
          </p>
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-mute)]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] glow-pulse" />
            Open to opportunities
          </div>
        </footer>
      </div>
    </section>
  );
}
