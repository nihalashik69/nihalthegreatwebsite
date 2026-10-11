import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "M.A.S.H — Modular Automated Sorting Hub",
    tag: "Patent Pending",
    year: "2025",
    desc: "AI-powered modular sorting system using motorized wheels, Google OCR, and machine learning to revolutionize logistics, e-commerce, manufacturing, and recycling. Successfully tested at DHL Qatar. (QPO Case #QU-RD-2025-0147)",
    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=industrial%20automated%20parcel%20sorting%20machine%20with%20red%20collection%20bins%20in%20a%20warehouse%2C%20modular%20design%2C%20conveyor%20belts%2C%20cinematic%20lighting&image_size=landscape_16_9",
    color: "#00d4ff",
  },
  {
    title: "ITEX 2025 — Gold Medal",
    tag: "Gold Medal",
    year: "2025",
    desc: "First university-level students from Qatar to win a Gold Medal at the International Invention, Innovation & Technology Exhibition (ITEX 2025) in Kuala Lumpur, Malaysia, for the M.A.S.H project in the under-21 category.",
    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=gold%20medal%20award%20ceremony%20on%20stage%20at%20invention%20exhibition%2C%20spotlight%2C%20triumphant%20moment%2C%20cinematic&image_size=landscape_16_9",
    color: "#00d4ff",
  },
  {
    title: "QRDI Rising Innovators Award",
    tag: "Award",
    year: "2025",
    desc: "Won the QRDI Rising Innovators Award at Web Summit Qatar 2025 for M.A.S.H's AI-driven modular sorting system, recognized for high commercial and industrial impact by a panel of industry leaders.",
    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=web%20summit%20innovation%20award%20ceremony%20with%20red%20backdrop%2C%20trophy%2C%20professional%20setting%2C%20cinematic%20lighting&image_size=landscape_16_9",
    color: "#00d4ff",
  },
  {
    title: "MASH @ DHL Qatar Free Zone",
    tag: "Live Demo",
    year: "2024",
    desc: "Live demonstration of M.A.S.H at DHL Qatar's Head Office in the Qatar Free Zone on July 3, 2024. Presented to senior executives (CFO, Director of Operations, Director of Technology), validating real-world efficiency, cost-effectiveness, and scalability in high-demand logistics environments.",
    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=logistics%20warehouse%20demonstration%20of%20automated%20sorting%20machine%2C%20executives%20observing%2C%20professional%20industrial%20setting%2C%20cinematic&image_size=landscape_16_9",
    color: "#00d4ff",
  },
  {
    title: "SAFE — Shark Alert & Flagging Equipment",
    tag: "NIO 3rd Place",
    year: "2023",
    desc: "Innovative marine safety system that detects shark activity near swimming zones and deploys automated visual and auditory alerts. Served as Hardware Lead, overseeing sensor integration and system functionality. Secured 3rd place at the National Innovation Olympiad (NIO) 2023.",
    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=marine%20safety%20equipment%20floating%20in%20swimming%20pool%20with%20sensors%2C%20shark%20detection%20device%2C%20blue%20water%2C%20cinematic&image_size=landscape_16_9",
    color: "#00d4ff",
  },
  {
    title: "Fluorescent Magnetic Nanoparticles",
    tag: "Research Paper",
    year: "2025",
    desc: "Developed CQD-modified Gallium Zinc (Ga-Zn) ferrite nanoparticles as microrobots combining blue fluorescence (450 nm) and magnetic responsiveness for targeted drug delivery, imaging, and non-invasive diagnostics. Biocompatibility validated with Drosophila melanogaster up to 1 mg/mL.",
    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fluorescent%20magnetic%20nanoparticles%20glowing%20under%20microscope%20in%20biomedical%20laboratory%2C%20vibrant%20blue%20light%2C%20scientific&image_size=landscape_16_9",
    color: "#00d4ff",
  },
  {
    title: "GlioGon — Micro-Robotic Cancer Treatment",
    tag: "Research",
    year: "2025",
    desc: "3D-printed microbots (PLA infused with Palladium-103 isotopes and SPIONs) for treating inoperable gliomas. Externally maneuvered through the bloodstream via magnetic fields, delivering localized radiation. AI-guided navigation using Dijkstra's Algorithm and CNNs. (Ongoing)",
    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=microscopic%20medical%20nanorobots%20treating%20cancer%20cells%20in%20bloodstream%2C%20biomedical%20research%2C%20scientific%20illustration%2C%20blue%20glow&image_size=landscape_16_9",
    color: "#00d4ff",
  },
  {
    title: "Becoming a Maker — Hobby Robotics Book",
    tag: "Published Book",
    year: "2024",
    desc: "Authored a beginner-friendly condensed guide to robotics and maker culture covering Arduino programming, microcontrollers, CAD modeling, 3D printing, and step-by-step projects like line-following robots. Available at Jarir Bookstore and Amazon. Honored by the Indian Ambassador.",
    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=book%20cover%20about%20robotics%20and%20arduino%20maker%20projects%2C%20minimal%20design%2C%20robotic%20arm%20illustration%2C%20professional&image_size=landscape_16_9",
    color: "#00d4ff",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const scrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      gsap.fromTo(
        ".project-hint",
        { opacity: 1 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=300",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full overflow-hidden bg-[var(--color-bg-soft)]"
    >
      <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 pt-24 md:pt-32 flex items-end justify-between pointer-events-none">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-[var(--color-accent)] tracking-widest">
              (02)
            </span>
            <span className="h-px w-12 bg-[var(--color-line)]" />
            <span className="text-sm tracking-[0.3em] uppercase text-[var(--color-text-mute)]">
              Selected Work
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Projects
          </h2>
        </div>
        <p className="project-hint hidden md:block text-sm text-[var(--color-text-mute)]">
          → Scroll to explore
        </p>
      </div>

      <div
        ref={trackRef}
        className="flex items-center gap-8 md:gap-12 px-6 md:px-12 pt-48 md:pt-56 h-screen will-change-transform"
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="group relative flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[38vw] cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl bg-[var(--color-surface)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="text-xs font-mono text-[var(--color-accent)] bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                  {p.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                    {p.title}
                  </h3>
                  <span className="text-sm text-[var(--color-text-mute)] font-mono">
                    {p.year}
                  </span>
                </div>
                <p className="text-sm md:text-base text-[var(--color-text-dim)] leading-relaxed">
                  {p.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[var(--color-accent)] text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  View case study
                  <span>→</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        ))}

        <div className="flex-shrink-0 w-[20vw] md:w-[10vw]" />
      </div>
    </section>
  );
}
