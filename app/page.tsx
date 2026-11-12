
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ScrollWordmark from "@/components/ScrollWordmark";

const services = [
  {
    number: "01",
    title: "Website development",
    description:
      "Professional, responsive websites designed around your business, your customers and your goals.",
  },
  {
    number: "02",
    title: "Web applications",
    description:
      "Purpose-built applications that simplify workflows and turn complex ideas into useful products.",
  },
  {
    number: "03",
    title: "Mobile applications",
    description:
      "Intuitive mobile experiences designed to work naturally across modern devices.",
  },
  {
    number: "04",
    title: "UI / UX design",
    description:
      "Thoughtful interfaces and carefully planned user journeys that make digital products easier to use.",
  },
  {
    number: "05",
    title: "Custom software",
    description:
      "Practical software, APIs and integrations tailored to your specific business requirements.",
  },
  {
    number: "06",
    title: "Deployment & support",
    description:
      "Reliable launches, maintenance and technical support to keep your digital products running.",
  },
];

export default function Home() {
  return (
    <main>
      {/* SCROLL-DRIVEN CODE CREW INTRO */}
      <ScrollWordmark />

      {/* INTRODUCTION */}
      <section className="statement-section">
        <div className="container statement-grid">
          <Reveal>
            <div>
              <span className="eyebrow">THE CODE CREW APPROACH</span>
              <h2>
                Good technology should solve{" "}
                <span className="accent-text">real problems.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <p>
                We bring design and engineering together to create
                digital products that are useful, considered and built
                to last.
              </p>
              <br />
              <p>
                From a business website to a custom application,
                every project starts with understanding what needs
                to be achieved.
              </p>
              <br />
              <p>
                Code Crew is led by Dylan Israel Orinyo, its Chief Executive
                Officer, and operates remotely from Nairobi, Kenya.
              </p>
              <br />
              <Link href="/about" className="text-link">
                Get to know us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">WHAT WE DO</span>

            <h2 className="section-heading">
              Digital services,
              <br />
              <span className="accent-text">built around you.</span>
            </h2>

            <p className="section-description">
              The right combination of creativity, technology and
              practical thinking to bring your next idea to life.
            </p>
          </Reveal>

          <div className="service-list">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={index * 70}>
                <Link
                  href="/services"
                  className="service-item"
                >
                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="services-link">
              <Link href="/services" className="button-outline">
                View all services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">HOW WE WORK</span>
            <h2 className="section-heading">
              From first thought
              <br />
              to <span className="accent-text">final product.</span>
            </h2>
          </Reveal>

          <div className="process-grid">
            {[
              {
                number: "01",
                title: "Discover",
                description:
                  "We understand your goals, audience and the problem you're trying to solve.",
              },
              {
                number: "02",
                title: "Design",
                description:
                  "We shape the experience, structure and visual direction of your product.",
              },
              {
                number: "03",
                title: "Build",
                description:
                  "We turn the approved direction into a carefully engineered product.",
              },
              {
                number: "04",
                title: "Deliver",
                description:
                  "We test, refine and prepare your project for the real world.",
              },
            ].map((step, index) => (
              <Reveal key={step.number} delay={index * 100}>
                <div className="process-card">
                  <span className="process-number">
                    {step.number}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="cta-section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">HAVE SOMETHING IN MIND?</span>

            <h2>
              Let's build something
              <span className="accent-text"> meaningful.</span>
            </h2>

            <p>
              Tell us about your idea. We'll work with you to
              understand what it needs and how to make it happen.
            </p>

            <Link href="/contact" className="button-primary">
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
