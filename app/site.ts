// Set NEXT_PUBLIC_SITE_URL to your custom domain; Vercel's production URL is the fallback.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const TITLE = "Swaparup Mukherjee | Backend & Web3 Engineer";
export const DESCRIPTION =
  "Final-year NIT Agartala student and GSoC 2026 contributor building distributed backends, real-time systems and EVM smart contracts.";
