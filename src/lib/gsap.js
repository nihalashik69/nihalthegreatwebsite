import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function allowsMotion() {
  return (
    typeof window !== "undefined" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function refreshScrollTriggers() {
  if (typeof window === "undefined") return;
  window.requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
}
