"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
    children: React.ReactNode;
    id?: string;
    index: number;
}

export const ParallaxSection = ({ children, id, index }: ParallaxSectionProps) => {
    const ref = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Main content moves slightly slower
    const yContent = useTransform(scrollYProgress, [0, 1], [100, -100]);

    // Decorative Memphis shapes floating around
    const yShape1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    const yShape2 = useTransform(scrollYProgress, [0, 1], [300, -300]);
    const yShape3 = useTransform(scrollYProgress, [0, 1], [-150, 400]);
    const yShape4 = useTransform(scrollYProgress, [0, 1], [250, -150]);

    // Subtle rotation for shapes
    const rot1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const rot2 = useTransform(scrollYProgress, [0, 1], [360, 0]);

    // Alternate side decorations based on index
    const isEven = index % 2 === 0;

    return (
        <section ref={ref} id={id} className="relative min-h-screen py-32 flex items-center overflow-visible">

            {/* Background Memphis Elements */}
            <motion.div
                style={{ y: yShape1, rotate: rot1 }}
                className={`absolute z-0 pointer-events-none opacity-40 ${isEven ? 'left-[10%] top-[20%]' : 'right-[15%] top-[10%]'}`}
            >
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#00e5ff" strokeWidth="4" strokeDasharray="10 10" />
                </svg>
            </motion.div>

            <motion.div
                style={{ y: yShape2, rotate: rot2 }}
                className={`absolute z-0 pointer-events-none opacity-40 ${isEven ? 'right-[5%] bottom-[10%]' : 'left-[5%] bottom-[20%]'}`}
            >
                <svg width="80" height="80" viewBox="0 0 100 100">
                    <polygon points="50,10 90,90 10,90" fill="none" stroke="#ff00b3" strokeWidth="6" />
                </svg>
            </motion.div>

            <motion.div
                style={{ y: yShape3, rotate: rot1 }}
                className={`absolute z-0 pointer-events-none opacity-30 ${isEven ? 'right-[20%] top-[40%]' : 'left-[30%] top-[30%]'}`}
            >
                <svg width="120" height="120" viewBox="0 0 100 100">
                    <rect x="20" y="20" width="60" height="60" fill="none" stroke="#8b5cf6" strokeWidth="4" transform="rotate(45 50 50)" />
                </svg>
            </motion.div>

            <motion.div
                style={{ y: yShape4 }}
                className={`absolute z-0 pointer-events-none opacity-20 ${isEven ? 'left-[30%] bottom-[30%]' : 'right-[25%] bottom-[40%]'}`}
            >
                <svg width="150" height="40" viewBox="0 0 150 40">
                    <path d="M 0 20 Q 25 0 50 20 T 100 20 T 150 20" fill="none" stroke="#00e5ff" strokeWidth="4" />
                </svg>
            </motion.div>

            {/* Main Content Parallax Wrapper */}
            <motion.div style={{ y: yContent }} className="relative z-10 w-full px-4 md:px-8">
                {children}
            </motion.div>
        </section>
    );
};
