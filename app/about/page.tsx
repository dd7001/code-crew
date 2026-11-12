
import Link from "next/link";
import Reveal from "@/components/Reveal";

const principles = [
  {
    number: "01",
    title: "Purpose before code",
    description:
      "We start by understanding the problem. The technology should serve the idea, not complicate it.",
  },
  {
    number: "02",
    title: "Design with intention",
    description:
      "Every layout, interaction and detail should have a reason to exist and make the experience better.",
  },
  {
    number: "03",
    title: "Build for the real world",
    description:
      "A digital product should be responsive, reliable, accessible and practical to use.",
  },
  {
    number: "04",
    title: "Keep improving",
    description:
      "Good work comes from testing, learning, refining and paying attention to the details.",
  },
];

const capabilities = [
  "Web design and development",
  "Application development",
  "Digital product design",
  "Custom software solutions",
  "Deployment and technical support",
];

export const metadata = {
  title: 'About Code Crew | Our Story and Leadership',
  description: 'Discover Code Crew, an independent digital technology studio led by Dylan Israel Orinyo, building websites, applications and software from Nairobi, Kenya.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero about-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">ABOUT CODE CREW / WHO WE ARE</span>

            <h1>
              We turn ideas
              <br />
              into <span className="accent-text">digital reality.</span>
            </h1>

            <p>
              Code Crew is an independent digital technology studio
              focused on creating thoughtful websites, applications
              and software that solve real problems.
            </p>

            <div className="about-hero-meta">
              <span>INDEPENDENT THINKING</span>
              <span>THOUGHTFUL DESIGN</span>
              <span>QUALITY ENGINEERING</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about-introduction">
        <div className="container about-intro-grid">
          <Reveal>
            <div>
              <span className="eyebrow">01 / OUR PERSPECTIVE</span>
              <h2 className="section-heading">
                Technology is
                <br />
                only as good as
                <br />
                <span className="accent-text">what it makes possible.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="about-intro-copy">
              <p>
                We believe digital experiences should do more than
                simply look good. They should make information easier
                to understand, tasks easier to complete and businesses
                easier to connect with.
              </p>

              <p>
                That's why we bring design and engineering together.
                We think carefully about the people using a product,
                the purpose behind it and the technology needed to
                make it work.
              </p>

              <p>
                Whether it's a business website, a web application
                or a custom digital solution, our focus stays on
                creating something useful and considered.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-statement">
        <div className="container">
          <Reveal>
            <span className="eyebrow">THE WAY WE SEE IT</span>
            <h2>
              Not just more
              <span className="accent-text"> technology.</span>
              <br />
              Better solutions.
            </h2>
            <div className="about-statement-bottom">
              <span>CODE CREW / OUR PHILOSOPHY</span>
              <span>DESIGN MEETS ENGINEERING</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about-principles">
        <div className="container">
          <Reveal>
            <span className="eyebrow">02 / WHAT GUIDES US</span>
            <h2 className="section-heading">
              The principles
              <br />
              <span className="accent-text">behind the work.</span>
            </h2>
          </Reveal>

          <div className="about-principles-list">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 80}>
                <article className="about-principle">
                  <span className="about-principle-number">
                    {principle.number}
                  </span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-capabilities">
        <div className="container about-capabilities-grid">
          <Reveal>
            <div>
              <span className="eyebrow">03 / WHAT WE BRING TO THE TABLE</span>
              <h2>
                One idea.
                <br />
                <span className="accent-text">Many possibilities.</span>
              </h2>
              <p>
                We approach each project according to its needs,
                bringing together the right mix of design,
                development and technical thinking.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="about-capabilities-list">
              {capabilities.map((capability, index) => (
                <div className="about-capability" key={capability}>
                  <span>0{index + 1}</span>
                  <strong>{capability}</strong>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-approach section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">04 / OUR APPROACH</span>
            <h2 className="section-heading">
              Understand first.
              <br />
              <span className="accent-text">Build with purpose.</span>
            </h2>

            <p className="section-description">
              Every project starts with a conversation. We want to
              understand what you're trying to achieve before
              deciding how to build it.
            </p>

            <Link href="/services" className="button-outline">
              Explore our services
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">LET'S CREATE SOMETHING USEFUL</span>
            <h2>
              Have an idea?
              <br />
              <span className="accent-text">Let's talk about it.</span>
            </h2>
            <p>
              Tell us what you have in mind. We'll explore the
              possibilities and work out a practical way forward.
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
