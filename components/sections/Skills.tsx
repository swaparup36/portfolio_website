import React from 'react';
import { Code2, Database, Layers, Server, Blocks, Cpu, GraduationCap, Hexagon } from "lucide-react";
import { ParallaxSection } from '../ui/ParallaxSection';

const skills = [
    { name: "Languages", icon: Code2, tech: ["Go", "TypeScript", "JavaScript", "Python", "Rust", "C++", "Solidity"], color: "#00e5ff" },
    { name: "Frameworks", icon: Layers, tech: ["Node.js", "Express.js", "Nest.js", "Next.js", "React", "Django", "FastAPI"], color: "#ff00b3" },
    { name: "Databases & Messaging", icon: Database, tech: ["PostgreSQL", "Redis (queues, pub/sub)", "MongoDB", "MySQL", "Kafka"], color: "#8b5cf6" },
    { name: "DevOps & Cloud", icon: Server, tech: ["Docker", "CI/CD", "AWS", "Kubernetes (basic)", "GitHub Actions", "Prometheus", "Grafana"], color: "#00e5ff" },
    { name: "Solana", icon: Blocks, tech: ["Solana", "Anchor (Rust)", "Helius (webhooks, indexing)", "Solana wallet integration"], color: "#ff00b3" },
    { name: "Ethereum", icon: Hexagon, tech: ["Ethereum / EVM", "Base", "Foundry", "Hardhat", "Uniswap V2", "Uniswap V3", "Uniswap V4 Hooks", "ERC20", "ERC721", "ERC1155", "ZK-Rollups", "Formal verification", "Smart contract auditing"], color: "#8b5cf6" },
    { name: "Concepts", icon: Cpu, tech: ["Distributed systems", "REST APIs", "WS servers", "Async job processing", "WebSockets / real-time", "Compilers", "Computer architecture", "Computer Networks"], color: "#ff00b3" },
    { name: "Coursework", icon: GraduationCap, tech: ["DSA", "OOP", "Operating Systems", "DBMS", "Computer Networks"], color: "#8b5cf6" },
];

export const Skills = () => {
    return (
        <ParallaxSection id="skills" index={5}>
            <div className="max-w-6xl w-full mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-16 text-center tracking-widest uppercase text-[#f8fafc]" style={{ textShadow: '4px 4px 0px #00e5ff' }}>Arsenal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill) => (
                        <div key={skill.name} className="group relative bg-[#0a0b10] border-2 border-slate-800 hover:border-[#ff00b3] p-6 transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2"
                            style={{ boxShadow: `6px 6px 0px ${skill.color}` }}>
                            <skill.icon className={`w-12 h-12 mb-6 transition-colors`} style={{ color: skill.color }} />
                            <h3 className="text-xl font-bold mb-4 font-mono uppercase text-white">{skill.name}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.tech.map(t => (
                                    <span key={t} className="px-2 py-1 bg-[#0a0b10] border border-slate-700 font-mono text-xs uppercase text-slate-300">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ParallaxSection>
    );
};
