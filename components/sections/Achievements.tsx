import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ParallaxSection } from '../ui/ParallaxSection';

const achievements = [
    { value: "GSoC '26", label: "Google Summer of Code 2026", details: "Contributor, BRL-CAD (OpenSCAD-to-JS compiler)", proof: "https://drive.google.com/file/d/1b_XeHHhXarNhGfsIgCk1gXu6oc88IQut/view?usp=sharing", color: "#00e5ff" },
    { value: "#8", label: "100xDevs Solana Mini Hackathon", details: "Built ydrop, a token airdrop platform for YouTubers (Next.js, Solana, Web3.js, Redis)", proof: "https://superteam.fun/earn/listing/100xdevs-solana-mini-hackathon-lfg", color: "#ff00b3" },
    { value: "Finalist", label: "Tryst'25 IIT Delhi Code Hive India", details: "Built a decentralized freelancing platform on the Hive blockchain", proof: "https://drive.google.com/file/d/1DTNsxFBT8hlgGy23Oyt5eEr9srvuw7vk/view?usp=sharing", color: "#8b5cf6" },
];

export const Achievements = () => {
    return (
        <ParallaxSection id="achievements" index={3}>
            <div className="max-w-6xl w-full mx-auto relative z-10">
                <h2 className="text-3xl md:text-5xl font-black font-mono mb-16 text-center tracking-wide break-words text-[#f8fafc]" style={{ textShadow: '4px 4px 0px #00e5ff' }}>Achievements</h2>
                <div className="retro-window p-10 md:p-16 border-[4px] border-[#00e5ff] bg-[#0a0b10]/90 shadow-[10px_10px_0px_#ff00b3] relative">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10 text-center">
                        {achievements.map((a) => (
                            <div key={a.label} className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300">
                                <h3 className="text-4xl md:text-5xl font-black mb-4 uppercase" style={{ color: a.color, textShadow: `4px 4px 0px ${a.color}80` }}>
                                    {a.value}
                                </h3>
                                <p className="text-[#f8fafc] font-bold tracking-widest text-sm uppercase bg-slate-800 px-4 py-2 border-2 border-slate-600 mb-4">
                                    {a.label}
                                </p>
                                <p className="text-slate-400 font-mono text-sm leading-relaxed mb-4">{a.details}</p>
                                <a href={a.proof} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 font-mono text-xs uppercase text-slate-300 border-2 border-slate-700 hover:border-white hover:text-white px-3 py-2 transition-colors">
                                    Proof <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Memphis Squiggle Decoration */}
                    <div className="absolute -bottom-6 -right-6 text-[#8b5cf6]">
                        <svg width="60" height="60" viewBox="0 0 100 100">
                            <path d="M 0 50 Q 25 0 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="8" />
                        </svg>
                    </div>
                </div>
            </div>
        </ParallaxSection>
    );
};
