import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Robotics & Mechatronics", level: 92, tools: "Arduino, Raspberry Pi, Sensors, Actuators" },
  { name: "AI & Computer Vision", level: 85, tools: "Google OCR, Machine Learning, Object Detection" },
  { name: "Mechanical Design & CAD", level: 88, tools: "SolidWorks, Fusion 360, 3D Modeling" },
  { name: "Research & Development", level: 90, tools: "Nanoparticles, Microbots, Literature Review" },
  { name: "Prototyping & Manufacturing", level: 80, tools: "3D Printing, CNC, Circuit Design" },
];

const tools = [
  "SolidWorks", "Fusion 360", "Arduino", "Raspberry Pi", "Python",
  "Google OCR", "TensorFlow", "3D Printing", "CNC Machining", "Circuit Design",
  "MATLAB", "LabVIEW", "C++", "KiCad", "ROS",
];

export default function Skills() {
  const sectionRef = useRef(null);
  const barRefs = useRef([]);
  const counterRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      skills.forEach((s, i) => {
        const bar = barRefs.current[i];
        if (bar) {
          gsap.fromTo(
            bar,
            { scaleX: 0 },
            {
              scaleX: s.level / 100,
              duration: 1.4,
              ease: "power3.out",
              transformOrigin: "left",
              scrollTrigger: {
                trigger: bar,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        const counter = counterRefs.current[i];
        if (counter) {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: s.level,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: counter,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              counter.textContent = Math.round(obj.val);
            },
          });
        }
      });

      gsap.utils.toArray(".tool-chip").forEach((chip, i) => {
        gsap.fromTo(
          chip,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: i * 0.04,
            scrollTrigger: {
              trigger: chip,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full py-32 md:py-48 px-6 md:px-12"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono text-[var(--color-accent)] tracking-widest">
            (03)
          </span>
          <span className="h-px w-12 bg-[var(--color-line)]" />
          <span className="text-sm tracking-[0.3em] uppercase text-[var(--color-text-mute)]">
            Capabilities
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-20">
          Skills &amp; <span className="text-[var(--color-accent)]">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 mb-24">
          {skills.map((s, i) => (
            <div key={i}>
              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-white">
                    {s.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-mute)] mt-1">
                    {s.tools}
                  </p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span
                    ref={(el) => (counterRefs.current[i] = el)}
                    className="font-display text-2xl font-bold text-[var(--color-accent)]"
                  >
                    0
                  </span>
                  <span className="text-sm text-[var(--color-text-mute)]">%</span>
                </div>
              </div>
              <div className="h-1 w-full bg-[var(--color-surface-2)] rounded-full overflow-hidden">
                <div
                  ref={(el) => (barRefs.current[i] = el)}
                  className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dim)] rounded-full origin-left"
                  style={{ transform: "scaleX(0)" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-sm tracking-[0.3em] uppercase text-[var(--color-text-mute)] mb-6">
            Toolkit
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((t, i) => (
              <span
                key={i}
                className="tool-chip group px-4 py-2 rounded-full border border-[var(--color-line)] text-sm text-[var(--color-text-dim)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
