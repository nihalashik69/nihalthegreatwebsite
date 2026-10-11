import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const wordRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      wordRefs.current.forEach((word) => {
        if (!word) return;
        gsap.fromTo(
          word,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: word,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.fromTo(
        ".about-stat",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headline = "I build robotics and AI systems that solve real-world problems — from automated sorting to micro-robotic cancer treatment.";
  const words = headline.split(" ");

  const stats = [
    { num: "6+", label: "Years in robotics" },
    { num: "8", label: "Projects & publications" },
    { num: "3", label: "International awards" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen w-full py-32 md:py-48 px-6 md:px-12"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono text-[var(--color-accent)] tracking-widest">
            (01)
          </span>
          <span className="h-px w-12 bg-[var(--color-line)]" />
          <span className="text-sm tracking-[0.3em] uppercase text-[var(--color-text-mute)]">
            About
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              {words.map((word, i) => (
                <span
                  key={i}
                  ref={(el) => (wordRefs.current[i] = el)}
                  className="inline-block mr-3 md:mr-4 will-change-transform"
                >
                  {word}
                </span>
              ))}
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-[var(--color-text-dim)] text-base md:text-lg leading-relaxed mb-8">
              I'm Nihal — a Mechanical Engineering student at Qatar University
              and Student Researcher at the Center for Advanced Materials. I
              design, build, and iterate on real-world robotics systems, from
              AI-powered parcel sorting machines to microbots targeting
              inoperable cancers.
            </p>
            <p className="text-[var(--color-text-dim)] text-base md:text-lg leading-relaxed mb-12">
              My work has earned a Gold Medal at ITEX 2025 and the QRDI Rising
              Innovators Award at Web Summit Qatar 2025. I believe engineering
              should be practical, scalable, and accessible — turning ambitious
              ideas into solutions that work.
            </p>

            <div className="about-stats grid grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="about-stat">
                  <div className="font-display text-3xl md:text-4xl font-bold text-white">
                    {s.num}
                  </div>
                  <div className="text-xs text-[var(--color-text-mute)] mt-1 tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
