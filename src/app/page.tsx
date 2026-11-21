import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  AboutSection,
  ContactSection,
  IndustriesSection,
  ProcessSection,
  ServicesSection,
  TransformationSection,
  WhySection,
} from "@/components/Sections";
import { Footer } from "@/components/Footer";
import { LocalAIAgentsSection } from "@/components/LocalAIAgents";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LocalAIAgentsSection />
        <ServicesSection />
        <TransformationSection />
        <IndustriesSection />
        <ProcessSection />
        <WhySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
