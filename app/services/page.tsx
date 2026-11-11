
import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    number: "01",
    title: "Website development",
    subtitle: "A better presence on the web.",
    description:
      "We create professional websites that communicate your brand, connect with your audience and support your business objectives.",
    features: [
      "Business and corporate websites",
      "Landing pages and campaign websites",
      "E-commerce experiences",
      "Responsive design for all devices",
      "Performance and search optimisation",
    ],
  },
  {
    number: "02",
    title: "Web applications",
    subtitle: "Software built around your needs.",
    description:
      "From customer portals to management platforms, we develop web applications that make complex tasks simpler and more efficient.",
    features: [
      "Custom dashboards",
      "Customer and employee portals",
      "Booking and management systems",
      "Database-driven applications",
      "Third-party integrations",
    ],
  },
  {
    number: "03",
    title: "Mobile applications",
    subtitle: "Your ideas, wherever people go.",
    description:
      "We help transform ideas into practical mobile experiences with intuitive interfaces and carefully considered functionality.",
    features: [
      "Mobile product planning",
      "User interface design",
      "Application development",
      "API and database integration",
      "Testing and deployment support",
    ],
  },
  {
    number: "04",
    title: "UI / UX design",
    subtitle: "Thoughtful design. Better experiences.",
    description:
      "We design digital experiences around real people, combining clear visual communication with straightforward navigation.",
    features: [
      "User interface design",
      "User experience planning",
      "Wireframes and prototypes",
      "Design systems",
      "Responsive interface design",
    ],
  },
  {
    number: "05",
    title: "Custom software and APIs",
    subtitle: "Technology that works your way.",
    description:
      "When existing tools aren't enough, we can develop tailored software and integrations to address specific requirements.",
    features: [
      "Custom business software",
      "API development",
      "System integrations",
      "Database architecture",
      "Workflow automation",
    ],
  },
  {
    number: "06",
    title: "Deployment and support",
    subtitle: "A reliable launch is only the beginning.",
    description:
      "We help prepare digital products for release and provide technical support to keep them performing as expected.",
    features: [
      "Website deployment",
      "Domain and hosting configuration",
      "Performance checks",
      "Maintenance and updates",
      "Technical troubleshooting",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, audience, requirements and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We establish the scope, technical direction and project priorities.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "We design, develop and refine the solution with care.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test the result and prepare it for delivery.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero services-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">WHAT WE DO / OUR SERVICES</span>

            <h1>
              Technology with
              <br />
              <span className="accent-text">a clear purpose.</span>
            </h1>

            <p>
              We combine thoughtful design and practical engineering
              to create digital solutions that help businesses and
              ideas move forward.
            </p>

            <div className="services-hero-meta">
              <span>01 — DESIGN</span>
              <span>02 — DEVELOPMENT</span>
              <span>03 — DELIVERY</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section services-overview">
        <div className="container">
          <Reveal>
            <span className="eyebrow">OUR CAPABILITIES</span>

            <h2 className="section-heading">
              From an idea to
              <br />
              <span className="accent-text">a working product.</span>
            </h2>

            <p className="section-description">
              Every project is different. Our services cover the
              design, development and technical work needed to
              create useful digital products.
            </p>
          </Reveal>

          <div className="detailed-services">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={index * 60}>
                <article className="detailed-service">
                  <div className="detailed-service-number">
                    {service.number}
                  </div>

                  <div className="detailed-service-main">
                    <span className="eyebrow">
                      {service.subtitle}
                    </span>

                    <h3>{service.title}</h3>

                    <p className="detailed-service-description">
                      {service.description}
                    </p>

                    <div className="service-features">
                      {service.features.map((feature) => (
                        <div
                          className="service-feature"
                          key={feature}
                        >
                          <span>—</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="detailed-service-index">
                    {service.number}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="services-process">
        <div className="container">
          <Reveal>
            <span className="eyebrow">OUR WORKING METHOD</span>

            <h2 className="section-heading">
              A considered process.
              <br />
              <span className="accent-text">A better result.</span>
            </h2>
          </Reveal>

          <div className="services-process-grid">
            {process.map((step, index) => (
              <Reveal key={step.number} delay={index * 100}>
                <article className="services-process-card">
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">LET'S DISCUSS YOUR PROJECT</span>

            <h2>
              Have an idea?
              <br />
              <span className="accent-text">Let's make it real.</span>
            </h2>

            <p>
              Tell us what you're planning. We'll help you identify
              the right approach and the next steps.
            </p>

            <Link href="/contact" className="button-primary">
              Discuss a project <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
