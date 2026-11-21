import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalAIAgentsPage } from "@/components/LocalAIAgentsPage";

export const metadata: Metadata = {
  title: "Custom Local AI Agents for Businesses | Reddy786 Tech Solutions",
  description:
    "Explore tailored local AI assistants, private document search, and intelligent business automation solutions for startups and growing companies.",
  alternates: { canonical: "/solutions/local-ai-agents" },
  openGraph: {
    title: "Custom Local AI Agents for Businesses | Reddy786 Tech Solutions",
    description:
      "Explore tailored local AI assistants, private document search, and intelligent business automation solutions.",
    url: "/solutions/local-ai-agents",
    siteName: "Reddy786 Tech Solutions",
    locale: "en_IN",
    type: "website",
  },
};

export default function LocalAIAgentsRoute() {
  return (
    <>
      <Header />
      <LocalAIAgentsPage />
      <Footer />
    </>
  );
}
