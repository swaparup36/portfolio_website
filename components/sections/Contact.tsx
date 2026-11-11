"use client";

import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { ParallaxSection } from '../ui/ParallaxSection';

const EMAIL = "swaparup36@gmail.com";

const socials = [
    { icon: Github, href: "https://github.com/swaparup36", label: "GitHub", color: "#00e5ff" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/swaparup-mukherjee-508001280/", label: "LinkedIn", color: "#ff00b3" },
    { icon: Twitter, href: "https://x.com/Swaparup36", label: "X", color: "#8b5cf6" },
    { icon: Mail, href: `mailto:${EMAIL}`, label: "Email", color: "#00e5ff" },
];

export const Contact = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <ParallaxSection id="contact" index={7}>
            <div className="max-w-4xl w-full mx-auto relative z-10">
                <div className="bg-[#0a0b10] border-[4px] border-[#8b5cf6] p-10 md:p-16 relative shadow-[12px_12px_0px_#ff00b3]">

                    {/* Top crosshair accents */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-l-4 border-t-4 border-[#00e5ff]" />
                    <div className="absolute top-4 right-4 w-4 h-4 border-r-4 border-t-4 border-[#00e5ff]" />

                    <h2 className="text-3xl md:text-6xl font-black font-mono mb-8 text-center tracking-wide break-words text-[#f8fafc]" style={{ textShadow: '4px 4px 0px #00e5ff' }}>this.letsConnect()</h2>
                    <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto font-mono text-lg border-b-4 border-dotted border-[#ff00b3] pb-8">
                        Open to internships and new-grad roles. Let&apos;s talk.
                        <span className="block mt-4 text-sm text-[#00e5ff] uppercase tracking-widest">Kolkata, India · Remote / open to relocate</span>
                    </p>

                    <div className="max-w-2xl mx-auto">
                        <a
                            href={`mailto:${EMAIL}`}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className="w-full bg-[#ff00b3] text-white font-black text-lg md:text-xl py-6 px-4 tracking-[0.2em] relative overflow-hidden flex justify-center items-center group transition-all break-all"
                            style={{
                                boxShadow: hovered ? '8px 8px 0px #00e5ff' : '4px 4px 0px #00e5ff',
                                transform: hovered ? 'translate(-2px, -2px)' : 'none'
                            }}
                        >
                            <span className="relative z-10 transition-transform group-hover:scale-110">{EMAIL.toUpperCase()}</span>
                            <div className="absolute inset-0 w-full h-full bg-[#00e5ff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
                        </a>
                    </div>

                    <div className="mt-16 flex justify-center gap-8">
                        {socials.map(({ icon: Icon, href, label, color }) => (
                            <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="p-4 border-[3px] border-slate-700 hover:border-white transition-all bg-[#0a0b10] text-slate-400 hover:text-white group relative block" style={{ boxShadow: `4px 4px 0px ${color}` }}>
                                <Icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            </a>
                        ))}
                    </div>

                    <div className="absolute bottom-4 left-4 w-4 h-4 border-l-4 border-b-4 border-[#00e5ff]" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-r-4 border-b-4 border-[#00e5ff]" />
                </div>
            </div>
        </ParallaxSection>
    );
};
