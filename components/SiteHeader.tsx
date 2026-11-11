
import Link from "next/link";

const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Code Crew home">
        <span className="brand-mark">CC</span>
        <span className="brand-name">CODE CREW</span>
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <Link href="/contact" className="header-contact">
        Start a project <span>↗</span>
      </Link>
    </header>
  );
}
