
import Link from "next/link";
import Reveal from "@/components/Reveal";

const phoneNumber = "+254732443407";

export const metadata = {
  title: 'Emergency Technical Support | Code Crew',
  description: 'Contact Code Crew about urgent website, application, software and technology problems. We assess issues and agree on a practical response plan.',
  alternates: {
    canonical: '/emergency',
  },
};

export default function EmergencyPage() {
  return (
    <main className="emergency-page">
      <section className="page-hero emergency-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              CODE CREW / PRIORITY TECHNICAL SUPPORT
            </span>

            <h1>
              When technology
              <br />
              <span className="accent-text">can't wait.</span>
            </h1>

            <p>
              Has your website been hacked? Is your application
              compromised or has a critical system stopped working?
              Contact Code Crew so we can assess the situation and
              discuss the next steps.
            </p>

            <div className="emergency-hero-actions">
              <a
                href={`tel:${phoneNumber}`}
                className="button-primary"
              >
                Call Code Crew
              </a>

              <span className="emergency-number">
                +254 732 443 407
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section emergency-details">
        <div className="container">
          <Reveal>
            <span className="eyebrow">WHEN YOU NEED US</span>

            <h2 className="section-heading">
              Tell us what
              <br />
              <span className="accent-text">went wrong.</span>
            </h2>

            <p className="section-description">
              We can discuss urgent technical problems involving
              websites, applications, software and digital
              infrastructure.
            </p>
          </Reveal>

          <div className="emergency-issue-grid">
            {[
              {
                number: "01",
                title: "Hacked websites",
                description:
                  "Unauthorised changes, suspicious activity, compromised accounts or a website that has been taken over.",
              },
              {
                number: "02",
                title: "Compromised applications",
                description:
                  "Security incidents, exposed data, suspicious behaviour or application vulnerabilities.",
              },
              {
                number: "03",
                title: "Broken systems",
                description:
                  "Critical errors, failed deployments, application crashes or systems that suddenly stop working.",
              },
              {
                number: "04",
                title: "Infrastructure problems",
                description:
                  "Server, hosting, database, network or configuration problems affecting your services.",
              },
            ].map((issue) => (
              <Reveal key={issue.number}>
                <article className="emergency-issue">
                  <span>{issue.number}</span>
                  <h3>{issue.title}</h3>
                  <p>{issue.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="emergency-response">
        <div className="container">
          <Reveal>
            <span className="eyebrow">HOW OUR RESPONSE WORKS</span>

            <h2>
              Understand first.
              <br />
              <span className="accent-text">Then take action.</span>
            </h2>
          </Reveal>

          <div className="emergency-response-grid">
            {[
              {
                number: "01",
                title: "Contact us",
                description:
                  "Call us and explain the incident, the affected system and the impact on your business.",
              },
              {
                number: "02",
                title: "Agree on the engagement",
                description:
                  "We discuss the initial scope, access, terms and deposit before starting the technical investigation.",
              },
              {
                number: "03",
                title: "Technical investigation",
                description:
                  "With your permission, we examine relevant source code, application architecture, logs and affected systems to identify the problem.",
              },
              {
                number: "04",
                title: "Remediation and testing",
                description:
                  "We agree on the necessary fixes, implement the work and test the affected systems before delivery.",
              },
            ].map((step) => (
              <Reveal key={step.number}>
                <article className="emergency-response-step">
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="emergency-contact">
        <div className="container">
          <Reveal>
            <span className="eyebrow">CONTACT CODE CREW</span>

            <h2>
              Need technical
              <br />
              <span className="accent-text">assistance?</span>
            </h2>

            <p>
              Call us to explain the situation. We will discuss
              the problem, availability and the appropriate next
              steps with you.
            </p>

            <a
              href={`tel:${phoneNumber}`}
              className="button-primary"
            >
              Call +254 732 443 407
            </a>

            <p className="emergency-disclaimer">
              Emergency support is subject to availability,
              authorisation, an agreed scope and payment terms.
              An initial deposit may be required before work
              begins. Response and resolution times depend on
              the nature and severity of the issue. We cannot
              guarantee recovery of every affected system.
              Security testing and access are limited to systems
              you own or are authorised to have assessed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">OTHER ENQUIRIES</span>

            <h2>
              Planning something
              <br />
              <span className="accent-text">new?</span>
            </h2>

            <p>
              For new websites, applications, software and other
              projects, visit our regular contact page.
            </p>

            <Link href="/contact" className="button-primary">
              Discuss a project
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
