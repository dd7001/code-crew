
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">CC</span>
            <span className="brand-name">CODE CREW</span>
          </Link>
          <p>
            Independent thinking.
            <br />
            Thoughtful digital engineering.
          </p>
        </div>

        <div className="footer-links">
          <span className="footer-label">EXPLORE</span>
          <Link href="/services">Services</Link>
          <Link href="/work">Our work</Link>
          <Link href="/about">About us</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <span className="footer-label">GET IN TOUCH</span>
          <a href="mailto:hello@codecrew.eu.org">
            hello@codecrew.eu.org
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} CODE CREW</span>
        <span>DESIGNED WITH PURPOSE.</span>
        <Link href="/">BACK TO TOP ↑</Link>
      </div>
    </footer>
  );
}
