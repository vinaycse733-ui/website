"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CalendarCheck,
  DatabaseSearch,
  PackageSearch,
  Rocket,
  Workflow,
  UserRound,
  Building2,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55 },
};

const solutions = [
  {
    title: "AI Customer Support Agent",
    description: "Assist support teams with common enquiries, knowledge retrieval, and response preparation.",
    capabilities: ["FAQ assistance", "Knowledge base access", "Response suggestions", "Human escalation"],
    icon: Bot,
  },
  {
    title: "AI Reception & Booking Agent",
    description: "Organize appointment enquiries, availability checks, and customer follow-ups.",
    capabilities: ["Appointment enquiries", "Scheduling integrations", "Lead information", "Follow-up workflows"],
    icon: CalendarCheck,
  },
  {
    title: "Private Document AI",
    description: "Help authorized employees find information across business documents.",
    capabilities: ["Document search", "Internal knowledge", "Source references", "Access-aware responses"],
    icon: DatabaseSearch,
  },
  {
    title: "Business Automation Agent",
    description: "Connect approved business systems and simplify repetitive operational processes.",
    capabilities: ["Workflow orchestration", "CRM integrations", "Spreadsheet processing", "Notifications"],
    icon: Workflow,
  },
  {
    title: "Inventory & Operations Assistant",
    description: "Retrieve inventory information and prepare routine operational reports faster.",
    capabilities: ["Inventory queries", "Order retrieval", "Reporting assistance", "System integrations"],
    icon: PackageSearch,
  },
  {
    title: "Custom Startup AI Agent",
    description: "Build focused AI workflows around the specific requirements of growing businesses.",
    capabilities: ["Custom workflows", "Internal assistants", "Startup operations", "Modular integrations"],
    icon: Rocket,
  },
];

export function LocalAIAgentsSection() {
  return (
    <>
      <section className="ai-home-section">
        <div className="container ai-home-grid">
          <motion.div className="ai-home-copy" {...reveal}>
            <p className="eyebrow"><span /> AI SOLUTIONS FOR BUSINESS</p>
            <h2>Your Business.<br />Your AI.<br /><em>Your Control.</em></h2>
            <p className="ai-home-description">
              Build intelligent AI agents tailored to your business. From answering customer enquiries to
              searching internal documents and automating routine workflows, we design practical AI solutions
              around the way your team works.
            </p>
            <div className="ai-highlight">
              <strong>Custom Local AI Agents</strong>
              <span>Designed for Businesses &amp; Startups</span>
            </div>
            <p className="ai-deployment-note">
              Agents can be designed for local or business-controlled deployment, depending on infrastructure and requirements.
            </p>
            <div className="ai-home-actions">
              <Link className="button button-dark" href="/solutions/local-ai-agents">
                Explore AI Agents <ArrowRight size={18} />
              </Link>
              <a className="text-link" href="#contact">
                Discuss Your AI Project <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div className="ai-workflow-visual" {...reveal} aria-label="Illustrative business AI workflow">
            <div className="ai-visual-header">
              <span>BUSINESS AI WORKFLOW</span>
              <span className="ai-status">DESIGN VIEW</span>
            </div>
            <div className="ai-visual-flow">
              {[
                [UserRound, "Business User"],
                [Bot, "Custom AI Agent"],
                [Building2, "Company Knowledge"],
                [Wrench, "Business Tools"],
                [CheckCircle2, "Human Review / Action"],
              ].map(([Icon, label], index) => (
                <div className="ai-flow-row" key={String(label)}>
                  <div className={`ai-flow-node ${index === 1 ? "is-primary" : ""}`}>
                    <span><Icon size={20} /></span>
                    <strong>{String(label)}</strong>
                  </div>
                  {index < 4 && <i className="ai-flow-line" aria-hidden="true" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="ai-solutions" className="section ai-solutions-section">
        <div className="container">
          <motion.div className="section-heading ai-solutions-heading" {...reveal}>
            <div>
              <p className="eyebrow"><span /> AI SOLUTION MODELS</p>
              <h2>Purpose-built AI for Real Business Workflows.</h2>
            </div>
            <p>Choose a focused starting point, then shape the agent, knowledge sources, integrations, and oversight around your operations.</p>
          </motion.div>
          <div className="ai-solutions-grid">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.article className="ai-solution-card" key={solution.title} {...reveal} transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}>
                  <div className="ai-solution-top">
                    <span className="ai-solution-icon"><Icon size={22} /></span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <ul>
                    {solution.capabilities.map((capability) => (
                      <li key={capability}><CheckCircle2 size={13} /> {capability}</li>
                    ))}
                  </ul>
                  <Link href="/solutions/local-ai-agents" aria-label={`Explore ${solution.title}`}>
                    Explore solution <ArrowUpRight size={16} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
