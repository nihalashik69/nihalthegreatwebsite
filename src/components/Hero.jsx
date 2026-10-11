import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import nihalPhoto from "../assets/hero.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const portraitRef = useRef(null);
  const float1 = useRef(null);
  const float2 = useRef(null);
  const float3 = useRef(null);
  const float4 = useRef(null);
  const float5 = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-char", {
        y: 120,
        opacity: 0,
        rotateX: -90,
        stagger: 0.06,
        duration: 1.1,
      })
        .from(
          subRef.current,
          { y: 40, opacity: 0, duration: 0.9 },
          "-=0.5"
        )
        .from(
          ".hero-meta",
          { y: 30, opacity: 0, stagger: 0.12, duration: 0.8 },
          "-=0.5"
        )
        .from(
          ".float-el",
          { y: 40, opacity: 0, stagger: 0.1, duration: 0.8 },
          "-=1"
        )
        .from(
          ".scroll-indicator",
          { opacity: 0, duration: 0.8 },
          "-=0.3"
        );

      gsap.to(titleRef.current, {
        scale: 1.4,
        y: -60,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(subRef.current, {
        y: -100,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "center top",
          scrub: 1,
        },
      });

      gsap.to(portraitRef.current, {
        scale: 1.4,
        y: -60,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      const parallaxEls = [
        { el: float1.current, y: -80, rotate: 15 },
        { el: float2.current, y: -120, rotate: -20 },
        { el: float3.current, y: -60, rotate: 10 },
        { el: float4.current, y: -140, rotate: -15 },
        { el: float5.current, y: -90, rotate: 25 },
      ];

      parallaxEls.forEach(({ el, y, rotate }) => {
        if (!el) return;
        gsap.to(el, {
          y,
          rotate,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      if (ringRef.current) {
        gsap.to(ringRef.current, {
          rotate: 180,
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const name = "NIHAL";

  return (
    <section
      ref={heroRef}
      id="hero"
      className="scene-3d relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--color-accent)] opacity-[0.08] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[var(--color-accent-dim)] opacity-[0.1] blur-[100px]" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating 3D geometric elements */}
      <div className="absolute top-[15%] left-[8%] float-el float-slow" ref={float1}>
        <div className="w-16 h-16 rounded-lg border-2 border-[var(--color-accent)]/40 bg-[var(--color-accent)]/5 backdrop-blur-sm" style={{ transform: "rotate(45deg)" }} />
      </div>

      <div className="absolute top-[25%] right-[12%] float-el float-medium" ref={float2}>
        <div className="w-12 h-12 rounded-full border-2 border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 backdrop-blur-sm" />
      </div>

      <div className="absolute bottom-[28%] left-[12%] float-el float-fast" ref={float3}>
        <div className="w-10 h-10 rotate-12 border-2 border-white/20 bg-white/5 backdrop-blur-sm" />
      </div>

      <div className="absolute bottom-[20%] right-[8%] float-el float-slow" ref={float4}>
        <div className="w-14 h-14 rounded-full border-2 border-white/15" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] glow-pulse" />
        </div>
      </div>

      <div className="absolute top-[45%] left-[5%] float-el float-medium" ref={float5}>
        <div className="w-8 h-8 bg-[var(--color-accent)]/20 rotate-45 backdrop-blur-sm" />
      </div>

      {/* Rotating ring behind portrait */}
      <div ref={ringRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-[var(--color-accent)]/15 spin-slow" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[620px] h-[620px] rounded-full border border-white/5 spin-reverse" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 items-center gap-4">
          {/* Left: headline */}
          <div className="col-span-12 lg:col-span-7 z-20">
            <p className="hero-meta text-sm md:text-base tracking-[0.3em] uppercase text-[var(--color-text-dim)] mb-6 font-medium">
              Roboticist &amp; Mechanical Engineer
            </p>

            <h1
              ref={titleRef}
              className="font-display font-black leading-[0.85] tracking-tighter text-[22vw] md:text-[14vw] will-change-transform"
            >
              <span className="block">
                {name.split("").map((char, i) => (
                  <span
                    key={i}
                    className="hero-char inline-block text-3d"
                    style={{ transformOrigin: "bottom" }}
                  >
                    {char}
                  </span>
                ))}
              </span>
              <span className="block hero-meta text-[8vw] md:text-[5vw] font-extrabold text-3d-blue mt-2">
                Ashik
              </span>
            </h1>

            <p
              ref={subRef}
              className="hero-meta mt-8 text-lg md:text-2xl text-[var(--color-text-dim)] max-w-xl font-light leading-relaxed"
            >
              Inventing AI-powered robotics and{" "}
              <span className="text-[var(--color-accent)] font-medium">
                intelligent sorting systems
              </span>{" "}
              that redefine logistics.
            </p>

            <div className="hero-meta mt-10 flex items-center gap-6">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative overflow-hidden rounded-full bg-[var(--color-accent)] text-white px-8 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-accent)]/40"
              >
                <span className="relative z-10">View Work</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm font-semibold tracking-wide text-white/70 hover:text-white transition-colors"
              >
                Get in touch →
              </a>
            </div>
          </div>

          {/* Center: portrait */}
          <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div
              ref={portraitRef}
              className="relative will-change-transform"
            >
              <div className="relative float-medium">
                {/* Glow behind portrait */}
                <div className="absolute inset-0 bg-[var(--color-accent)]/20 blur-[80px] rounded-full scale-90" />
                <img
                  src={nihalPhoto}
                  alt="Nihal Ashik"
                  className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] object-cover object-top rounded-3xl"
                  style={{ filter: "drop-shadow(0 20px 60px rgba(59, 130, 246, 0.25))" }}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20young%20south%20asian%20man%20with%20curly%20hair%20wearing%20dark%20blue%20shirt%2C%20professional%20engineering%20student%2C%20clean%20background%2C%20cinematic%20lighting&image_size=portrait_4_3";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center bounce-down">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
        <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-text-mute)]">
          Scroll
        </span>
      </div>
    </section>
  );
}
