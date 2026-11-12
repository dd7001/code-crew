"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Emergency Support", href: "/emergency" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Code Crew home" onClick={closeMenu}>
        <span className="brand-mark">CC</span>
        <span className="brand-name">CODE CREW</span>
      </Link>

      <nav
        id="primary-navigation"
        className={`main-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <Link href={link.href} key={link.href} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}

        <Link href="/contact" className="mobile-menu-contact" onClick={closeMenu}>
          Start a project
        </Link>
      </nav>

      <Link href="/contact" className="header-contact">
        Start a project
      </Link>

      <button
        type="button"
        className={`mobile-menu-toggle ${menuOpen ? "is-open" : ""}`}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
