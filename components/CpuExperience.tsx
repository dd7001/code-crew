
"use client";

import { useEffect, useRef } from "react";

export default function CpuExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) return;

    let frame = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrollDistance = section.offsetHeight - window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(
          0,
          -rect.top / Math.max(1, scrollDistance)
        )
      );

      // Control the processor's animation through CSS variables.
      stage.style.setProperty("--progress", progress.toString());

      // Zoom in as the visitor scrolls.
      stage.style.setProperty(
        "--zoom",
        (1 + progress * 1.5).toString()
      );

      // Update the section progress indicator.
      section.style.setProperty(
        "--progress",
        progress.toString()
      );

      frame = 0;
    };

    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cpu-experience"
      id="experience"
    >
      <div className="cpu-sticky">
        {/* INTRODUCTION */}
        <div className="cpu-copy">
          <span className="eyebrow">
            ENGINEERED FOR WHAT&apos;S NEXT
          </span>

          <h2>
            Inside the
            <br />
            <span>technology.</span>
          </h2>

          <p>
            Every great digital experience begins with an idea.
            Then comes the engineering that brings it to life.
          </p>

          <span className="scroll-hint">
            SCROLL TO EXPLORE
          </span>
        </div>

        {/* PROCESSOR SCENE */}
        <div className="cpu-stage" ref={stageRef}>
          <div className="cpu-orbit orbit-one" />
          <div className="cpu-orbit orbit-two" />
          <div className="cpu-light" />

          <div className="cpu-assembly">
            {/* PROCESSOR SUBSTRATE */}
            <div className="cpu-substrate">
              <div className="substrate-inner">
                {/* GOLD CONTACTS */}
                <div className="contact-grid">
                  {Array.from({ length: 100 }, (_, i) => (
                    <span key={i} />
                  ))}
                </div>

                <div className="substrate-label">
                  ADVANCED PROCESSOR ARCHITECTURE
                </div>

                {/* LEFT COMPUTE DIE */}
                <div className="chiplet chiplet-left">
                  <div className="core-grid">
                    {Array.from({ length: 8 }, (_, i) => (
                      <span key={i} />
                    ))}
                  </div>

                  <small>COMPUTE DIE</small>
                </div>

                {/* RIGHT COMPUTE DIE */}
                <div className="chiplet chiplet-right">
                  <div className="core-grid">
                    {Array.from({ length: 8 }, (_, i) => (
                      <span key={i} />
                    ))}
                  </div>

                  <small>COMPUTE DIE</small>
                </div>

                {/* I/O CONTROLLER */}
                <div className="chiplet chiplet-center">
                  <span className="io-mark">I/O</span>
                  <small>CONTROLLER</small>
                </div>

                {/* CIRCUIT PATTERN */}
                <div className="circuit-lines" />
              </div>
            </div>

            {/* LIFTING METAL PROCESSOR LID */}
            <div className="cpu-lid">
              <div className="lid-face">
                <div className="lid-shine" />

                <div className="lid-brand">AMD</div>

                <div className="lid-name">
                  RYZEN
                </div>

                <div className="lid-model">
                  CODE CREW EDITION
                </div>

                <div className="lid-corner corner-one" />
                <div className="lid-corner corner-two" />
                <div className="lid-corner corner-three" />
                <div className="lid-corner corner-four" />
              </div>
            </div>
          </div>

          {/* SCENE CAPTIONS */}
          <div className="cpu-caption">
            <span>01 / THE FOUNDATION</span>
            <span>PRECISION IN EVERY LAYER</span>
          </div>

          <div className="cpu-data">
            <span>CC // 001</span>
            <span>PROCESSING IDEAS INTO REALITY</span>
          </div>
        </div>

        {/* SCROLL PROGRESS */}
        <div className="cpu-progress">
          <span />
        </div>
      </div>
    </section>
  );
}
