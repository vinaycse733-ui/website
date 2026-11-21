import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  CloudCog,
  Globe2,
  LifeBuoy,
  Megaphone,
  Smartphone,
  Sparkles,
  PenTool,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  examples: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Custom Software Development",
    description: "Business applications and tailored software designed around specific operational requirements.",
    examples: ["Custom business applications", "Internal dashboards", "SaaS development", "Software modernization"],
    icon: Blocks,
  },
  {
    title: "Website Development",
    description: "Fast, responsive websites and web applications designed for usability, performance, and business growth.",
    examples: ["Corporate websites", "Business portals", "E-commerce development", "Web applications"],
    icon: Globe2,
  },
  {
    title: "Mobile App Development",
    description: "Mobile experiences designed for customers, employees, and business operations.",
    examples: ["Android applications", "iOS applications", "Cross-platform solutions", "Mobile UI/UX"],
    icon: Smartphone,
  },
  {
    title: "AI & Intelligent Automation",
    description: "Custom local AI agents and connected automation designed to simplify repetitive business processes.",
    examples: ["Custom local AI agents", "Private document assistants", "Workflow automation", "Business process integrations"],
    icon: Sparkles,
  },
  {
    title: "Digital Marketing & Advertising",
    description: "Digital campaigns, search visibility, and conversion-focused experiences for eligible businesses.",
    examples: ["Google Ads management", "Meta Ads management", "Search engine optimization", "Campaign landing pages"],
    icon: Megaphone,
  },
  {
    title: "UI/UX & Digital Product Design",
    description: "Clear, intuitive digital experiences built around users and business objectives.",
    examples: ["Product interface design", "Website redesign", "Mobile interface design", "Interactive prototypes"],
    icon: PenTool,
  },
  {
    title: "Cloud & Technology Integration",
    description: "Technical solutions that help applications, platforms, and business tools work together.",
    examples: ["Cloud deployment", "API integration", "System connectivity", "Application configuration"],
    icon: CloudCog,
  },
  {
    title: "Technology Consulting & Support",
    description: "Practical guidance and technical assistance throughout the software development lifecycle.",
    examples: ["Requirements discovery", "Architecture planning", "Technical consultation", "Application maintenance"],
    icon: LifeBuoy,
  },
];
