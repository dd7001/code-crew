
"use client";

const contacts = Array.from({ length: 196 }, (_, i) => i);
const cores = Array.from({ length: 8 }, (_, i) => i);
const capacitors = Array.from({ length: 24 }, (_, i) => i);

export default function CpuExperience() {
  return (
    <section className="cpu-experience" id="experience">
      <div className="cpu-sticky">
        <div className="cpu-copy">
          <span className="eyebrow">ENGINEERED FOR WHAT'S NEXT</span>

          <h2>
            Inside the
            <br />
            <span>technology.</span>
          </h2>

          <p>
            Beneath every digital experience is a world of engineering,
            precision and performance.
          </p>

          <span className="scroll-hint">
            BUILT FROM THE INSIDE OUT <span>↗</span>
          </span>
        </div>

        <div className="cpu-stage">
          <div className="cpu-ambient" />
          <div className="cpu-orbit orbit-one" />
          <div className="cpu-orbit orbit-two" />

          <div className="cpu-assembly">
            {/* PCB PACKAGE */}
            <div className="cpu-package">
              <div className="package-edge" />

              <div className="package-top">
                <div className="package-traces" />

                {/* GOLD CONTACT ARRAY */}
                <div className="contact-grid">
                  {contacts.map((contact) => (
                    <span key={contact} />
                  ))}
                </div>

                {/* SILICON DIES */}
                <div className="silicon-die die-left">
                  <div className="die-label">CCD 01</div>
                  <div className="core-array">
                    {cores.map((core) => (
                      <span className="silicon-core" key={core}>
                        <i />
                      </span>
                    ))}
                  </div>
                  <span className="die-code">ZEN ARCHITECTURE</span>
                </div>

                <div className="silicon-die die-right">
                  <div className="die-label">CCD 02</div>
                  <div className="core-array">
                    {cores.map((core) => (
                      <span className="silicon-core" key={core}>
                        <i />
                      </span>
                    ))}
                  </div>
                  <span className="die-code">ZEN ARCHITECTURE</span>
                </div>

                {/* I/O DIE */}
                <div className="silicon-die io-die">
                  <div className="io-symbol">I/O</div>
                  <span className="die-code">CONTROLLER</span>
                </div>

                {/* CAPACITORS AND SMALL COMPONENTS */}
                <div className="capacitor-field">
                  {capacitors.map((item) => (
                    <span key={item} />
                  ))}
                </div>

                <div className="package-marking">
                  CC / PROCESSOR PACKAGE / 001
                </div>
              </div>
            </div>

            {/* METAL HEAT SPREADER */}
            <div className="cpu-lid">
              <div className="lid-side" />

              <div className="lid-face">
                <div className="lid-brushed-metal" />
                <div className="lid-reflection" />

                <div className="lid-screw screw-one" />
                <div className="lid-screw screw-two" />
                <div className="lid-screw screw-three" />
                <div className="lid-screw screw-four" />

                <div className="lid-inscription">
                  <span className="lid-brand">AMD</span>
                  <strong>RYZEN</strong>
                  <span className="lid-model">
                    CODE CREW EDITION
                  </span>
                </div>

                <div className="lid-serial">
                  CC-001 / ENGINEERED
                </div>
              </div>
            </div>
          </div>

          <div className="cpu-caption">
            <span>01 / PROCESSOR ARCHITECTURE</span>
            <span>PRECISION IN EVERY LAYER</span>
          </div>

          <div className="cpu-data">
            <span>CODE CREW / CC-001</span>
            <span>DESIGN. ENGINEER. BUILD.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
