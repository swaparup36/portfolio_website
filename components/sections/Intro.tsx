import React from 'react';
import { ParallaxSection } from '../ui/ParallaxSection';

const focus = ["Backend & distributed systems", "Real-time infrastructure", "Solana (Anchor) & EVM smart contracts", "DeFi / SocialFi", "Compilers & developer tooling"];
const colors = ["#00e5ff", "#ff00b3", "#8b5cf6", "#00e5ff", "#ff00b3"];

export const Intro = () => {
    return (
        <ParallaxSection id="intro" index={0}>
            <div className="retro-window p-10 md:p-16 max-w-4xl w-full mx-auto relative overflow-hidden bg-[#0a0b10]/80 backdrop-blur-sm border-[3px] border-[#ff00b3] shadow-[8px_8px_0px_#00e5ff]">
                <h2 className="text-3xl md:text-5xl font-black font-mono mb-6 text-[#f8fafc] tracking-wide break-words" style={{ textShadow: '4px 4px 0px #8b5cf6' }}>
                    this.introduce()
                </h2>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-mono relative z-10">
                    I build applications that start with a real problem. I spot something broken, tiring or missing in everyday life, plan a solution around it, and build it. Complicated problems pull me in, and so does any manual task a system could do instead. I like coming at things from a different angle, and ideas that look impossible to build usually become my late-night research subjects.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                    {focus.map((f, i) => (
                        <span key={f} className="px-3 py-1 bg-[#0a0b10] border-2 font-mono text-xs uppercase text-slate-200" style={{ borderColor: colors[i] }}>
                            {f}
                        </span>
                    ))}
                </div>
                <p className="mt-8 font-mono text-sm text-[#00e5ff] uppercase tracking-widest">
                    Kolkata, India · Remote / open to relocate
                </p>
            </div>
        </ParallaxSection>
    );
};
