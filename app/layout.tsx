import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SITE_URL, TITLE, DESCRIPTION } from "./site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Swaparup Mukherjee",
  authors: [{ name: "Swaparup Mukherjee", url: SITE_URL }],
  creator: "Swaparup Mukherjee",
  keywords: [
    "Swaparup Mukherjee", "Backend Engineer", "Web3 Engineer", "Solana developer", "Anchor", "Solidity",
    "Go", "distributed systems", "Google Summer of Code 2026", "BRL-CAD", "NIT Agartala", "Kolkata",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Swaparup Mukherjee",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    firstName: "Swaparup",
    lastName: "Mukherjee",
  },
  twitter: { card: "summary_large_image", creator: "@Swaparup36", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Swaparup Mukherjee",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  jobTitle: "Backend & Web3 Engineer",
  description: DESCRIPTION,
  address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressCountry: "IN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "National Institute of Technology Agartala" },
  knowsAbout: ["Distributed systems", "Go", "TypeScript", "Solana", "Anchor", "Solidity", "Redis", "PostgreSQL", "WebSockets", "Compilers"],
  sameAs: [
    "https://github.com/swaparup36",
    "https://www.linkedin.com/in/swaparup-mukherjee-508001280/",
    "https://x.com/Swaparup36",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} font-sans antialiased text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
