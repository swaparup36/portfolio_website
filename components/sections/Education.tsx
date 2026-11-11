import React from 'react';
import { ParallaxSection } from '../ui/ParallaxSection';

export const Education = () => {
    return (
        <ParallaxSection id="education" index={6}>
            <div className="retro-window p-10 md:p-16 max-w-4xl w-full mx-auto relative overflow-hidden bg-[#0a0b10]/80 backdrop-blur-sm border-[3px] border-[#8b5cf6] shadow-[8px_8px_0px_#ff00b3]">
                <h2 className="text-3xl md:text-5xl font-black font-mono mb-8 text-[#f8fafc] tracking-wide break-words" style={{ textShadow: '4px 4px 0px #00e5ff' }}>
                    this.education()
                </h2>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-black uppercase tracking-wider text-white">National Institute of Technology (NIT) Agartala</h3>
                    <span className="font-mono text-sm tracking-widest bg-[#ff00b3] text-white px-3 py-1 font-bold shadow-[4px_4px_0px_#8b5cf6] self-start md:self-auto whitespace-nowrap">2023 – 2027</span>
                </div>
                <h4 className="text-lg text-[#00e5ff] font-bold mb-4 uppercase">B.Tech, Electronics and Instrumentation Engineering</h4>
                <p className="font-mono text-slate-300">CGPA: <span className="text-white font-bold">8.26 / 10</span></p>
            </div>
        </ParallaxSection>
    );
};
