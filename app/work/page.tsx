
import Link from "next/link";
import Reveal from "@/components/Reveal";

const projects = [
  {
    number: "01",
    name: "MONOGRAPH",
    category: "E-COMMERCE / WEBSITE DESIGN",
    description:
      "A refined online shopping experience for a contemporary lifestyle brand.",
    type: "commerce",
    label: "Commerce concept",
  },
  {
    number: "02",
    name: "PULSE",
    category: "WEB APPLICATION / UI DESIGN",
    description:
      "A clean, data-focused dashboard concept for managing business activity.",
    type: "dashboard",
    label: "Product concept",
  },
  {
    number: "03",
    name: "ATELIER",
    category: "EDITORIAL / DIGITAL EXPERIENCE",
    description:
      "An editorial-inspired website concept built around strong typography and imagery.",
    type: "editorial",
    label: "Website concept",
  },
];

function CommercePreview() {
  return (
    <div className="work-preview commerce-preview">
      <div className="mock-browser">
        <div className="mock-browser-bar">
          <span />
          <span />
          <span />
          <div className="mock-address">monograph.studio</div>
        </div>

        <div className="commerce-site">
          <div className="commerce-nav">
            <strong>MONOGRAPH.</strong>
            <span>OBJECTS&nbsp;&nbsp; JOURNAL&nbsp;&nbsp; ABOUT</span>
            <span>BAG (0)</span>
          </div>

          <div className="commerce-main">
            <div className="commerce-copy">
              <span>THE EVERYDAY COLLECTION</span>
              <h4>Made for<br />living well.</h4>
              <p>Considered objects for considered spaces.</p>
              <span className="commerce-link">DISCOVER THE COLLECTION </span>
            </div>

            <div className="commerce-product">
              <div className="product-shape">
                <div className="product-handle" />
              </div>
              <span>FORM / 001</span>
            </div>
          </div>

          <div className="commerce-bottom">
            <span>DESIGNED WITH INTENTION</span>
            <span>SCROLL TO EXPLORE </span>
          </div>
        </div>
      </div>
      <span className="preview-caption">01 / DIGITAL COMMERCE</span>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="work-preview dashboard-preview">
      <div className="dashboard-window">
        <aside className="dashboard-sidebar">
          <strong><span /> PULSE</strong>
          <small>WORKSPACE</small>
          <div className="dashboard-menu active">Overview</div>
          <div className="dashboard-menu">Analytics</div>
          <div className="dashboard-menu">Projects</div>
          <div className="dashboard-menu">Reports</div>
          <div className="dashboard-user">
            <span>JD</span>
            <div>Jordan Davis<small>Administrator</small></div>
          </div>
        </aside>

        <div className="dashboard-content">
          <div className="dashboard-top">
            <span>Monday, 12 October</span>
            <span className="dashboard-avatar">JD</span>
          </div>
          <div className="dashboard-heading">
            <div>
              <small>YOUR WORKSPACE</small>
              <h4>Overview</h4>
            </div>
            <span className="dashboard-period">Last 30 days⌄</span>
          </div>

          <div className="dashboard-stats">
            <div><small>Total revenue</small><strong>$24,680</strong><em> 12.8%</em></div>
            <div><small>Active projects</small><strong>18</strong><em> 4.2%</em></div>
            <div><small>New clients</small><strong>126</strong><em> 8.6%</em></div>
          </div>

          <div className="dashboard-chart">
            <div className="chart-heading">Performance <span>THIS MONTH</span></div>
            <div className="chart-bars">
              {[35, 52, 43, 68, 49, 76, 58, 88, 64, 78, 55, 95].map(
                (height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                )
              )}
            </div>
            <div className="chart-labels">
              <span>01 OCT</span><span>08 OCT</span><span>15 OCT</span><span>22 OCT</span><span>30 OCT</span>
            </div>
          </div>
        </div>
      </div>
      <span className="preview-caption">02 / DIGITAL PRODUCT</span>
    </div>
  );
}

function EditorialPreview() {
  return (
    <div className="work-preview editorial-preview">
      <div className="editorial-window">
        <div className="editorial-nav">
          <strong>ATELIER</strong>
          <span>STORIES&nbsp;&nbsp;&nbsp; OBJECTS&nbsp;&nbsp;&nbsp; STUDIO</span>
          <span>MENU +</span>
        </div>
        <div className="editorial-main">
          <span className="editorial-kicker">A JOURNAL OF CREATIVE LIVING</span>
          <h4>Space to<br /><i>think.</i> Room to<br />create.</h4>
          <div className="editorial-art">
            <div className="editorial-sun" />
            <div className="editorial-arch" />
            <div className="editorial-block" />
            <div className="editorial-vase" />
          </div>
          <div className="editorial-footer">
            <span>ISSUE NO. 01 — THE ART OF SPACE</span>
            <span>EXPLORE THE JOURNAL </span>
          </div>
        </div>
      </div>
      <span className="preview-caption">03 / EDITORIAL EXPERIENCE</span>
    </div>
  );
}

export const metadata = {
  title: 'Our Work | Digital Design and Development Concepts',
  description: "Explore Code Crew's portfolio of digital design and development concepts, including e-commerce experiences, dashboards and editorial websites.",
  alternates: {
    canonical: '/work',
  },
};

export default function WorkPage() {
  return (
    <main>
      <section className="page-hero work-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">OUR WORK / SELECTED CONCEPTS</span>
            <h1>
              Ideas made
              <br />
              <span className="accent-text">visible.</span>
            </h1>
            <p>
              A look at the kinds of digital experiences we can
              create — from thoughtful websites to useful
              applications and distinctive online experiences.
            </p>
            <div className="work-hero-meta">
              <span>DESIGN THINKING</span>
              <span>DIGITAL CRAFT</span>
              <span>TECHNOLOGY</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section work-section">
        <div className="container">
          <Reveal>
            <div className="work-section-heading">
              <div>
                <span className="eyebrow">A FEW DIRECTIONS WE EXPLORE</span>
                <h2 className="section-heading">
                  Designed to make
                  <br />
                  <span className="accent-text">an impression.</span>
                </h2>
              </div>
              <p>
                These are concept explorations created to demonstrate
                our design direction and capabilities. They are not
                presented as completed client projects.
              </p>
            </div>
          </Reveal>

          <div className="work-project-list">
            {projects.map((project, index) => (
              <Reveal key={project.number} delay={index * 90}>
                <article className={`work-project work-project-${project.type}`}>
                  {project.type === "commerce" && <CommercePreview />}
                  {project.type === "dashboard" && <DashboardPreview />}
                  {project.type === "editorial" && <EditorialPreview />}

                  <div className="work-project-info">
                    <div>
                      <span className="work-project-category">
                        {project.number} / {project.category}
                      </span>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                    </div>
                    <span className="work-concept-label">{project.label}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="work-capabilities">
        <div className="container work-capabilities-inner">
          <Reveal>
            <span className="eyebrow">BUILT AROUND YOUR IDEA</span>
            <h2>
              Your project could
              <br />
              be <span className="accent-text">the next one.</span>
            </h2>
            <p>
              Have a business, product or idea that needs a digital
              home? Let's work out what it could become.
            </p>
            <Link href="/contact" className="button-primary">
              Start a project
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
