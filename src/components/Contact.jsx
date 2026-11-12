import { useRef } from "react";
import { site } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import { scrollToTop } from "../lib/scroll";
import SectionHeader from "./SectionHeader";
import Signature from "./Signature";
import {
  ArrowUp,
  ArrowUpRight,
  GitHub,
  LinkedIn,
  Mail,
  MapPin,
} from "./Icons";

const currentYear = new Date().getFullYear();

export default function Contact() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <footer id="contact" ref={sectionRef} className="contact">
      <span className="contact-watermark" aria-hidden="true">
        NIHAL ASHIK
      </span>

      <div className="shell contact-shell">
        <SectionHeader
          index="06"
          label="Contact"
          aside={site.availability}
        />

        <div className="contact-main">
          <p className="contact-kicker" data-reveal>
            Have a problem worth solving?
          </p>

          <h2 className="contact-heading" data-reveal>
            Let&rsquo;s make
            <br />
            something <em>that works.</em>
          </h2>

          <p className="contact-copy" data-reveal>
            Research collaborations, engineering problems, or something that
            does not have a name yet. Tell me what you are working on.
          </p>

          <a
            className="contact-email"
            href={`mailto:${site.email}`}
            data-reveal
          >
            <span>{site.email}</span>
            <ArrowUpRight size={22} />
          </a>

          <div className="contact-actions" data-reveal>
            <a className="btn btn-primary" href={`mailto:${site.email}`}>
              Start a conversation
              <Mail size={15} />
            </a>
            <a
              className="btn btn-ghost"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="contact-meta">
          <a
            className="contact-location"
            href="https://www.google.com/maps?q=Doha,+Qatar"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Doha, Qatar on Google Maps"
          >
            <MapPin size={15} />
            <span>Doha, Qatar · 25.2854° N / 51.5310° E</span>
            <ArrowUpRight size={13} />
          </a>

          <div className="contact-socials" role="group" aria-label="Social links">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Nihal Ashik on GitHub"
            >
              <GitHub size={16} />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Nihal Ashik on LinkedIn"
            >
              <LinkedIn size={16} />
              LinkedIn
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email Nihal Ashik">
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>

        <div className="site-footer">
          <div className="footer-brand">
            <Signature />
            <p>
              Mechanical engineer, roboticist
              <br />& researcher. Doha, Qatar.
            </p>
          </div>

          <p className="footer-copy">
            © {currentYear} Nihal Ashik
            <span aria-hidden="true"> · </span>
            Designed and built from scratch.
          </p>

          <button
            type="button"
            className="footer-top"
            onClick={() => scrollToTop()}
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
