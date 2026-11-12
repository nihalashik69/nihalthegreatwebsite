function MashVisual() {
  return (
    <div className="pv pv-mash">
      <div className="pv-top">
        <span>01 / LOGISTICS</span>
        <span>OCR → ROUTE → BIN</span>
      </div>
      <svg viewBox="0 0 900 620" className="pv-svg" aria-hidden="true" focusable="false">
        <defs>
          <pattern id="mash-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeOpacity="0.12" />
          </pattern>
          <marker id="mash-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10Z" fill="var(--tone-accent)" />
          </marker>
        </defs>
        <rect width="900" height="620" fill="url(#mash-grid)" />
        <g className="pv-mash-machine">
          <path d="M90 402H810" stroke="currentColor" strokeOpacity="0.2" />
          <path d="M90 438H810" stroke="currentColor" strokeOpacity="0.12" />
          <path d="M120 366L780 366" stroke="var(--tone-accent)" strokeOpacity="0.55" strokeDasharray="3 12" markerEnd="url(#mash-arrow)" />
          <path d="M120 330L780 330" stroke="currentColor" strokeOpacity="0.35" strokeDasharray="2 10" />
          <g fill="none" stroke="currentColor" strokeOpacity="0.35">
            <rect x="140" y="286" width="130" height="86" rx="4" />
            <rect x="300" y="286" width="130" height="86" rx="4" />
            <rect x="460" y="286" width="130" height="86" rx="4" />
            <rect x="620" y="286" width="130" height="86" rx="4" />
          </g>
          <g fill="var(--tone-accent)">
            <circle cx="205" cy="329" r="4" />
            <circle cx="365" cy="329" r="4" />
            <circle cx="525" cy="329" r="4" />
            <circle cx="685" cy="329" r="4" />
          </g>
          <g fill="none" stroke="currentColor" strokeOpacity="0.55">
            <rect x="166" y="380" width="78" height="50" rx="3" />
            <rect x="326" y="380" width="78" height="50" rx="3" />
            <rect x="486" y="380" width="78" height="50" rx="3" />
            <rect x="646" y="380" width="78" height="50" rx="3" />
          </g>
          <g fill="currentColor" fillOpacity="0.7" fontFamily="var(--font-body)" fontSize="11" letterSpacing="2">
            <text x="166" y="410">PARCEL</text>
            <text x="326" y="410">PARCEL</text>
            <text x="486" y="410">PARCEL</text>
            <text x="646" y="410">PARCEL</text>
          </g>
          <g stroke="currentColor" strokeOpacity="0.14">
            <circle cx="205" cy="466" r="12" />
            <circle cx="365" cy="466" r="12" />
            <circle cx="525" cy="466" r="12" />
            <circle cx="685" cy="466" r="12" />
          </g>
        </g>
        <g fill="none" stroke="var(--tone-accent)" strokeOpacity="0.18">
          <circle cx="782" cy="140" r="58" />
          <circle cx="782" cy="140" r="88" />
        </g>
      </svg>
      <div className="pv-bottom">
        <span className="pv-word-outline">M.A.S.H</span>
        <span className="pv-caption">Modular hardware / computer vision</span>
      </div>
    </div>
  );
}

function PanatexVisual() {
  return (
    <div className="pv pv-panatex">
      <div className="pv-top">
        <span>PANATEX LABS</span>
        <span>DOHA / QA</span>
      </div>
      <div className="pv-panatex-stage">
        <div className="pv-panatex-ring" aria-hidden="true" />
        <div className="pv-panatex-word">
          PANA
          <br />
          TEX
        </div>
        <span className="pv-panatex-side">Student-run robotics / education</span>
      </div>
      <div className="pv-panatex-steps">
        <span>Make</span>
        <span>Test</span>
        <span>Share</span>
      </div>
      <div className="pv-panatex-foot">Open workshops / open source / 25.2854° N</div>
    </div>
  );
}

function RespyrVisual() {
  return (
    <div className="pv pv-respyr">
      <div className="pv-top">
        <span>RESPYR / HEALTH</span>
        <span>VOC / 01</span>
      </div>
      <div className="pv-respyr-rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <svg viewBox="0 0 900 620" className="pv-svg" aria-hidden="true" focusable="false">
        <path
          d="M80 330 C150 330 160 300 190 300 C225 300 225 390 265 390 C305 390 305 260 350 260 C395 260 390 370 430 370 C475 370 470 315 510 315 C550 315 555 345 600 345 C650 345 650 290 700 290 C745 290 750 330 820 330"
          fill="none"
          stroke="var(--tone-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M80 362 C150 362 180 342 220 342 C260 342 265 402 305 402 C345 402 345 286 385 286 C425 286 425 372 465 372 C505 372 510 336 550 336 C590 336 600 356 640 356 C690 356 700 312 750 312 C790 312 800 340 820 340"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <g fill="var(--tone-accent)">
          <circle cx="80" cy="330" r="4" />
          <circle cx="820" cy="330" r="4" />
        </g>
      </svg>
      <span className="pv-respyr-word">BREATHE</span>
      <div className="pv-respyr-bottom">
        <span>Inhale</span>
        <span className="pv-respyr-line" />
        <span>Exhale</span>
      </div>
    </div>
  );
}

