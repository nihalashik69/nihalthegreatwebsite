export const site = {
  name: "Nihal Ashik",
  firstName: "Nihal",
  lastName: "Ashik",
  role: "Mechanical engineer · Roboticist · Researcher",
  location: "Doha, Qatar",
  coordinates: "25.2854° N / 51.5310° E",
  email: "nihalashikmm@gmail.com",
  availability: "Open to research & engineering collaborations",
  url: "https://www.nihalashik.tech",
  linkedin: "https://www.linkedin.com/in/nihal-ashik/",
  github: "https://github.com/nihalashik69",
};

export const navLinks = [
  { label: "About", href: "#about", index: "01" },
  { label: "Work", href: "#work", index: "02" },
  { label: "Research", href: "#research", index: "03" },
  { label: "Recognition", href: "#recognition", index: "04" },
  { label: "Practice", href: "#practice", index: "05" },
  { label: "Contact", href: "#contact", index: "06" },
];

export const sectionIds = [
  "hero",
  "about",
  "work",
  "research",
  "recognition",
  "practice",
  "contact",
];

export const aboutCopy = {
  lede:
    "I'm a mechanical engineering student at Qatar University who would rather build the thing than talk about it.",
  emphasis: "build the thing",
  paragraphs: [
    "My work sits where mechanical design meets software, electronics, and research: from an AI-powered parcel-sorting system to microbots designed for targeted cancer treatment.",
    "I co-founded Panatex Labs to make hands-on robotics more accessible, and I co-authored a beginner's guide to hobby robotics. Most of what I know came from taking something apart, getting it wrong, and trying again.",
  ],
  closing:
    "The idea is only half the work. The other half is making it move.",
};

export const principles = [
  {
    index: "01",
    title: "Make it real",
    body: "An idea earns its keep when it becomes a working prototype, not a slide.",
  },
  {
    index: "02",
    title: "Sweat the mechanism",
    body: "The visible detail is usually the last five percent of the work. That is the part worth staying for.",
  },
  {
    index: "03",
    title: "Learn in public",
    body: "Workshops, open-source repositories, and writing are part of the practice, not an afterthought.",
  },
];

export const nowFocus = [
  "M.A.S.H: developing the sorting hardware and its routing stack",
  "Nanoparticles: studying CQD-modified gallium zinc ferrites for imaging and delivery",
  "Cement 3D printing: material behaviour and deposition",
];

export const aboutFacts = [
  {
    label: "Currently",
    value: "Mechanical Engineering, Qatar University",
  },
  {
    label: "Research",
    value: "Student researcher, Center for Advanced Materials",
  },
  {
    label: "Co-founder",
    value: "Panatex Labs",
  },
  {
    label: "Based in",
    value: "Doha, Qatar",
  },
];

export const projects = [
  {
    id: "mash",
    index: "01",
    title: "M.A.S.H",
    subtitle: "Modular Automated Sorting Hub",
    category: "Logistics / AI / Hardware",
    meta: "2025",
    status: "Patent pending",
    description:
      "An AI-powered modular parcel-sorting hub using OCR, computer vision, and real-time routing. Built to bring automation to small and temporary logistics spaces. Tested with DHL Qatar.",
    tags: ["OCR", "Computer vision", "Routing", "Modular hardware"],
    visual: "mash",
    tone: "steel",
    links: [
      {
        label: "Read coverage",
        href: "https://www.gulf-times.com/article/701568/community/education/indian-student-trio-shine-at-web-summit-qatar",
        external: true,
      },
    ],
  },
  {
    id: "panatex",
    index: "02",
    title: "Panatex Labs",
    subtitle: "Robotics education, made hands-on",
    category: "Education / Community",
    meta: "Ongoing",
    status: "Co-founder",
    description:
      "A student-run robotics organisation I co-founded, built around workshops, open-source projects, and the belief that hands-on engineering should be accessible.",
    tags: ["Workshops", "STEM", "Open source", "Community"],
    visual: "panatex",
    tone: "paper",
    links: [],
  },
  {
    id: "respyr",
    index: "03",
    title: "RESPYR",
    subtitle: "Wearable health technology",
    category: "Health / Product",
    meta: "R&D",
    status: "Concept",
    description:
      "Wearable health technology: an exploration of sensing, form, and a more human interface between the body and data.",
    tags: ["Wearables", "Sensing", "Product design"],
    visual: "respyr",
    tone: "mist",
    links: [],
  },
  {
    id: "aqtar",
    index: "04",
    title: "Aqtar",
    subtitle: "A map-first way to discover Qatar",
    category: "Maps / Interface",
    meta: "Product",
    status: "Built",
    description:
      "A map-first application for discovering Qatar, designed around place, movement, and the details that make a city feel navigable.",
    tags: ["Maps", "UI", "Local discovery"],
    visual: "aqtar",
    tone: "sand",
    links: [],
  },
  {
    id: "bus",
    index: "05",
    title: "QU Bus",
    subtitle: "Live campus transit",
    category: "Mobile / Real-time",
    meta: "2026",
    status: "Live location",
    description:
      "A live-location app for tracking on-campus buses at Qatar University, built to make moving across campus a little less uncertain.",
    tags: ["Live location", "Flutter", "Campus"],
    visual: "bus",
    tone: "signal",
    links: [
      {
        label: "View repository",
        href: "https://github.com/nihalashik69/qu-bus-tracker",
        external: true,
      },
    ],
  },
  {
    id: "safe",
    index: "06",
    title: "S.A.F.E",
    subtitle: "Shark Alert & Flagging Equipment",
    category: "Marine safety / Computer vision",
    meta: "2023",
    status: "3rd place, NIO",
    description:
      "A marine safety system that detects shark activity near swimming zones and deploys automated visual and auditory alerts. I led hardware and sensor integration.",
    tags: ["Sensors", "Computer vision", "Alert systems", "Hardware lead"],
    visual: "safe",
    tone: "ocean",
    links: [],
  },
  {
    id: "book",
    index: "07",
    title: "Becoming a Maker",
    subtitle: "A condensed introduction to hobby robotics",
    category: "Book / Education",
    meta: "2023",
    status: "Co-author",
    description:
      "A beginner-friendly guide to hobby robotics, co-authored with Jai Aadhithya and Hanish Abdulla, and launched at the Indian Embassy in Doha.",
    tags: ["Robotics", "Teaching", "Writing"],
    visual: "book",
    tone: "ember",
    links: [
      {
        label: "Read coverage",
        href: "https://www.gulf-times.com/article/670495/community/education/bps-young-authors-release-robotics-guide",
        external: true,
      },
    ],
  },
];

