"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Database,
  Eye,
  FileSearch,
  LockKeyhole,
  MessageSquareText,
  PackageSearch,
  PlugZap,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55 },
};

const useCases = [
  {
    sector: "Retail Business",
    question: "Which products are running low?",
    flow: ["Approved inventory system", "AI Agent", "Stock summary", "Employee review"],
  },
  {
    sector: "Small Hotel",
    question: "Are rooms available this weekend?",
    flow: ["Customer enquiry", "Booking lookup", "Draft response", "Staff confirmation"],
  },
  {
    sector: "Startup",
    question: "Summarize our recent customer enquiries.",
    flow: ["Authorized enquiry data", "AI Agent", "Categorized summary", "Founder review"],
  },
  {
    sector: "Professional Services",
    question: "Find the latest client onboarding procedure.",
    flow: ["Internal document search", "Relevant passages", "Cited answer", "Employee review"],
  },
];

const scenarios = {
  "Customer Support": {
    icon: MessageSquareText,
    user: "Can you summarize today's new enquiries?",
    response: "Here is an example of how an agent could categorize enquiries and prepare a summary for review.",
    flow: ["Customer enquiry", "Knowledge + policies", "Draft summary", "Human approval"],
  },
  "Retail Operations": {
    icon: PackageSearch,
    user: "Which products need attention today?",
    response: "Here is an example of how an agent could combine approved stock data and highlight items for review.",
    flow: ["Employee question", "Inventory system", "Stock summary", "Staff action"],
  },
  "Startup Assistant": {
    icon: BriefcaseBusiness,
    user: "What themes are appearing in recent feedback?",
    response: "Here is an example of how an agent could group authorized feedback and prepare a concise review.",
    flow: ["Feedback sources", "Secure retrieval", "Theme summary", "Founder review"],
  },
};

type ScenarioName = keyof typeof scenarios;

