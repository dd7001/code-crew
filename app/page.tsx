import ScrollFilm from "@/components/ScrollFilm";

const services = [
  {
    number: "01",
    title: "Websites & digital experiences",
    description: "Fast, considered websites that make your business easier to understand and trust."
  },
  {
    number: "02",
    title: "Web applications",
    description: "Useful online tools and platforms shaped around the way your business works."
  },
  {
    number: "03",
    title: "Custom software & integrations",
    description: "Purpose-built systems that connect your tools, simplify work and solve specific problems."
  },
  {
    number: "04",
    title: "Mobile applications",
    description: "Clear, dependable mobile experiences designed around real people and real tasks."
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Code Crew home">
          <span className="wordmark-mark">CC</span>
          <span>CODE CREW<span className="wordmark-period">.</span></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">What we do</a>
          <a href="#studio">Studio</a>
          <a className="nav-contact" href="#contact">Start a project <span>↗</span></a>
        </nav>
      </header>

      <div id="top">
        <ScrollFilm />
      </div>

      <section className="intro-section" id="studio">
        <p className="eyebrow">A digital technology studio</p>
        <div className="intro-grid">
          <h2>Good technology should make things <em>feel simpler.</em></h2>
          <div className="intro-copy">
            <p>We work with businesses to turn ideas, everyday challenges and ambitious plans into useful digital products.</p>
            <p>From the first sketch to launch and beyond, we bring design and engineering together to make the complicated feel clear.</p>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-topline">
          <p className="eyebrow">What we do</p>
          <p className="section-index">01 — 04</p>
        </div>
        <h2 className="section-heading">Built around what<br /><em>you need next.</em></h2>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section">
        <p className="eyebrow">How we work</p>
        <div className="approach-grid">
          <h2>Clear thinking.<br /><em>Careful building.</em></h2>
          <p>Every project starts with understanding the problem. We plan the right solution, build it with care, test it properly and help you take it into the world.</p>
        </div>
        <div className="approach-steps">
          <span>01 / Understand</span>
          <span>02 / Design</span>
          <span>03 / Build</span>
          <span>04 / Launch & support</span>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Have something in mind?</p>
        <div className="contact-grid">
          <h2>Let's make<br /><em>it happen.</em></h2>
          <div>
            <p>Tell us what you're working on. We'll take it from there.</p>
            <a className="contact-link" href="mailto:hello@codecrew.eu.org">hello@codecrew.eu.org <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top"><span className="wordmark-mark">CC</span><span>CODE CREW<span className="wordmark-period">.</span></span></a>
        <span>Digital products, built with purpose.</span>
        <span>© {new Date().getFullYear()} Code Crew</span>
      </footer>
    </main>
  );
}
