
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const beats: [number, number, string, string][] = [
  [0.00, 0.11, "EVERYTHING STARTS WITH AN IDEA.", "Before the technology, there is a vision."],
  [0.11, 0.23, "A NAME IS ONLY THE BEGINNING.", "Ideas take shape. Possibilities take form."],
  [0.23, 0.35, "ENGINEERED TO PERFORM.", "Precision is built into every layer."],
  [0.35, 0.47, "LOOK BENEATH THE SURFACE.", "The real engineering is only just beginning."],
  [0.47, 0.59, "BEYOND WHAT YOU CAN SEE.", "A world of technology lies beneath the metal."],
  [0.59, 0.70, "DOWN TO THE SILICON.", "The smallest structures can create the biggest possibilities."],
  [0.70, 0.82, "BILLIONS OF TINY CELLS.", "One intelligent core. Endless possibilities."],
];

const cells = Array.from({ length: 100 }, (_, i) => i);
const pins = Array.from({ length: 100 }, (_, i) => i);

const orbitLabels = [
  "WEB DEVELOPMENT",
  "CYBERSECURITY",
  "AI INTEGRATION",
  "SYSTEM ENGINEERING",
  "DIGITAL SOLUTIONS",
  "CUSTOM SOFTWARE",
  "TECHNOLOGY",
  "CODE CREW",
];

