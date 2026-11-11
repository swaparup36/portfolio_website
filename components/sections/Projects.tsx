import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ParallaxSection } from '../ui/ParallaxSection';

type Project = {
    title: string;
    desc: string;
    points: string[];
    tags: string[];
    color: string;
    live: string;
    code: string;
    badge?: { text: string; href?: string };
};

const projects: Project[] = [
    {
        title: "Probso",
        desc: "A distributed SaaS I designed, built and launched, with real-time job processing across five services.",
        points: [
            "Async job processing with Go and Redis queues + pub/sub; job status streams back live over WebSockets.",
            "Docker-based CI/CD on VMs: automated build, push, pull and fresh container deployments.",
            "Clerk auth, Dodo Payments subscriptions, PostgreSQL and Redis.",
        ],
        tags: ["Go", "TypeScript", "Next.js", "Redis", "PostgreSQL", "WebSockets", "Docker", "CI/CD"],
        color: "#00e5ff",
        live: "https://probso.live/",
        code: "https://github.com/swaparup36/probso",
    },
    {
        title: "Agent Layer",
        desc: "A decentralized AI execution network that routes inference jobs on-chain to distributed node operators.",
        points: [
            "Solidity smart contracts on Base Sepolia for bidding, job assignment, escrow and payments.",
            "WebSocket gateway for real-time communication between SDKs and node operators.",
            "TypeScript SDK, node software and GitHub workflows for AI inference execution and automation.",
        ],
        tags: ["Solidity", "Base (EVM)", "TypeScript", "WebSockets", "Node.js"],
        color: "#ff00b3",
        live: "https://agentlayerai.vercel.app/",
        code: "https://github.com/krishshaw418/Agent_Layer",
        badge: { text: "Team project" },
    },
    {
        title: "Trender",
        desc: "A decentralized SocialFi platform on Solana where social posts are traded through AMM-based liquidity pools.",
        points: [
            "Anchor (Rust) smart contracts for on-chain trading, treasury management and event emission.",
            "Next.js frontend integrated with Solana wallets for on-chain interactions.",
            "Real-time trade indexing and OHLC charts using Helius webhooks.",
        ],
        tags: ["Solana", "Anchor (Rust)", "Next.js", "TypeScript", "Helius", "Solana wallet adapters"],
        color: "#8b5cf6",
        live: "https://trender-app.vercel.app/",
        code: "https://github.com/swaparup36/trender",
    },
    {
        title: "ydrop",
        desc: "An airdrop platform that lets YouTubers launch token airdrops for their subscribers and channel members.",
        points: [
            "Claims are gated by subscription duration, with Solana token verification.",
            "Scalable asynchronous backend for transaction verification.",
        ],
        tags: ["Next.js", "Solana Web3.js", "PostgreSQL", "Redis", "Auth.js"],
        color: "#00e5ff",
        live: "https://ydrop.vercel.app/",
        code: "https://github.com/swaparup36/ydrop",
        badge: { text: "8th · 100xDevs Hackathon", href: "https://superteam.fun/earn/listing/100xdevs-solana-mini-hackathon-lfg" },
    },
    {
        title: "ZYNC",
        desc: "A non-custodial DeFi automation vault: strategies execute on-chain when conditions are met.",
        points: [
            "Oracle-driven condition engine on price, gas and APR, with on-chain validation.",
            "Secure execution layer: function-selector validation, allowlists and a permissionless CLI executor.",
            "Guardrails: max limits, cooldowns, expiry and failure-based auto-pause.",
        ],
        tags: ["Solidity", "EVM", "Oracles", "DeFi", "Smart-contract security"],
        color: "#ff00b3",
        live: "https://www.zync.foo/",
        code: "https://github.com/swaparup36/ZYNC",
    },
];

export const Projects = () => {
    return (
        <ParallaxSection id="projects" index={2}>
            <div className="max-w-6xl w-full mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-widest text-[#f8fafc]" style={{ textShadow: '4px 4px 0px #8b5cf6' }}>Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((p, i) => (
                        <div key={p.title} className="bg-[#0a0b10] border-[3px] border-slate-800 hover:border-[#00e5ff] transition-all duration-300 group overflow-hidden flex flex-col" style={{ boxShadow: `8px 8px 0px ${p.color}` }}>
                            <div className="h-40 shrink-0 border-b-[3px] border-slate-800 group-hover:border-[#00e5ff] relative flex items-center justify-center overflow-hidden transition-colors" style={{ backgroundColor: `${p.color}20` }}>
                                <span className="text-6xl font-black opacity-40" style={{ color: p.color, textShadow: `4px 4px 0px ${p.color}80` }}>0{i + 1}</span>
                                <div className="absolute top-3 left-3 right-3 flex flex-wrap justify-end gap-2">
                                    <span className="font-mono text-[10px] tracking-widest uppercase bg-[#00e5ff] text-[#0a0b10] px-2 py-0.5 font-bold">● Live</span>
                                    {p.badge && (p.badge.href ? (
                                        <a href={p.badge.href} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-widest uppercase bg-[#ff00b3] text-white px-2 py-0.5 font-bold hover:bg-white hover:text-[#ff00b3] transition-colors">{p.badge.text} ↗</a>
                                    ) : (
                                        <span className="font-mono text-[10px] tracking-widest uppercase bg-[#ff00b3] text-white px-2 py-0.5 font-bold">{p.badge.text}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-white">{p.title}</h3>
                                <p className="text-slate-300 mb-6 font-mono text-sm leading-relaxed">{p.desc}</p>
                                <ul className="space-y-2 mb-6">
                                    {p.points.map(pt => (
                                        <li key={pt} className="text-slate-400 font-mono text-sm leading-relaxed pl-5 relative">
                                            <span className="absolute left-0" style={{ color: p.color }}>▸</span>{pt}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {p.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-[#0a0b10] border border-slate-700 font-mono text-xs uppercase text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={p.code} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} source code`} className="inline-flex items-center gap-2 p-2 border-2 border-slate-700 hover:border-[#ff00b3] text-slate-400 hover:text-[#ff00b3] transition-colors rounded font-mono text-xs uppercase">
                                        <Github className="w-5 h-5" /> Code
                                    </a>
                                    <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live site`} className="inline-flex items-center gap-2 p-2 border-2 border-slate-700 hover:border-[#00e5ff] text-slate-400 hover:text-[#00e5ff] transition-colors rounded font-mono text-xs uppercase">
                                        <ExternalLink className="w-5 h-5" /> Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ParallaxSection>
    );
};
