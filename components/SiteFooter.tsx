import Link from "next/link";

const publicEmail = "officialcodecrewdev@gmail.com";
const phoneNumber = "+254732443407";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-intro">
          <Link href="/" className="brand footer-brand" aria-label="Code Crew home">
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
          <Link href="/emergency">Emergency support</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <span className="footer-label">GET IN TOUCH</span>
          <a href={`mailto:${publicEmail}`}>{publicEmail}</a>
          <a href={`tel:${phoneNumber}`}>+254 732 443 407</a>
        </div>

        <div className="footer-links">
          <span className="footer-label">LEGAL</span>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms &amp; conditions</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} CODE CREW</span>
        <span>DESIGNED WITH PURPOSE.</span>
        <Link href="/">BACK TO TOP </Link>
      </div>
    </footer>
  );
}
