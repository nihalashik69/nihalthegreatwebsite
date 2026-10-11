import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const progressRef = useRef(null);
  const navRef = useRef(null);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${pct}%`;
      }
    };

    const handleScroll = () => {
      updateProgress();
      const sections = links.map((l) => document.querySelector(l.href));
      const y = window.scrollY + window.innerHeight * 0.3;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= y) {
          setActive(links[i].href.slice(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="font-display text-xl font-bold tracking-tight text-white"
        >
          NIHAL<span className="text-[var(--color-accent)]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                active === l.href.slice(1)
                  ? "text-[var(--color-accent)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          className="hidden md:inline-block text-sm font-semibold tracking-wide text-white border border-white/30 rounded-full px-5 py-2 hover:bg-white hover:text-black transition-all duration-300"
        >
          Let's talk
        </a>
      </div>

      <div className="h-px w-full bg-white/10">
        <div
          ref={progressRef}
          className="h-full bg-[var(--color-accent)] origin-left"
          style={{ width: "0%" }}
        />
      </div>
    </nav>
  );
}
