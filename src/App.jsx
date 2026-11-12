import { useEffect } from "react";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import SelectedWork from "./components/SelectedWork";
import Research from "./components/Research";
import Recognition from "./components/Recognition";
import Practice from "./components/Practice";
import Contact from "./components/Contact";

export default function App() {
  useSmoothScroll();

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionAttribute = () => {
      document.documentElement.dataset.motion = query.matches ? "off" : "on";
    };

    syncMotionAttribute();
    query.addEventListener("change", syncMotionAttribute);
    return () => query.removeEventListener("change", syncMotionAttribute);
  }, []);

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="grain" aria-hidden="true" />

      <Navbar />

      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <SelectedWork />
        <Research />
        <Recognition />
        <Practice />
      </main>

      <Contact />
    </div>
  );
}
