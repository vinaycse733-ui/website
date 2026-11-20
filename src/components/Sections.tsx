"use client";

import { ArrowRight, ArrowUpRight, Check, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { siteConfig } from "@/data/siteConfig";

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55 },
};

export function ServicesSection() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <motion.div className="section-heading" {...reveal}>
          <div>
            <p className="eyebrow"><span /> WHAT WE DO</p>
            <h2>Technology Solutions Built Around Your Business.</h2>
          </div>
          <p>Explore services designed to help businesses create, connect, automate, and grow.</p>
        </motion.div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article className="service-card" key={service.title} {...reveal} transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}>
                <div className="service-top">
                  <span className="service-icon"><Icon size={22} /></span>
                  <span className="service-number">0{index + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.examples.slice(0, 3).map((example) => <li key={example}><Check size={13} /> {example}</li>)}
                </ul>
                <a href="#contact" aria-label={`Discuss ${service.title}`}>Discuss this service <ArrowUpRight size={16} /></a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TransformationSection() {
  const steps = ["Business Enquiry", "CRM / Business System", "Automation Workflow", "Team Notification", "Reporting & Follow-up"];
  return (
    <section id="solutions" className="transformation-section">
      <div className="container transformation-grid">
        <motion.div className="transformation-copy" {...reveal}>
          <p className="eyebrow eyebrow-light"><span /> DIGITAL TRANSFORMATION</p>
          <h2>Transform the Way Your Business Works.</h2>
          <p>Connect business processes, digital platforms, and intelligent tools to create more efficient ways of working.</p>
          <a className="button button-orange" href="#contact">Explore Automation Solutions <ArrowRight size={18} /></a>
        </motion.div>
        <motion.div className="workflow" {...reveal}>
          <div className="workflow-header"><span>ILLUSTRATIVE WORKFLOW</span><span className="status-dot">ACTIVE</span></div>
          <div className="workflow-steps">
            {steps.map((step, index) => (
              <div className="workflow-step" key={step}>
                <span className="workflow-index">0{index + 1}</span>
                <strong>{step}</strong>
                {index < steps.length - 1 && <i className="workflow-line" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section id="industries" className="section industries-section">
      <div className="container">
        <motion.div className="section-heading compact" {...reveal}>
          <div>
            <p className="eyebrow"><span /> INDUSTRIES</p>
            <h2>Technology for Different Business Needs.</h2>
          </div>
        </motion.div>
        <div className="industries-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.article className={`industry-card ${industry.className}`} key={industry.title} {...reveal}>
                <div className="industry-art" aria-hidden="true">
                  <div className="industry-orbit" />
                  <Icon size={44} strokeWidth={1.25} />
                </div>
                <div className="industry-content">
                  <p>Solutions for</p>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  <a href="#contact" aria-label={`Discuss solutions for ${industry.title}`}><ArrowUpRight size={18} /></a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    ["Discover", "Understand business requirements, challenges, and project goals."],
    ["Design", "Create the right user experience, technical approach, and implementation plan."],
    ["Develop", "Build, integrate, and test the agreed solution."],
    ["Deliver & Improve", "Support launch, review outcomes, and plan improvements."],
  ];
  return (
    <section className="section process-section">
      <div className="container">
        <motion.div className="section-heading compact" {...reveal}>
          <div>
            <p className="eyebrow"><span /> OUR APPROACH</p>
            <h2>From Idea to Implementation.</h2>
          </div>
        </motion.div>
        <div className="process-grid">
          {steps.map(([title, description], index) => (
            <motion.article className="process-step" key={title} {...reveal} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <div className="process-marker"><span>0{index + 1}</span><MoveRight size={16} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  const features = [
    ["01", "Business-First Thinking", "We begin with the real operational need, not a predefined technology."],
    ["02", "Tailored Digital Solutions", "Every approach is shaped around the requirements of the project."],
    ["03", "Clear Project Collaboration", "Straightforward communication keeps decisions and progress visible."],
    ["04", "Scalable Technical Architecture", "Build choices consider future growth, integration, and maintainability."],
  ];
  return (
    <section className="why-section">
      <div className="container">
        <motion.div className="why-heading" {...reveal}>
          <p className="eyebrow"><span /> WHY REDDY786</p>
          <h2>Technology Built Around Your Goals.</h2>
        </motion.div>
        <div className="why-grid">
          {features.map(([number, title, description]) => (
            <motion.article key={title} {...reveal}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <motion.div className="about-visual" {...reveal} aria-label="Abstract Reddy786 brand composition">
          <div className="about-ring" />
          <div className="about-panel">
            <span>REDDY786</span>
            <strong>R</strong>
          </div>
          <div className="about-lines"><i /><i /><i /></div>
        </motion.div>
        <motion.div className="about-copy" {...reveal}>
          <p className="eyebrow"><span /> ABOUT US</p>
          <h2>Building Digital Possibilities.</h2>
          <p>Reddy786 Tech Solutions focuses on software development, technology customization, intelligent automation, and digital solutions for businesses.</p>
          <p>Our approach starts with understanding real requirements and turning ideas into practical, well-designed technology.</p>
          <a className="text-link" href="#contact">Start a Conversation <ArrowUpRight size={17} /></a>
        </motion.div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const subject = encodeURIComponent("Project enquiry - Reddy786 Tech Solutions");
  const body = encodeURIComponent(
    "Hello Reddy786 Team,\n\nFull Name:\nBusiness Email:\nCompany:\nService Interested In:\n\nProject Description:\n"
  );
  const mailto = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-accent accent-one" />
      <div className="contact-accent accent-two" />
      <div className="container contact-inner">
        <motion.div {...reveal}>
          <p className="eyebrow eyebrow-light"><span /> START A PROJECT</p>
          <h2>Have a Project in Mind?</h2>
        </motion.div>
        <motion.div className="contact-copy" {...reveal}>
          <p>Tell us what you want to build, automate, or improve. Let&apos;s explore the right technology approach for your business.</p>
          <div className="contact-actions">
            <a className="button button-orange" href={mailto}>Let&apos;s Discuss Your Project <ArrowRight size={18} /></a>
            <a className="email-link" href={mailto}>{siteConfig.email}</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
