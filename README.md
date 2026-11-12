# Nihal Ashik Portfolio

A cinematic personal portfolio for Nihal Ashik: mechanical engineering student,
roboticist, researcher, and maker based in Doha, Qatar.

The experience opens with a scroll-driven portrait reveal, then moves through
selected work, research, recognition, practice, and contact.

## Stack

- React 19 + Vite 8
- Tailwind CSS 4 (mostly used as the design-token layer; the visual system lives in `src/index.css`)
- GSAP 3 + ScrollTrigger
- Lenis smooth scrolling
- Self-hosted variable and display fonts (Space Grotesk, Inter, Instrument Serif, Caveat)

No backend, CMS, database, paid service, or runtime image API is used.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Lint

```bash
npm run lint
```

## Deploy

### Vercel

1. Import `nihalashik69/nihalthegreatwebsite` into Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Deploy.

No environment variables are required.

### Any static host

Upload the contents of `dist/` after running `npm run build`.

## Project structure

```text
public/
  fonts/                 Self-hosted WOFF2 files
  images/                Optimised portrait variants
  favicon.svg
  favicon-32.png
  apple-touch-icon.png
  og-image.jpg
  robots.txt
  sitemap.xml
  site.webmanifest
src/
  assets/hero.png        Original portrait source (not shipped in the bundle)
  components/            Navigation, hero, sections, shared UI, project visuals
  data/site.js           All editable content in one place
  hooks/                 Smooth scroll, reveals, active-section tracking
  lib/                   Central GSAP setup and scroll helpers
  App.jsx
  index.css              Design system, layouts, responsive rules, motion fallbacks
  main.jsx
index.html               Metadata, social preview, favicon links, structured data
```

## Editing content

Update `src/data/site.js` for:

- contact and social links
- navigation labels
- about copy and "right now" items
- projects and project links
- research entries
- awards
- practice areas and tools
- marquee labels

Project artwork lives in `src/components/ProjectVisual.jsx`. Each visual is an
original diagrammatic/typographic composition built with SVG and CSS.

## Important content and asset notes

- **Portrait:** The real portrait is used throughout. The original is
  `src/assets/hero.png`; the site serves optimised WebP versions from
  `public/images/`. No AI-generated person is used.
- **Project imagery:** Real project photography was not available. The visuals
  are intentionally abstract diagrams, and the work section says so. Replace
  them only when real photographs exist.
- **Links:** External links are included only where a real destination exists.
  Projects without a public write-up have no case-study CTA.
- **Awards:** ITEX 2025 Gold and the QRDI Rising Innovators Award at Web Summit
  Qatar 2025 are presented as reported. No additional awards or credentials are
  invented.
- **Book:** _Becoming a Maker_ is credited to Nihal Ashik, Jai Aadhithya, and
  Hanish Abdulla.
- **Reduced motion:** The site respects `prefers-reduced-motion`. The hero,
  horizontal gallery, marquee, and reveals fall back to static or vertical
  layouts.
- **No JavaScript:** A `<noscript>` message provides direct contact details.
  Without JavaScript the portrait is still laid out in its final state, but the
  React-rendered content cannot mount.

## Visual system

- Near-black ink background with warm paper type
- Restrained electric-blue accent (`#6a96ff`)
- Editorial typography with serif italic emphasis
- Hairline rules, diagrammatic project art, subtle grain
- Horizontal project gallery on capable desktop devices; vertical cards on
  mobile, tablets, and when reduced motion is requested

## License

Personal project and content © Nihal Ashik. Third-party font files remain under
their respective open-source licenses (SIL Open Font License).
