import { useCallback, useEffect, useRef, useState } from "react";
import { navLinks, sectionIds, site } from "../data/site";
import { getLenis, scrollToTarget } from "../lib/scroll";
import { useActiveSection } from "../hooks/useActiveSection";
import { ArrowUpRight, GitHub, LinkedIn } from "./Icons";
import Signature from "./Signature";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const progressRef = useRef(null);
  const previousFocusRef = useRef(null);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      const next = window.scrollY > 24;
      setScrolled((current) => (current === next ? current : next));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const dismissMenu = useCallback((restoreFocus = true) => {
    setOpen(false);
    document.documentElement.classList.remove("menu-open");
    getLenis()?.start();

    if (restoreFocus) {
      window.requestAnimationFrame(() => {
        previousFocusRef.current?.focus?.({ preventScroll: true });
      });
    }
  }, []);

  const openMenu = useCallback(() => {
    previousFocusRef.current = document.activeElement;
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    getLenis()?.stop();
    document.documentElement.classList.add("menu-open");

    const menu = menuRef.current;
    let focusFrame = 0;
    let focusTimer = 0;

    // The menu is visibility:hidden until the class change paints, so wait for
    // the next two frames before moving focus into the dialog.
    focusFrame = window.requestAnimationFrame(() => {
      focusFrame = window.requestAnimationFrame(() => {
        focusTimer = window.setTimeout(() => {
          menu?.querySelector(FOCUSABLE)?.focus({ preventScroll: true });
        }, 30);
      });
    });

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dismissMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = menu
        ? Array.from(menu.querySelectorAll(FOCUSABLE)).filter(
            (el) => el.offsetParent !== null
          )
        : [];

      if (!focusable.length) return;

      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === firstEl) {
        event.preventDefault();
        lastEl.focus();
      } else if (!event.shiftKey && document.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.cancelAnimationFrame(focusFrame);
      window.clearTimeout(focusTimer);
      document.documentElement.classList.remove("menu-open");
      getLenis()?.start();
    };
  }, [open, dismissMenu]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (query.matches) dismissMenu(false);
    };

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [dismissMenu]);

  const handleNav = (event, href) => {
    event.preventDefault();
    const fromMenu = Boolean(event.currentTarget.closest("#site-menu"));
    setOpen(false);
    document.documentElement.classList.remove("menu-open");

    window.requestAnimationFrame(() => {
      getLenis()?.start();
      scrollToTarget(
        href,
        href === "#hero" || href === "#work" ? { offset: 0 } : undefined
      );
      window.history.replaceState(null, "", href);
      if (fromMenu) toggleRef.current?.focus({ preventScroll: true });
    });
  };

  return (
    <>
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-progress" aria-hidden="true">
          <span ref={progressRef} />
        </div>

        <div className="nav-inner">
          <a
            className="nav-brand"
            href="#hero"
            onClick={(event) => handleNav(event, "#hero")}
            aria-label="Nihal Ashik, back to top"
          >
            <span className="nav-mark" aria-hidden="true">
              NA
            </span>
            <span className="nav-name">
              Nihal Ashik
              <span className="nav-name-sub">Mechanical engineer</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={isActive ? "is-active" : ""}
                  aria-current={isActive ? "location" : undefined}
                  onClick={(event) => handleNav(event, link.href)}
                >
                  <span className="nav-link-index" aria-hidden="true">
                    {link.index}
                  </span>
                  {link.label}
                </a>
              );
            })}
          </nav>

          <p className="nav-status">
            <span className="status-dot" aria-hidden="true" />
            Open to collaborations
          </p>

          <button
            ref={toggleRef}
            type="button"
            className={`nav-toggle ${open ? "is-open" : ""}`}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => (open ? dismissMenu() : openMenu())}
          >
            <span className="nav-toggle-label" aria-hidden="true">
              {open ? "Close" : "Menu"}
            </span>
            <span className="nav-toggle-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        ref={menuRef}
        className={`menu ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="menu-grid" aria-hidden="true" />
        <div className="menu-inner">
          <div className="menu-top">
            <span className="eyebrow text-blue">Navigation</span>
            <button
              type="button"
              className="menu-close"
              onClick={() => dismissMenu()}
              aria-label="Close menu"
            >
              Close
              <span className="menu-close-icon" aria-hidden="true" />
            </button>
          </div>

          <nav className="menu-nav" aria-label="Mobile">
            <ul>
              {navLinks.map((link, index) => {
                const isActive = active === link.href.slice(1);
                return (
                  <li key={link.href} style={{ "--i": index }}>
                    <a
                      href={link.href}
                      className={`menu-link ${isActive ? "is-active" : ""}`}
                      aria-current={isActive ? "location" : undefined}
                      onClick={(event) => handleNav(event, link.href)}
                    >
                      <span className="menu-link-index" aria-hidden="true">
                        {link.index}
                      </span>
                      <span className="menu-link-label">{link.label}</span>
                      <ArrowUpRight size={22} className="menu-link-arrow" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="menu-foot">
            <div className="menu-contact">
              <span className="eyebrow text-mute">Get in touch</span>
              <a className="menu-email" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>

            <div className="menu-socials">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Nihal Ashik on LinkedIn"
              >
                <LinkedIn size={16} />
                LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Nihal Ashik on GitHub"
              >
                <GitHub size={16} />
                GitHub
              </a>
            </div>

            <Signature className="menu-signature" />
          </div>
        </div>
      </div>
    </>
  );
}
