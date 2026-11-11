import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Swaparup Mukherjee | Backend & Web3 Engineer",
  description: "Final-year NIT Agartala student and GSoC 2026 contributor building distributed backends, real-time systems and EVM smart contracts.",
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
        {children}
      </body>
    </html>
  );
}
