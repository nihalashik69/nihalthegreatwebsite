import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, allowsMotion, refreshScrollTriggers } from "../lib/gsap";
import { clearLenis, setLenis } from "../lib/scroll";

/**
 * Creates the shared Lenis instance and drives it from GSAP's ticker.
 * The ticker callback is explicitly removed on cleanup (React StrictMode safe).
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (!allowsMotion()) return undefined;

    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    setLenis(lenis);

    const onScroll = () => ScrollTrigger.update();
    const tick = (time) => lenis.raf(time * 1000);
    const onLoad = () => refreshScrollTriggers();

    lenis.on("scroll", onScroll);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    let alive = true;
    document.fonts?.ready
      .then(() => {
        if (alive) refreshScrollTriggers();
      })
      .catch(() => {});

    window.addEventListener("load", onLoad);

    return () => {
      alive = false;
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      clearLenis(lenis);
    };
  }, []);
}
