import { siteConfig } from "@/data/siteConfig";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex items-center gap-2.5" aria-label={`${siteConfig.name} logo placeholder`}>
      <span className="logo-mark" aria-hidden="true">
        <span>R</span>
      </span>
      <span className={`brand-wordmark ${inverted ? "text-white" : "text-charcoal"}`}>
        <strong>Reddy786</strong>
        <small>TECH SOLUTIONS</small>
      </span>
    </div>
  );
}
