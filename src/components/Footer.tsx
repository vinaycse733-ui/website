import { Logo } from "./Logo";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo inverted />
          <p>Practical software, digital, and automation solutions for growing businesses.</p>
        </div>
        <div>
          <h3>Services</h3>
          <a href="#services">Software Development</a>
          <a href="#services">Web & Mobile</a>
          <a href="#services">AI Automation</a>
          <a href="#services">Digital Marketing</a>
          <a href="#services">UI/UX Design</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.domain}>reddy786techsolutions.in</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>Copyright © 2026 Reddy786 Tech Solutions.</p>
        <p>Logo placeholder — replace before official launch.</p>
      </div>
    </footer>
  );
}
