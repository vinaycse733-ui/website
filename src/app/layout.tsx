import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reddy786 Tech Solutions | Software Development & AI Automation",
  description:
    "Explore custom software development, web and mobile applications, AI automation, digital marketing, and business technology solutions from Reddy786 Tech Solutions.",
  metadataBase: new URL("https://reddy786techsolutions.in"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Reddy786 Tech Solutions | Engineering Digital Growth",
    description:
      "Custom software, web and mobile development, AI automation, digital marketing, and technology consulting.",
    url: "https://reddy786techsolutions.in",
    siteName: "Reddy786 Tech Solutions",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reddy786 Tech Solutions",
    url: "https://reddy786techsolutions.in",
    email: "Vinay@reddy786TechSolutions.in",
  };

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
