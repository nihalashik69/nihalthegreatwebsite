let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

export function setLenis(instance) {
  lenisInstance = instance;
}

export function clearLenis(instance) {
  if (lenisInstance === instance) lenisInstance = null;
}

export function scrollToTarget(target, options = {}) {
  const el =
    typeof target === "string" ? document.querySelector(target) : target;

  if (!el) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const isTop = target === "#hero";
  const offset = options.offset ?? (isTop ? 0 : -84);
  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(el, {
      offset,
      duration: options.duration ?? 1.25,
      force: true,
    });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY + offset;

  window.scrollTo({
    top,
    behavior: prefersReduced ? "auto" : "smooth",
  });
}

export function scrollToTop() {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(0, {
      duration: prefersReduced ? 0 : 1.1,
      force: true,
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }
}