export function LocalAIAgentsPage() {
  const [scenario, setScenario] = useState<ScenarioName>("Customer Support");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const active = scenarios[scenario];
  const ScenarioIcon = active.icon;
  const subject = encodeURIComponent("Custom AI Agent Enquiry — Reddy786 Tech Solutions");
  const body = encodeURIComponent(
    "Hello Reddy786 Team,\n\nBusiness name:\nIndustry:\nWorkflow challenge:\nPreferred deployment environment:\nExisting systems:\n\nProject details:\n"
  );
  const mailto = `mailto:Vinay@reddy786TechSolutions.in?subject=${subject}&body=${body}`;

  const faqs = [
    ["What is a custom AI agent?", "It is a tailored AI-powered interface and workflow that uses approved information, tools, and human oversight to help with a defined business task."],
    ["Can it run entirely locally?", "A suitable deployment can be local or business-controlled. The architecture depends on hardware, model needs, integrations, security, and whether external services are required."],
    ["Can an agent access our documents?", "Yes, where explicitly approved and configured. Document access should be limited by permissions and tested for accurate retrieval and source references."],
    ["Does it replace employees?", "The aim is typically to support staff by preparing information, summaries, drafts, or workflow actions. Important decisions can remain with a human reviewer."],
    ["Can it connect to our existing systems?", "Potential integrations can include approved CRMs, databases, spreadsheets, booking tools, APIs, and workflow platforms such as n8n."],
  ];

  return (
    <main className="ai-page">
      <section className="ai-page-hero">
        <div className="container ai-page-hero-grid">
          <motion.div className="ai-page-hero-copy" {...reveal}>
            <p className="eyebrow eyebrow-light"><span /> REDDY786 AI SOLUTIONS</p>
            <h1>AI Agents Built for the Way Your Business Works.</h1>
            <p>From private knowledge assistants to connected business workflows, we design custom AI agents around your operational needs.</p>
            <div className="ai-page-actions">
              <a className="button button-orange" href={mailto}>Discuss an AI Agent Project <ArrowRight size={18} /></a>
              <a className="text-link ai-page-text-link" href="#use-cases">Explore Use Cases <ArrowUpRight size={17} /></a>
            </div>
          </motion.div>
          <motion.div className="ai-page-hero-panel" {...reveal} aria-label="AI agent system overview">
            <div className="ai-page-panel-header"><span>AGENT ARCHITECTURE</span><span>CONTROLLED WORKFLOW</span></div>
            <div className="ai-page-stack">
              <div><span><Eye size={18} /></span><strong>Agent interface</strong><small>User requests</small></div>
              <i />
              <div><span><Bot size={18} /></span><strong>AI inference</strong><small>Selected model</small></div>
              <i />
              <div><span><Database size={18} /></span><strong>Knowledge retrieval</strong><small>Approved sources</small></div>
              <i />
              <div><span><PlugZap size={18} /></span><strong>Workflow integration</strong><small>Business tools</small></div>
              <i />
              <div><span><ShieldCheck size={18} /></span><strong>Human approval</strong><small>Review &amp; action</small></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="what-is-agent" className="section ai-content-section">
        <div className="container ai-two-column">
          <motion.div {...reveal}>
            <p className="eyebrow"><span /> WHAT IS A CUSTOM AI AGENT?</p>
            <h2>A focused assistant for a defined business workflow.</h2>
          </motion.div>
          <motion.div className="ai-definition-copy" {...reveal}>
            <p>A custom AI agent combines an interface, AI model, approved knowledge sources, and connected tools. It can help prepare answers, retrieve information, organize requests, or guide routine work.</p>
            <p>The useful part is not simply the model. It is the controlled workflow around it: clear permissions, relevant sources, tested behavior, integration boundaries, and human oversight where decisions matter.</p>
          </motion.div>
        </div>
      </section>

      <section className="section ai-local-section">
        <div className="container ai-local-grid">
          <motion.div className="ai-local-copy" {...reveal}>
            <p className="eyebrow"><span /> DEPLOYMENT OPTIONS</p>
            <h2>Local AI: More Control Over Where Your AI Runs.</h2>
            <p>Local AI can run on a business workstation, an on-premises server, or other business-controlled infrastructure. The right option depends on the workflow and the organization’s technical requirements.</p>
            <div className="ai-benefit-grid">
              {["Greater control over deployment", "Custom integration with internal tools", "More control over data handling", "Options suited to business needs", "Reduced reliance on external inference where feasible"].map((item) => (
                <span key={item}><CheckCircle2 size={15} /> {item}</span>
              ))}
            </div>
          </motion.div>
          <motion.div className="ai-local-comparison" {...reveal}>
            <div>
              <LockKeyhole size={24} />
              <h3>Local Inference</h3>
              <p>Models run within selected business-controlled infrastructure. Consider hardware, model capability, maintenance, performance, and security configuration.</p>
            </div>
            <div>
              <Workflow size={24} />
              <h3>Cloud AI Services</h3>
              <p>Inference may run outside the local environment. When external APIs are used, some data may leave the local environment and should be reviewed carefully.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section ai-solution-detail-section">
        <div className="container">
          <motion.div className="section-heading ai-solutions-heading" {...reveal}>
            <div>
              <p className="eyebrow"><span /> AI AGENT SOLUTIONS</p>
              <h2>Start with the workflow, not the technology.</h2>
            </div>
          </motion.div>
          <div className="ai-detail-grid">
            {[
              [MessageSquareText, "AI Customer Support", "Prepare accurate responses with approved knowledge and escalation."],
              [BriefcaseBusiness, "AI Reception & Booking", "Organize enquiries and booking information for staff review."],
              [FileSearch, "Private Document AI", "Search authorized documents and show relevant passages."],
              [Workflow, "Business Automation", "Connect approved systems and repetitive process steps."],
              [PackageSearch, "Operations Assistant", "Retrieve operational information and prepare reports."],
              [Rocket, "Custom Startup Agent", "Build a focused modular workflow around startup operations."],
            ].map(([Icon, title, description]) => (
              <motion.article key={String(title)} {...reveal}>
                <span><Icon size={20} /></span>
                <h3>{String(title)}</h3>
                <p>{String(description)}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="section ai-use-cases-section">
        <div className="container">
          <motion.div className="section-heading ai-solutions-heading" {...reveal}>
            <div>
              <p className="eyebrow"><span /> ILLUSTRATIVE BUSINESS USE CASES</p>
              <h2>How a business AI agent could work.</h2>
            </div>
            <p>These examples demonstrate possible workflows. They are not existing customer implementations.</p>
          </motion.div>
          <div className="ai-use-case-grid">
            {useCases.map((item) => (
              <motion.article key={item.sector} {...reveal}>
                <div className="ai-use-case-label">{item.sector}</div>
                <p className="ai-use-question">“{item.question}”</p>
                <div className="ai-use-flow">
                  {item.flow.map((step, index) => (
                    <div key={step}>
                      <span>0{index + 1}</span><strong>{step}</strong>
                      {index < item.flow.length - 1 && <i />}
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ai-preview-section">
        <div className="container">
          <motion.div className="ai-preview-heading" {...reveal}>
            <div>
              <p className="eyebrow"><span /> GUIDED WORKFLOW PREVIEW</p>
              <h2>See How a Business AI Agent Could Work</h2>
            </div>
            <span className="ai-demo-label">Illustrative Workflow — Not a Live AI Demo</span>
          </motion.div>
          <motion.div className="ai-preview-panel" {...reveal}>
            <div className="ai-scenario-tabs" role="tablist" aria-label="Business scenarios">
              {(Object.keys(scenarios) as ScenarioName[]).map((name) => {
                const Icon = scenarios[name].icon;
                return (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={scenario === name}
                    className={scenario === name ? "is-active" : ""}
                    onClick={() => setScenario(name)}
                    key={name}
                  >
                    <Icon size={17} /> {name}
                  </button>
                );
              })}
            </div>
            <div className="ai-preview-content" role="tabpanel">
              <div className="ai-preview-chat">
                <div className="ai-chat-line user-line"><span>USER</span><p>{active.user}</p></div>
                <div className="ai-chat-line agent-line"><span><ScenarioIcon size={16} /> ILLUSTRATIVE AI RESPONSE</span><p>{active.response}</p></div>
              </div>
              <div className="ai-preview-flow">
                {active.flow.map((step, index) => (
                  <div key={step}>
                    <span>{index + 1}</span><strong>{step}</strong>
                    {index < active.flow.length - 1 && <i />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section ai-process-section">
        <div className="container">
          <motion.div className="section-heading ai-solutions-heading" {...reveal}>
            <div>
              <p className="eyebrow"><span /> HOW WE BUILD YOUR AI AGENT</p>
              <h2>From operational need to controlled deployment.</h2>
            </div>
          </motion.div>
          <div className="ai-process-grid">
            {[
              ["01", "Discover", "Understand business needs, workflows, existing systems, and constraints."],
              ["02", "Design", "Select the deployment architecture, model, knowledge sources, and integrations."],
              ["03", "Build & Validate", "Develop the agent, connect approved tools, test functions, and evaluate responses."],
              ["04", "Deploy & Support", "Set up the agreed environment and provide monitoring, maintenance, and improvement options."],
            ].map(([number, title, description]) => (
              <motion.article key={title} {...reveal}>
                <span>{number}</span><h3>{title}</h3><p>{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ai-security-section">
        <div className="container ai-security-grid">
          <motion.div {...reveal}>
            <p className="eyebrow"><span /> PRIVACY, SECURITY & HUMAN OVERSIGHT</p>
            <h2>Build control into the system, not around it.</h2>
          </motion.div>
          <motion.div className="ai-security-list" {...reveal}>
            {[
              ["Approved sources", "Define exactly what information the agent can retrieve."],
              ["Access-aware behavior", "Respect roles, permissions, and source boundaries."],
              ["Human approval", "Keep sensitive or consequential actions under review."],
              ["Monitoring", "Track usage and evaluate response quality over time."],
            ].map(([title, description]) => (
              <div key={title}><ShieldCheck size={18} /><p><strong>{title}</strong><span>{description}</span></p></div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section ai-tech-section">
        <div className="container">
          <details className="ai-tech-details">
            <summary>Technologies We Can Evaluate <ChevronDown size={18} /></summary>
            <div className="ai-tech-content">
              <p>Possible technical options include Ollama, llama.cpp, open-source language models, retrieval-augmented generation (RAG), vector databases, Python, FastAPI, n8n, REST APIs, and local inference services. These are evaluation options, not verified production partnerships or existing implementations.</p>
              <div>
                {["Agent interface", "AI inference", "Knowledge retrieval", "Workflow integration", "Human approval", "Monitoring"].map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </details>
        </div>
      </section>

      <section className="section ai-faq-section">
        <div className="container ai-faq-grid">
          <motion.div {...reveal}>
            <p className="eyebrow"><span /> FREQUENTLY ASKED QUESTIONS</p>
            <h2>Practical answers before you plan a project.</h2>
          </motion.div>
          <div className="ai-faq-list">
            {faqs.map(([question, answer], index) => (
              <div className={`ai-faq-item ${faqOpen === index ? "is-open" : ""}`} key={question}>
                <button type="button" aria-expanded={faqOpen === index} onClick={() => setFaqOpen(faqOpen === index ? null : index)}>
                  {question}<ChevronDown size={18} />
                </button>
                {faqOpen === index && <p>{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-page-cta">
        <div className="container ai-page-cta-inner">
          <div>
            <p className="eyebrow eyebrow-light"><span /> PROJECT ENQUIRY</p>
            <h2>Let&apos;s Build an AI Agent for Your Business.</h2>
          </div>
          <div>
            <p>Tell us what you want to automate, improve, or simplify.</p>
            <a className="button button-orange" href={mailto}>Discuss Your AI Requirements <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
