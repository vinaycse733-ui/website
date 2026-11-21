import { Logo } from "./Logo";
import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";

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
          <Link href="/#services">Software Development</Link>
          <Link href="/#services">Web & Mobile</Link>
          <Link href="/solutions/local-ai-agents">Custom Local AI Agents</Link>
          <Link href="/#services">Digital Marketing</Link>
          <Link href="/#services">UI/UX Design</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/#about">About</Link>
          <Link href="/#industries">Industries</Link>
          <Link href="/#contact">Contact</Link>
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
