"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Braces, Database, Workflow } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow"><span /> TECHNOLOGY · INNOVATION · GROWTH</p>
          <h1>Engineering<br /><em>Digital Growth.</em></h1>
          <p className="hero-description">
            From custom software and intelligent automation to digital experiences and growth solutions,
            we help businesses build technology around their goals.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#services">Explore Our Services <ArrowRight size={18} /></a>
            <a className="text-link" href="#contact">Discuss Your Project <ArrowUpRight size={17} /></a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12 }}
          aria-label="Abstract digital engineering architecture"
        >
          <div className="visual-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <motion.div className="architecture-card card-main" animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <div className="card-bar"><i /><i /><i /><span>Solution Architecture</span></div>
            <div className="architecture-map">
              <div className="node"><Braces size={20} /><span>Applications</span></div>
              <div className="connector" />
              <div className="node node-orange"><Workflow size={20} /><span>Automation</span></div>
              <div className="connector" />
              <div className="node"><Database size={20} /><span>Data</span></div>
            </div>
          </motion.div>
          <motion.div className="architecture-card card-float" animate={{ y: [0, 7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
            <span className="float-label">CONNECTED EXPERIENCE</span>
            <div className="float-lines"><i /><i /><i /></div>
          </motion.div>
          <div className="visual-index"><strong>786</strong><span>DIGITAL<br />ENGINEERING</span></div>
        </motion.div>
      </div>
    </section>
  );
}