export const research = [
  {
    id: "gliogon",
    index: "R.01",
    title: "Gliogon",
    subtitle: "Treating inoperable gliomas with microbots",
    year: "Since 2022",
    status: "Ongoing",
    category: "Micro-robotics / Oncology",
    description:
      "Research into magnetically guided, 3D-printed microbots as a way to deliver treatment directly to inoperable gliomas, exploring a less invasive path through the bloodstream.",
    tags: ["Micro-robotics", "Magnetic guidance", "3D printing", "Oncology"],
    visual: "gliogon",
    tone: "rust",
  },
  {
    id: "particles",
    index: "R.02",
    title: "Fluorescent magnetic nanoparticles",
    subtitle: "CQD-modified Ga–Zn ferrites for imaging and delivery",
    year: "2025",
    status: "Manuscript",
    category: "Nanomaterials",
    description:
      "CQD-modified gallium zinc ferrite nanoparticles combining blue fluorescence with magnetic responsiveness for targeted drug delivery and imaging. Biocompatibility assessed in Drosophila up to 1 mg/mL.",
    tags: ["Nanoparticles", "Fluorescence", "Drug delivery", "Biocompatibility"],
    visual: "particles",
    tone: "cobalt",
  },
  {
    id: "cement",
    index: "R.03",
    title: "Cement 3D printing",
    subtitle: "Additive manufacturing, layer by layer",
    year: "Ongoing",
    status: "Exploratory",
    category: "Additive manufacturing",
    description:
      "Research into cement-based 3D printing: material behaviour, deposition, and the path from a printed layer to a structural idea.",
    tags: ["Additive manufacturing", "Cement", "Materials"],
    visual: "cement",
    tone: "sandstone",
  },
];

export const awards = [
  {
    year: "2025",
    title: "Gold Medal",
    event: "ITEX 2025",
    place: "Kuala Lumpur, Malaysia",
    note: "For M.A.S.H in the under-21 category. The first university-level team from Qatar to win Gold.",
  },
  {
    year: "2025",
    title: "Rising Innovators Award",
    event: "Web Summit Qatar",
    place: "Doha, Qatar",
    note: "Awarded by QRDI for M.A.S.H, recognised for high commercial and industrial potential.",
  },
  {
    year: "2023",
    title: "3rd Place",
    event: "National Innovation Olympiad",
    place: "Doha, Qatar",
    note: "For S.A.F.E: a marine safety system for detecting shark activity near swimming zones.",
  },
  {
    year: "2025",
    title: "Patent Pending",
    event: "M.A.S.H",
    place: "Qatar",
    note: "QPO Case #QU-RD-2025-0147.",
  },
  {
    year: "2023",
    title: "Book Launch",
    event: "Indian Embassy",
    place: "Doha, Qatar",
    note: "Becoming a Maker presented to Ambassador Vipul.",
  },
];

export const practice = [
  {
    index: "01",
    title: "Mechanical & CAD",
    blurb: "From a rough sketch to a part someone can manufacture.",
    tools: [
      "SolidWorks",
      "Fusion 360",
      "3D modelling",
      "Mechanism design",
      "Technical drawing",
    ],
  },
  {
    index: "02",
    title: "Robotics & Control",
    blurb: "Making hardware move and stop moving when it should.",
    tools: ["Arduino", "Raspberry Pi", "Sensors", "Actuators", "Prototyping"],
  },
  {
    index: "03",
    title: "AI & Computer Vision",
    blurb: "Teaching systems to see, read, and make a decision.",
    tools: [
      "Google OCR",
      "Computer vision",
      "Machine learning",
      "Python",
      "TensorFlow",
    ],
  },
  {
    index: "04",
    title: "Research & Materials",
    blurb: "Following a question into the lab and staying for the iterations.",
    tools: [
      "Nanoparticle synthesis",
      "Micro-robotics",
      "Experimental design",
      "Literature review",
    ],
  },
  {
    index: "05",
    title: "Fabrication",
    blurb: "The unglamorous, satisfying work of making it real.",
    tools: [
      "FDM 3D printing",
      "CNC",
      "Circuit design",
      "KiCad",
      "MATLAB",
      "LabVIEW",
      "C++",
    ],
  },
];

export const marqueeItems = [
  "Mechanical systems",
  "Robotics",
  "Research",
  "Fabrication",
  "Computer vision",
  "Product design",
  "Making",
];
