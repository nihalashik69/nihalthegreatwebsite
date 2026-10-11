import { useSmoothScroll, useReveal } from "./hooks/useAnimations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  useSmoothScroll();
  useReveal();

  return (
    <div className="grain relative bg-[var(--color-bg)]">
      <Navbar />
      <main>
        <Hero />
        <Marquee
          text="ROBOTICS * AI & COMPUTER VISION * MECHANICAL DESIGN * RESEARCH * INNOVATION * "
          className="bg-[var(--color-bg-soft)]"
        />
        <About />
        <Projects />
        <Marquee
          text="AWARDS * PATENTS * RESEARCH PAPERS * ENGINEERING * "
          className="bg-[var(--color-bg-soft)]"
        />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