function AqtarVisual() {
  return (
    <div className="pv pv-aqtar">
      <div className="pv-top">
        <span>AQTAR / MAPS</span>
        <span>QA / 25.28° N</span>
      </div>
      <svg viewBox="0 0 900 620" className="pv-svg" aria-hidden="true" focusable="false">
        <g fill="none" stroke="currentColor" strokeOpacity="0.22">
          <path d="M-40 180C130 80 280 250 450 160S740 90 940 210" />
          <path d="M-40 230C140 130 300 300 470 210S760 140 940 260" />
          <path d="M-40 280C150 180 310 350 490 260S780 190 940 310" />
          <path d="M-40 330C160 230 330 400 510 310S800 240 940 360" />
          <path d="M-40 380C180 280 350 450 530 360S820 290 940 410" />
          <path d="M-40 430C200 330 370 500 550 410S840 340 940 460" />
          <path d="M-40 480C220 380 390 550 570 460S860 390 940 510" />
        </g>
        <path
          d="M180 500C260 430 310 470 380 380S560 330 610 250S730 210 780 150"
          fill="none"
          stroke="var(--tone-accent)"
          strokeWidth="1.5"
          strokeDasharray="3 10"
        />
        <circle cx="180" cy="500" r="8" fill="var(--tone-accent)" />
        <circle cx="780" cy="150" r="8" fill="none" stroke="var(--tone-accent)" />
        <circle cx="780" cy="150" r="3" fill="var(--tone-accent)" />
      </svg>
      <div className="pv-aqtar-word">AQTAR</div>
      <div className="pv-aqtar-labels">
        <span>Places</span>
        <span>Routes</span>
        <span>Discovery</span>
      </div>
    </div>
  );
}

function BusVisual() {
  return (
    <div className="pv pv-bus">
      <div className="pv-top">
        <span>QU / CAMPUS TRANSIT</span>
        <span className="pv-live">
          <i />
          LIVE
        </span>
      </div>
      <svg viewBox="0 0 900 620" className="pv-svg" aria-hidden="true" focusable="false">
        <g stroke="currentColor" strokeOpacity="0.12">
          <path d="M90 120V530M240 120V530M390 120V530M540 120V530M690 120V530M840 120V530" />
          <path d="M40 180H860M40 300H860M40 420H860" />
        </g>
        <path
          d="M100 480C220 480 220 300 350 300S500 430 600 360S690 170 820 170"
          fill="none"
          stroke="var(--tone-accent)"
          strokeWidth="1.5"
          strokeDasharray="2 10"
        />
        <path
          d="M100 480C220 480 220 300 350 300S500 430 600 360S690 170 820 170"
          fill="none"
          stroke="var(--tone-accent)"
          strokeOpacity="0.15"
          strokeWidth="20"
        />
        <g fill="var(--tone-bg)" stroke="var(--tone-accent)">
          <circle cx="100" cy="480" r="7" />
          <circle cx="350" cy="300" r="7" />
          <circle cx="600" cy="360" r="7" />
          <circle cx="820" cy="170" r="7" />
        </g>
        <circle cx="520" cy="392" r="11" fill="var(--tone-accent)" className="pv-pulse" />
        <circle cx="520" cy="392" r="22" fill="none" stroke="var(--tone-accent)" strokeOpacity="0.3" />
      </svg>
      <div className="pv-bus-word">
        QU
        <span>SHUTTLE</span>
      </div>
      <div className="pv-bus-foot">
        <span>07:42</span>
        <span>Next stop: Library</span>
      </div>
    </div>
  );
}

