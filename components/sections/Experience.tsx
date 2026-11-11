import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ParallaxSection } from '../ui/ParallaxSection';

const experiences = [
    {
        role: "Google Summer of Code Contributor",
        company: "BRL-CAD",
        period: "May – Aug 2026 · Remote",
        desc: "Built an OpenSCAD-to-JavaScript compiler using ManifoldCAD, so OpenSCAD models run natively in the browser.",
        points: [
            "Developed the OpenSCAD parsing and semantic analysis stages, which process source programs and validate their structure and meaning.",
            "Implemented the JavaScript code generation pipeline.",
            "Abstracted file I/O, process and path operations behind environment-independent interfaces, so the compiler runs in both Node.js and the browser.",
            "Wrote test suites and performance benchmarks covering parsing, compilation and generated-code performance.",
        ],
        tags: ["Compilers", "TypeScript", "JavaScript", "ManifoldCAD", "Open source", "Testing"],
        link: "https://drive.google.com/file/d/1b_XeHHhXarNhGfsIgCk1gXu6oc88IQut/view?usp=sharing",
    },
];

export const Experience = () => {
    return (
        <ParallaxSection id="experience" index={1}>
            <div className="max-w-4xl w-full mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-20 text-center uppercase tracking-widest text-[#f8fafc]" style={{ textShadow: '4px 4px 0px #ff00b3' }}>Journey</h2>
                <div className="relative border-l-[4px] border-[#8b5cf6] ml-6 md:ml-0">
                    {experiences.map((exp, i) => (
                        <div key={i} className="mb-16 ml-10 relative group">
                            <div className="absolute -left-[45px] top-2 w-6 h-6 bg-[#0a0b10] border-[4px] border-[#00e5ff] rotate-45 group-hover:rotate-90 group-hover:bg-[#00e5ff] transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.8)]" />

                            <div className="bg-[#0a0b10] border-2 border-slate-800 p-8 hover:-translate-y-2 hover:border-[#00e5ff] transition-all duration-300 relative group-hover:shadow-[8px_8px_0px_#00e5ff]">
                                {/* Decorative corner */}
                                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#ff00b3]" />
                                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#8b5cf6]" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-black uppercase tracking-wider text-white">{exp.role}</h3>
                                    <span className="font-mono text-sm tracking-widest bg-[#ff00b3] text-white px-3 py-1 font-bold shadow-[4px_4px_0px_#8b5cf6] self-start md:self-auto whitespace-nowrap">{exp.period}</span>
                                </div>
                                <h4 className="text-lg text-[#00e5ff] font-bold mb-4 uppercase">{exp.company}</h4>
                                <p className="text-slate-300 leading-relaxed font-mono text-sm mb-4">{exp.desc}</p>
                                <ul className="space-y-2 mb-6">
                                    {exp.points.map(pt => (
                                        <li key={pt} className="text-slate-400 leading-relaxed font-mono text-sm pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-[#ff00b3]">{pt}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-[#0a0b10] border border-slate-700 font-mono text-xs uppercase text-slate-300">{tag}</span>
                                    ))}
                                </div>
                                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm uppercase text-[#00e5ff] border-2 border-slate-700 hover:border-[#00e5ff] px-3 py-2 transition-colors">
                                    Certificate <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ParallaxSection>
    );
};
