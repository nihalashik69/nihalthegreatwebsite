import { useEffect } from "react";
import { gsap, ScrollTrigger, allowsMotion } from "../lib/gsap";

/**
 * Reveals [data-reveal] elements inside a section using one batched trigger.
 * Elements remain visible without JS; when motion is allowed they are set
 * to their entrance state and released as they cross the viewport.
 */
export function useReveal(scopeRef) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope || !allowsMotion()) return undefined;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray("[data-reveal]", scope);
      if (!items.length) return;

      gsap.set(items, { y: 32, opacity: 0 });

      const batch = ScrollTrigger.batch(items, {
        start: "top 90%",
        once: true,
        onEnter: (elements) => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            duration: 1.05,
            ease: "power3.out",
            stagger: 0.07,
            overwrite: true,
          });
        },
      });

      return () => {
        batch.forEach((trigger) => trigger.kill());
      };
    }, scope);

    return () => ctx.revert();
  }, [scopeRef]);
}
