
import Link from "next/link";
import Reveal from "@/components/Reveal";

const phoneNumber = "+254732443407";
const displayPhoneNumber = "+254 732 443 407";

const services = [
  {
    number: "01",
    title: "Website development",
    subtitle: "A stronger presence on the web.",
    description:
      "We design and develop professional websites that communicate your brand, connect with your audience and support your business goals.",
    features: [
      "Business and corporate websites",
      "E-commerce websites and online stores",
      "Landing pages and campaign websites",
      "Portfolio and personal websites",
      "Booking and reservation websites",
      "Website redesigns and modernisation",
      "Responsive and mobile-first development",
      "Search engine and performance optimisation",
      "Website maintenance and content updates",
    ],
  },
  {
    number: "02",
    title: "Web and software applications",
    subtitle: "Software built around your needs.",
    description:
      "We build custom digital products that simplify operations, solve problems and help organisations work more efficiently.",
    features: [
      "Custom web applications",
      "Business management systems",
      "Customer and employee portals",
      "Inventory and stock management systems",
      "Booking and appointment platforms",
      "School and organisation management systems",
      "Dashboards and reporting tools",
      "Desktop application development",
      "API development and integrations",
      "Database design and management",
      "Software testing, debugging and optimisation",
    ],
  },
  {
    number: "03",
    title: "Mobile application development",
    subtitle: "Useful technology, wherever people go.",
    description:
      "We help turn ideas into practical mobile experiences, from planning and interface design to development, testing and release.",
    features: [
      "Android application development",
      "Cross-platform application development",
      "Mobile interface and experience design",
      "Application backends and APIs",
      "Database integration",
      "Authentication and user accounts",
      "Application testing and debugging",
      "Maintenance and version upgrades",
    ],
  },
  {
    number: "04",
    title: "Cybersecurity and digital protection",
    subtitle: "Protecting systems, data and people.",
    description:
      "We help identify security weaknesses, strengthen digital systems and investigate security incidents. Security testing is performed only on systems you own or are authorised to have tested.",
    features: [
      "Website and application security assessments",
      "Authorised vulnerability assessments",
      "Authorised penetration testing",
      "Security configuration and system hardening",
      "Malware investigation and removal",
      "Compromised website investigation",
      "Account and access security improvements",
      "Data protection and backup planning",
      "Security updates and patch management",
      "Incident investigation and recovery support",
    ],
  },
  {
    number: "05",
    title: "Artificial intelligence and automation",
    subtitle: "Making intelligent technology practical.",
    description:
      "We integrate AI into websites, applications and business workflows, helping organisations automate repetitive work and build more capable digital products.",
    features: [
      "AI integration into existing applications",
      "AI-powered websites and platforms",
      "Customer support chatbots",
      "AI assistants and intelligent tools",
      "AI API integration",
      "Business process automation",
      "Document and data processing workflows",
      "Custom AI-powered business solutions",
      "Workflow and productivity integrations",
      "AI system maintenance and improvements",
    ],
  },
  {
    number: "06",
    title: "Computer engineering and technical support",
    subtitle: "From individual computers to complete systems.",
    description:
      "We provide computer-related technical services, helping individuals and organisations diagnose problems, improve performance and keep their equipment working reliably.",
    features: [
      "Computer diagnostics and troubleshooting",
      "Hardware installation and replacement",
      "RAM, storage and component upgrades",
      "Operating system installation and configuration",
      "Software installation and troubleshooting",
      "Driver and compatibility issues",
      "Computer performance optimisation",
      "Peripheral and device configuration",
      "Computer setup and maintenance",
      "Technical support and consultations",
    ],
  },
  {
    number: "07",
    title: "Networks, servers and infrastructure",
    subtitle: "The systems that keep everything connected.",
    description:
      "We help plan, configure and maintain the technical infrastructure behind digital services, from local networks to hosted applications.",
    features: [
      "Network planning and configuration",
      "Router and network troubleshooting",
      "Local area network setup",
      "Server setup and administration",
      "Cloud hosting and infrastructure configuration",
      "Domain and DNS configuration",
      "Database deployment and migration",
      "Backup and recovery planning",
      "System monitoring and maintenance",
      "Infrastructure upgrades",
    ],
  },
  {
    number: "08",
    title: "System upgrades and modernisation",
    subtitle: "Make existing technology work better.",
    description:
      "We review existing systems and help improve, upgrade or modernise them without losing sight of the requirements they were built to serve.",
    features: [
      "Legacy website and application upgrades",
      "Operating system upgrades",
      "Software updates and migrations",
      "Database upgrades and migrations",
      "Application performance improvements",
      "Code refactoring and modernisation",
      "Hardware and infrastructure upgrades",
      "Security and compatibility improvements",
      "System integration and replacement planning",
    ],
  },
  {
    number: "09",
    title: "UI / UX design and digital consulting",
    subtitle: "Clear thinking behind better experiences.",
    description:
      "We combine practical technical thinking with thoughtful design to plan products that are useful, accessible and straightforward to operate.",
    features: [
      "User interface and experience design",
      "Wireframes and interactive prototypes",
      "Design systems and visual consistency",
      "Website and application audits",
      "Technical planning and consultation",
      "Software and technology recommendations",
      "Digital transformation planning",
      "Project feasibility and architecture",
    ],
  },
  {
    number: "10",
    title: "Deployment, maintenance and support",
    subtitle: "Support beyond the launch.",
    description:
      "We help take projects from development to production and provide ongoing technical assistance as requirements change.",
    features: [
      "Website and application deployment",
      "Hosting and domain configuration",
      "Production testing and launch preparation",
      "Ongoing maintenance and updates",
      "Bug fixing and troubleshooting",
      "Performance monitoring and optimisation",
      "Technical documentation",
      "System maintenance and support",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your goals, requirements, existing systems and the problem you want to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We agree on the scope, technical approach, priorities, timeline and project terms.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "We design, build, configure, test and refine the solution.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We prepare the solution for use and discuss any ongoing support it may need.",
  },
];

export const metadata = {
  title: 'Website Development, Applications and Technology Services',
  description: "Explore Code Crew's services: website development, web and mobile applications, UI/UX design, custom software, cybersecurity and technology support.",
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <main>
      {/* PAGE INTRODUCTION */}
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
              From websites and software to computer engineering,
              cybersecurity and artificial intelligence, we bring
              ideas and technology together to solve real problems.
            </p>

            <div className="services-hero-meta">
              <span>01 — DESIGN</span>
              <span>02 — ENGINEERING</span>
              <span>03 — DELIVERY</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="section services-overview">
        <div className="container">
          <Reveal>
            <span className="eyebrow">OUR CAPABILITIES</span>

            <h2 className="section-heading">
              More than websites.
              <br />
              <span className="accent-text">
                Complete technology solutions.
              </span>
            </h2>

            <p className="section-description">
              We work across software, hardware and digital systems.
              Whether you need a new product, an existing system
              improved or technical help with a problem, we can
              discuss the right solution.
            </p>
          </Reveal>

          <div className="detailed-services">
            {services.map((service, index) => (
              <Reveal
                key={service.number}
                delay={(index % 4) * 60}
              >
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

      {/* SEPARATE EMERGENCY SUPPORT PAGE LINK */}
      <section className="emergency-support">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              WHEN THINGS GO WRONG
            </span>

            <h2>
              Website hacked?
              <br />
              <span className="accent-text">
                System compromised?
              </span>
            </h2>

            <p className="emergency-intro">
              When your website, application or digital system
              experiences a serious technical problem, Code Crew
              can help investigate and work towards a solution.
              Our emergency support process starts with a
              conversation about the incident and your needs.
            </p>

            <div className="emergency-actions">
              <Link
                href="/emergency"
                className="button-primary"
              >
                Visit emergency support
              </Link>

              <a
                href={`tel:${phoneNumber}`}
                className="emergency-phone"
              >
                Call {displayPhoneNumber}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR PROCESS */}
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

      {/* CUSTOM PROJECTS */}
      <section className="services-capability-statement">
        <div className="container">
          <Reveal>
            <span className="eyebrow">THINK IT. BUILD IT.</span>

            <h2>
              If technology can solve it,
              <br />
              <span className="accent-text">let's explore it.</span>
            </h2>

            <p>
              We are open to custom projects beyond the services
              listed here. From a simple tool to a complex digital
              platform, tell us what you have in mind. We will
              assess the requirements, feasibility and scope
              before proposing a way forward.
            </p>

            <Link
              href="/contact"
              className="button-primary"
            >
              Bring us your idea
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FINAL CONTACT */}
      <section className="cta-section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              LET'S DISCUSS YOUR PROJECT
            </span>

            <h2>
              Have an idea?
              <br />
              <span className="accent-text">Let's make it real.</span>
            </h2>

            <p>
              Tell us what you're planning. We'll help you identify
              the right approach and the next steps.
            </p>

            <Link
              href="/contact"
              className="button-primary"
            >
              Discuss a project
            </Link>

            <p className="services-phone">
              Prefer to speak directly?{" "}
              <a href={`tel:${phoneNumber}`}>
                {displayPhoneNumber}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
