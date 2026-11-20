"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#home" className="logo-link" aria-label="Reddy786 Tech Solutions home">
          <Logo />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            item.dropdown ? (
              <div className="nav-dropdown" key={item.label}>
                <button
                  type="button"
                  className="nav-link"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((value) => !value)}
                  onBlur={(event) => {
                    if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node)) setServicesOpen(false);
                  }}
                >
                  {item.label} <ChevronDown size={14} />
                </button>
                {servicesOpen && (
                  <div className="dropdown-panel">
                    <a href="#services" onClick={() => setServicesOpen(false)}>
                      <span>01</span><strong>Software & Web</strong>
                    </a>
                    <a href="#services" onClick={() => setServicesOpen(false)}>
                      <span>02</span><strong>Mobile & Product Design</strong>
                    </a>
                    <a href="#services" onClick={() => setServicesOpen(false)}>
                      <span>03</span><strong>AI & Automation</strong>
                    </a>
                    <a href="#services" onClick={() => setServicesOpen(false)}>
                      <span>04</span><strong>Growth & Consulting</strong>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <a className="nav-link" href={item.href} key={item.label}>{item.label}</a>
            )
          ))}
        </nav>
        <a className="button button-dark header-cta" href="#contact">Let&apos;s Talk</a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
              {item.label}<span>→</span>
            </a>
          ))}
        </nav>
        <a className="button button-orange" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s Talk</a>
      </div>
    </header>
  );
}