function SafeVisual() {
  return (
    <div className="pv pv-safe">
      <div className="pv-top">
        <span>S.A.F.E / MARINE</span>
        <span>SCAN / ALERT</span>
      </div>
      <svg viewBox="0 0 900 620" className="pv-svg" aria-hidden="true" focusable="false">
        <g fill="none" stroke="var(--tone-accent)" strokeOpacity="0.3">
          <circle cx="720" cy="290" r="80" />
          <circle cx="720" cy="290" r="145" strokeOpacity="0.2" />
          <circle cx="720" cy="290" r="215" strokeOpacity="0.12" />
          <circle cx="720" cy="290" r="290" strokeOpacity="0.06" />
        </g>
        <path
          d="M150 440C245 420 300 350 390 345C480 340 545 405 640 415C700 421 755 415 820 405"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
        <path
          d="M330 410C365 370 385 315 425 300C455 289 475 310 483 340C490 370 470 405 450 430C440 444 425 448 410 440C395 431 385 418 370 421C350 425 342 430 330 410Z"
          fill="none"
          stroke="var(--tone-accent)"
          strokeWidth="1.5"
        />
        <g fill="var(--tone-accent)">
          <circle cx="720" cy="290" r="4" />
          <circle cx="610" cy="390" r="4" />
          <circle cx="770" cy="390" r="4" />
        </g>
      </svg>
      <div className="pv-safe-word">S.A.F.E</div>
      <div className="pv-safe-foot">
        <span>Shark activity / swimming zones</span>
        <span>NIO / 03</span>
      </div>
    </div>
  );
}

function BookVisual() {
  return (
    <div className="pv pv-book">
      <div className="pv-book-stage">
        <div className="pv-book-cover">
          <div className="pv-book-kicker">A condensed introduction to hobby robotics</div>
          <div className="pv-book-title">
            BECOMING
            <br />
            A MAKER
          </div>
          <div className="pv-book-rule" />
          <div className="pv-book-meta">
            <span>Nihal Ashik</span>
            <span>Jai Aadhithya</span>
            <span>Hanish Abdulla</span>
          </div>
          <svg viewBox="0 0 240 120" className="pv-book-bot" aria-hidden="true" focusable="false">
            <g fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="20" y="36" width="78" height="50" rx="8" />
              <path d="M38 36V20M80 36V20M98 54H142M142 44V64" />
              <circle cx="44" cy="60" r="5" />
              <circle cx="75" cy="60" r="5" />
              <path d="M52 76H68" />
              <path d="M142 54L170 36M142 54L170 72" />
              <circle cx="181" cy="30" r="6" />
              <circle cx="181" cy="78" r="6" />
            </g>
          </svg>
        </div>
        <div className="pv-book-spine">
          <span>BECOMING A MAKER</span>
          <span>NIHAL ASHIK</span>
        </div>
      </div>
      <div className="pv-book-foot">
        <span>Published / 2023</span>
        <span>Robotics / Education</span>
      </div>
    </div>
  );
}

function GliogonVisual() {
  return (
    <div className="pv pv-gliogon">
      <div className="pv-top">
        <span>GLIOGON / R.01</span>
        <span>MAGNETIC GUIDANCE</span>
      </div>
      <svg viewBox="0 0 900 620" className="pv-svg" aria-hidden="true" focusable="false">
        <g fill="none" stroke="currentColor" strokeOpacity="0.16">
          <path d="M-30 310C120 220 240 410 390 330S650 220 940 330" />
          <path d="M-30 370C140 280 260 470 410 390S670 280 940 390" />
          <path d="M-30 250C100 160 220 350 370 270S630 160 940 270" />
        </g>
        <g fill="none" stroke="var(--tone-accent)">
          <circle cx="470" cy="308" r="72" strokeOpacity="0.45" />
          <circle cx="470" cy="308" r="112" strokeOpacity="0.28" strokeDasharray="3 12" />
          <circle cx="470" cy="308" r="154" strokeOpacity="0.16" />
          <path d="M346 308H410M530 308H594" strokeOpacity="0.6" />
          <path d="M470 184V248M470 368V432" strokeOpacity="0.6" />
        </g>
        <path
          d="M90 470C190 470 210 360 320 360"
          fill="none"
          stroke="var(--tone-accent)"
          strokeWidth="1.5"
          strokeDasharray="2 10"
        />
        <g>
          <circle cx="470" cy="308" r="18" fill="var(--tone-accent)" />
          <circle cx="470" cy="308" r="30" fill="none" stroke="var(--tone-accent)" strokeOpacity="0.35" />
          <circle cx="512" cy="278" r="4" fill="currentColor" fillOpacity="0.7" />
          <circle cx="438" cy="340" r="4" fill="currentColor" fillOpacity="0.7" />
        </g>
        <g fill="currentColor" fillOpacity="0.55" fontFamily="var(--font-body)" fontSize="11" letterSpacing="2">
          <text x="470" y="490" textAnchor="middle">MICROBOT / TARGET</text>
          <text x="90" y="510" fontSize="10" fillOpacity="0.4">BLOODSTREAM</text>
        </g>
      </svg>
      <div className="pv-gliogon-word">
        GLIO<span>GON</span>
      </div>
      <div className="pv-bottom">
        <span>Inoperable gliomas / magnetic delivery</span>
        <span>R &amp; D</span>
      </div>
    </div>
  );
}