export default function ScrollWordmark() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const deviceInfo = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };

    const isLiteDevice =
      window.matchMedia("(max-width: 650px)").matches ||
      (typeof deviceInfo.deviceMemory === "number" &&
        deviceInfo.deviceMemory <= 2) ||
      navigator.hardwareConcurrency <= 2 ||
      deviceInfo.connection?.saveData === true;

    if (isLiteDevice) {
      document.documentElement.classList.add("cc-lite-device");
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const intro = section.querySelector<HTMLElement>(".cc-cpu-intro");
    const object = section.querySelector<HTMLElement>(".cc-cpu-object");
    const beatsElements = Array.from(
      section.querySelectorAll<HTMLElement>("[data-beat]")
    );

    const progressFill = section.querySelector<HTMLElement>(
      ".cc-cpu-progress-fill"
    );

    const heat = section.querySelector<HTMLElement>(".cc-cpu-heatspreader");
    const thermal = section.querySelector<HTMLElement>(".cc-cpu-thermal");
    const dieFrame = section.querySelector<HTMLElement>(".cc-cpu-die-frame");
    const substrate = section.querySelector<HTMLElement>(".cc-cpu-substrate");
    const pinLayer = section.querySelector<HTMLElement>(".cc-cpu-pins");
    const die = section.querySelector<HTMLElement>(".cc-cpu-die");
    const cellGrid = section.querySelector<HTMLElement>(".cc-cpu-cells");

    const orbit = section.querySelector<HTMLElement>(".cc-cpu-orbit");
    const desktop = section.querySelector<HTMLElement>(".cc-device-screen");
    const laptop = section.querySelector<HTMLElement>(".cc-device-laptop");
    const ceo = section.querySelector<HTMLElement>(".cc-cpu-ceo");
    const finalLinks = section.querySelector<HTMLElement>(
      ".cc-cpu-final-links"
    );

    if (
      !intro ||
      !object ||
      !heat ||
      !thermal ||
      !dieFrame ||
      !substrate ||
      !pinLayer ||
      !die ||
      !cellGrid ||
      !orbit ||
      !desktop ||
      !laptop ||
      !ceo
    ) {
      return;
    }

    const clamp = (value: number) =>
      Math.min(1, Math.max(0, value));

    if (reducedMotion.matches) {
      intro.style.opacity = "0";
      object.style.opacity = "1";

      heat.style.transform = "translateY(-110px)";
      thermal.style.transform = "translateY(-65px)";
      dieFrame.style.transform = "translateY(-10px)";
      substrate.style.transform = "translateY(60px)";
      pinLayer.style.transform = "translateY(120px)";

      die.style.transform = "scale(1.2)";
      cellGrid.style.opacity = "1";

      orbit.style.opacity = "1";
      ceo.style.opacity = "1";

      beatsElements.forEach((beat) => {
        beat.style.opacity = "0";
      });

      if (finalLinks) finalLinks.style.opacity = "1";

      return;
    }

    const update = () => {
      const rect = section.getBoundingClientRect();

      const distance = Math.max(
        1,
        section.offsetHeight - window.innerHeight
      );

      const progress = clamp(-rect.top / distance);

      // CPU assembly
      const cpuReveal = clamp((progress - 0.10) / 0.15);

      // CPU disassembly, followed by reassembly
      const explodeIn = clamp((progress - 0.32) / 0.20);
      const explodeOut = clamp((progress - 0.68) / 0.11);
      const explosion = explodeIn * (1 - explodeOut);

      // Deep zoom into the silicon
      const zoomIn = clamp((progress - 0.49) / 0.13);
      const zoomOut = clamp((progress - 0.64) / 0.11);
      const zoom = zoomIn * (1 - zoomOut);

      // New desktop and laptop scenes.
      const desktopProgress = clamp((progress - 0.77) / 0.09);
      const desktopFade = 1 - clamp((progress - 0.85) / 0.06);
      const desktopOpacity = desktopProgress * desktopFade;

      const laptopProgress = clamp((progress - 0.86) / 0.09);
      const laptopFade = 1 - clamp((progress - 0.94) / 0.05);
      const laptopOpacity = laptopProgress * laptopFade;

      const deviceTransition = clamp((progress - 0.77) / 0.09);

      // Opening typography
      intro.style.opacity = String(
        1 - clamp((progress - 0.06) / 0.16)
      );

      intro.style.transform =
        `translateY(${-progress * 35}px) ` +
        `scale(${1 - progress * 0.08})`;

      // Processor positioning and reveal
      object.style.opacity = String(
        cpuReveal * (1 - clamp((progress - 0.79) / 0.07))
      );

      object.style.transform =
        `translate(-50%, calc(-50% + ${(1 - cpuReveal) * 35}px)) ` +
        `scale(${(0.78 + cpuReveal * 0.22) * (1 - deviceTransition * 0.48)})`;

      // Desktop monitor: zoom out to reveal the whole screen.
      desktop.style.opacity = String(desktopOpacity);
      desktop.style.transform =
        `translate(-50%, -50%) scale(${0.72 + desktopProgress * 0.28})`;

      // Laptop: zoom closer to reveal the display and keyboard.
      laptop.style.opacity = String(laptopOpacity);
      laptop.style.transform =
        `translate(-50%, -50%) scale(${0.62 + laptopProgress * 0.38})`;

      // Individual processor layers
      heat.style.transform =
        `translateY(${-explosion * 145}px) ` +
        `translateZ(${explosion * 42}px) ` +
        `rotateZ(${explosion * 9}deg)`;

      thermal.style.transform =
        `translateY(${-explosion * 78}px) ` +
        `translateZ(${explosion * 25}px)`;

      dieFrame.style.transform =
        `translateY(${-explosion * 15}px) ` +
        `translateZ(${explosion * 15}px)`;

      substrate.style.transform =
        `translateY(${explosion * 85}px) ` +
        `translateZ(${-explosion * 8}px)`;

      pinLayer.style.transform =
        `translateY(${explosion * 155}px) ` +
        `translateZ(${-explosion * 30}px)`;

      // Silicon zoom
      die.style.transform = `scale(${1 + zoom * 2.3})`;
      cellGrid.style.opacity = String(zoom);

      // Keep the silicon cells static to reduce per-frame work.\n
      // Story transitions
      beatsElements.forEach((beat, index) => {
        const [start, end] = beats[index];

        const fadeIn =
          start === 0 ? 1 : clamp((progress - start) / 0.025);

        const fadeOut = clamp((end - progress) / 0.025);
        const opacity = Math.min(fadeIn, fadeOut);

        beat.style.opacity = String(opacity);
        beat.style.transform =
          `translateY(${(1 - opacity) * 22}px)`;
      });

      // Orbiting company services
      const orbitProgress = clamp((progress - 0.70) / 0.17);

      orbit.style.opacity = String(
        clamp((progress - 0.70) / 0.07) *
        (1 - clamp((progress - 0.80) / 0.06))
      );

      orbit.style.transform =
        `translate(-50%, -50%) rotate(${orbitProgress * 540}deg)`;

      // CEO introduction
      const ceoProgress = clamp((progress - 0.94) / 0.06);

      ceo.style.opacity = String(ceoProgress);
      ceo.style.transform =
        `translateY(${(1 - ceoProgress) * 25}px)`;

      // Final links
      if (finalLinks) {
        finalLinks.style.opacity = String(
          clamp((progress - 0.97) / 0.03)
        );
      }

      if (progressFill) {
        progressFill.style.transform = `scaleX(${progress})`;
      }
    };

    let frame = 0;
    let active = false;

    const requestUpdate = () => {
      if (!active || frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    const startListening = () => {
      if (active) return;
      active = true;
      update();

      window.addEventListener("scroll", requestUpdate, {
        passive: true,
      });
    };

    const stopListening = () => {
      if (!active) return;
      active = false;

      window.removeEventListener("scroll", requestUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    };

    update();

    let observer: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          startListening();
        } else {
          stopListening();
        }
      }, {
        rootMargin: "100% 0px",
      });

      observer.observe(section);
    } else {
      startListening();
    }

    window.addEventListener("resize", requestUpdate, {
      passive: true,
    });

    return () => {
      observer?.disconnect();
      stopListening();
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cc-cpu-journey"
      id="cpu-journey"
      aria-label="The Code Crew processor experience"
    >
      <div className="cc-cpu-sticky">
        <div className="cc-cpu-grid" />

        {/* OPENING BRAND */}
        <div className="cc-cpu-intro">
          <span>INDEPENDENT DIGITAL TECHNOLOGY STUDIO</span>

          <h1>
            CODE <strong>CREW</strong>
          </h1>

          <p>We turn ideas into technology.</p>

          <div className="cc-cpu-scroll-indicator">
            <span />
            SCROLL TO EXPLORE
          </div>
        </div>

        {/* CSS-DRAWN PROCESSOR */}
        <div className="cc-cpu-object" aria-hidden="true">
          <div className="cc-cpu-shadow" />

          <div className="cc-cpu-stack">
            <div className="cc-cpu-pins">
              {pins.map((pin) => (
                <span key={pin} />
              ))}
            </div>

            <div className="cc-cpu-substrate">
              <div className="cc-cpu-substrate-inner">
                <span>AMD</span>
                <span>PROCESSOR</span>
              </div>
            </div>

            <div className="cc-cpu-die-frame">
              <div className="cc-cpu-die">
                <div className="cc-cpu-die-label">
                  SILICON ARCHITECTURE
                </div>

                <div className="cc-cpu-cells">
                  {cells.map((cell) => (
                    <span key={cell} />
                  ))}
                </div>
              </div>
            </div>

            <div className="cc-cpu-thermal" />

            <div className="cc-cpu-heatspreader">
              <div className="cc-cpu-metal-edge">
                <span>AMD</span>
                <strong>RYZEN</strong>
                <small>PROCESSOR</small>
                <i>PRECISION ENGINEERING</i>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP COMPUTER SCREEN */}
        <div className="cc-device-screen" aria-hidden="true">
          <div className="cc-device-monitor">
            <div className="cc-device-display">
              <div className="cc-device-topbar">
                <span />
                <span />
                <span />
                <small>CODE CREW</small>
              </div>

              <div className="cc-device-screen-content">
                <span>IDEAS INTO TECHNOLOGY.</span>
                <strong>BUILD SOMETHING<br />EXTRAORDINARY.</strong>
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>

          <div className="cc-device-monitor-neck" />
          <div className="cc-device-monitor-base" />
        </div>

        {/* LAPTOP */}
        <div className="cc-device-laptop" aria-hidden="true">
          <div className="cc-device-laptop-display">
            <div className="cc-device-laptop-screen">
              <div className="cc-device-laptop-bar">
                <span>CODE CREW</span>
                <i />
              </div>

              <div className="cc-device-laptop-content">
                <small>INDEPENDENT DIGITAL STUDIO</small>
                <strong>
                  WE BUILD<br />
                  THE FUTURE.
                </strong>
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className="cc-device-laptop-base">
            <div className="cc-device-keyboard" />
            <div className="cc-device-trackpad" />
          </div>
        </div>

        {/* ORBITING SERVICES */}
        <div className="cc-cpu-orbit" aria-hidden="true">
          <div className="cc-cpu-orbit-ring" />

          {orbitLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        {/* STORY TEXT */}
        <div className="cc-cpu-story" aria-live="off">
          {beats.map((beat, index) => (
            <div
              className="cc-cpu-beat"
              data-beat
              key={beat[2]}
            >
              <span className="cc-cpu-beat-number">
                0{index + 1} / 07
              </span>

              <h2>{beat[2]}</h2>
              <p>{beat[3]}</p>
            </div>
          ))}
        </div>

        {/* CEO FINALE */}
        <div className="cc-cpu-ceo">
          <span className="cc-cpu-ceo-label">
            THE PEOPLE BEHIND THE TECHNOLOGY
          </span>

          <h2>
            Led by our CEO,
            <br />
            <strong>Dylan Israel.</strong>
          </h2>

          <p>
            Building Code Crew from Nairobi, Kenya.
            Driven by ideas, engineering and the possibilities
            of technology.
          </p>

          <div className="cc-cpu-final-links">
            <Link href="/services">Explore what we do</Link>
            <Link href="/contact">Start a project</Link>
          </div>
        </div>

        <div className="cc-cpu-progress">
          <span className="cc-cpu-progress-fill" />
        </div>

        <span className="cc-cpu-corner-label">
          CODE CREW / ENGINEERED FOR POSSIBILITY
        </span>
      </div>
    </section>
  );
}