function ParticlesVisual() {
  return (
    <div className="pv pv-particles">
      <div className="pv-top">
        <span>PARTICLES / R.02</span>
        <span>Ga–Zn FERRITE / CQD</span>
      </div>
      <svg viewBox="0 0 900 620" className="pv-svg" aria-hidden="true" focusable="false">
        <g fill="currentColor" fillOpacity="0.28">
          {Array.from({ length: 11 }).map((_, row) =>
            Array.from({ length: 16 }).map((__, col) => (
              <circle
                key={`${row}-${col}`}
                cx={80 + col * 50}
                cy={90 + row * 40}
                r={1.4}
              />
            ))
          )}
        </g>
        <g fill="none" stroke="var(--tone-accent)" strokeOpacity="0.16">
          <path d="M180 170L280 250L380 210L480 290L580 250L680 330L780 290" />
          <path d="M180 290L280 210L380 330L480 250L580 170L680 250L780 210" />
          <path d="M180 410L280 330L380 450L480 370L580 290L680 370L780 330" />
        </g>
        <g fill="var(--tone-accent)">
          <circle cx="480" cy="290" r="8" />
          <circle cx="280" cy="210" r="5" />
          <circle cx="680" cy="250" r="5" />
        </g>
        <g fill="none" stroke="var(--tone-accent)" strokeOpacity="0.35">
          <circle cx="480" cy="290" r="34" />
          <circle cx="480" cy="290" r="58" strokeDasharray="2 9" />
        </g>
        <g stroke="currentColor" strokeOpacity="0.2">
          <path d="M80 520H820" />
          <path d="M80 548H620" />
        </g>
      </svg>
      <div className="pv-particles-word">
        FLUORESCENT
        <span>MAGNETIC NANOPARTICLES</span>
      </div>
      <div className="pv-bottom">
        <span>Imaging / targeted delivery</span>
        <span>MANUSCRIPT</span>
      </div>
    </div>
  );
}

function CementVisual() {
  return (
    <div className="pv pv-cement">
      <div className="pv-top">
        <span>CEMENT 3D / R.03</span>
        <span>LAYER / DEPOSITION</span>
      </div>
      <svg viewBox="0 0 900 620" className="pv-svg" aria-hidden="true" focusable="false">
        <g fill="none" stroke="currentColor" strokeOpacity="0.18">
          {Array.from({ length: 9 }).map((_, index) => (
            <path
              key={index}
              d={`M${280 - index * 12} ${500 - index * 24} L${620 + index * 12} ${500 - index * 24}`}
            />
          ))}
          <path d="M250 500L650 500L710 560L190 560Z" />
          <path d="M280 500L280 380M620 500L620 380" />
        </g>
        <g stroke="var(--tone-accent)" strokeOpacity="0.65" fill="none">
          <path d="M388 236H512" strokeWidth="1.5" />
          <path d="M450 236V292" strokeWidth="1.5" />
          <path d="M424 292H476" strokeWidth="1.5" />
          <path d="M450 308V432" strokeWidth="1.5" strokeDasharray="3 8" />
        </g>
        <g stroke="currentColor" strokeOpacity="0.4">
          <rect x="370" y="200" width="160" height="36" rx="6" fill="none" />
          <circle cx="386" cy="218" r="3" fill="var(--tone-accent)" stroke="none" />
          <circle cx="402" cy="218" r="3" fill="currentColor" fillOpacity="0.35" stroke="none" />
        </g>
        <g fill="var(--tone-accent)">
          <circle cx="450" cy="452" r="5" />
        </g>
      </svg>
      <div className="pv-cement-word">
        LAYER
        <span>BY LAYER</span>
      </div>
      <div className="pv-bottom">
        <span>Additive manufacturing / material behaviour</span>
        <span>EXPLORATORY</span>
      </div>
    </div>
  );
}

const visuals = {
  mash: MashVisual,
  panatex: PanatexVisual,
  respyr: RespyrVisual,
  aqtar: AqtarVisual,
  bus: BusVisual,
  safe: SafeVisual,
  book: BookVisual,
  gliogon: GliogonVisual,
  particles: ParticlesVisual,
  cement: CementVisual,
};

export default function ProjectVisual({ kind }) {
  const Visual = visuals[kind];
  return Visual ? <Visual /> : null;
}
