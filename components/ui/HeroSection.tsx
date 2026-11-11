"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const scrollProgressRef = useRef<HTMLDivElement>(null);

    const [scrollProgress, setScrollProgress] = useState(0);
    const [currentSection, setCurrentSection] = useState(0);
    const [isReady, setIsReady] = useState(false);

    // Total sections matching the ParallaxSections index
    const totalSections = 8;

    const threeRefs = useRef<any>({
        scene: null,
        camera: null,
        renderer: null,
        composer: null,
        curve: null,
        shapes: [],
        particles: null,
        animationId: null,
        scrollProxy: { progress: 0 } // GSAP animates this object
    });

    useEffect(() => {
        const initThree = () => {
            const { current: refs } = threeRefs;

            refs.scene = new THREE.Scene();
            refs.scene.background = new THREE.Color(0x0a0b10);
            refs.scene.fog = new THREE.FogExp2(0x0a0b10, 0.002); // Deeper fog for mystery

            refs.camera = new THREE.PerspectiveCamera(
                80, // wide FOV for speed
                window.innerWidth / window.innerHeight,
                0.1,
                2000
            );

            refs.renderer = new THREE.WebGLRenderer({
                canvas: canvasRef.current!,
                antialias: true,
                alpha: false
            });
            refs.renderer.setSize(window.innerWidth, window.innerHeight);
            refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            refs.composer = new EffectComposer(refs.renderer);
            const renderPass = new RenderPass(refs.scene, refs.camera);
            refs.composer.addPass(renderPass);

            const bloomPass = new UnrealBloomPass(
                new THREE.Vector2(window.innerWidth, window.innerHeight),
                1.2, // intensity
                0.5, // radius
                0.3  // threshold
            );
            refs.composer.addPass(bloomPass);

            createJourneyPath();
            createTunnelShapes();
            createDataParticles();

            // Setup GSAP Journey ScrollTrigger
            setupGSAPTimeline();

            animate();
            setIsReady(true);
        };

        const createJourneyPath = () => {
            const { current: refs } = threeRefs;

            // Create a complex, curving spline path through 3D space
            const points = [
                new THREE.Vector3(0, 0, 200),
                new THREE.Vector3(50, -20, -100),
                new THREE.Vector3(-80, 40, -400),
                new THREE.Vector3(120, -50, -800),
                new THREE.Vector3(-150, 60, -1300),
                new THREE.Vector3(50, -20, -1800),
                new THREE.Vector3(0, 0, -2300) // End point
            ];

            refs.curve = new THREE.CatmullRomCurve3(points);
            refs.curve.tension = 0.5;

            // Optional: visualize the path for debugging/aesthetic
            // const pathPoints = refs.curve.getPoints( 200 );
            // const geometry = new THREE.BufferGeometry().setFromPoints( pathPoints );
            // const material = new THREE.LineBasicMaterial( { color: 0xff00b3, transparent: true, opacity: 0.2 } );
            // const splineObject = new THREE.Line( geometry, material );
            // refs.scene.add( splineObject );
        };

        const createTunnelShapes = () => {
            const { current: refs } = threeRefs;

            const shapeConfigs = [
                { type: 'triangle', sides: 3, radius: 10 },
                { type: 'circle', sides: 32, radius: 8 },
                { type: 'square', sides: 4, radius: 10 },
                { type: 'cross', sides: 4, radius: 8 } // diamond
            ];

            const colors = [0x00e5ff, 0xff00b3, 0x8b5cf6, 0xf43f5e]; // Cyan, Magenta, Purple, Rose

            const shapeCount = 300; // Dense tunnel

            for (let i = 0; i < shapeCount; i++) {
                // Place shapes ALONG the curve so the camera flies THROUGH them
                const t = i / shapeCount; // 0 to 1 along the path
                const curvePoint = refs.curve.getPointAt(t);
                // Tangent gets the direction the curve is pointing
                const tangent = refs.curve.getTangentAt(t).normalize();

                // Create an orthogonal vector to spread shapes around the tube
                const up = new THREE.Vector3(0, 1, 0);
                const right = new THREE.Vector3().crossVectors(tangent, up).normalize();
                const actualUp = new THREE.Vector3().crossVectors(right, tangent).normalize();

                const angle = Math.random() * Math.PI * 2;
                // Distribute them in a cylinder around the path
                const radiusOffset = 15 + Math.random() * 40;

                const config = shapeConfigs[Math.floor(Math.random() * shapeConfigs.length)];
                const color = colors[Math.floor(Math.random() * colors.length)];

                const baseGeo = new THREE.CircleGeometry(config.radius, config.sides);
                const edgesGeo = new THREE.EdgesGeometry(baseGeo);

                const lineMat = new THREE.LineBasicMaterial({
                    color: color,
                    transparent: true,
                    opacity: 0.8,
                    linewidth: 2
                });

                const line = new THREE.LineSegments(edgesGeo, lineMat);

                // Position relative to curve point
                const offsetX = right.clone().multiplyScalar(Math.cos(angle) * radiusOffset);
                const offsetY = actualUp.clone().multiplyScalar(Math.sin(angle) * radiusOffset);

                line.position.copy(curvePoint).add(offsetX).add(offsetY);

                // Orient them to face down the tunnel
                line.lookAt(curvePoint.clone().add(tangent));

                // Add some random wild tilt
                line.rotation.x += (Math.random() - 0.5);
                line.rotation.y += (Math.random() - 0.5);
                line.rotation.z += Math.random() * Math.PI;

                line.userData = {
                    rotSpeedZ: (Math.random() - 0.5) * 0.05,
                    rotSpeedX: (Math.random() - 0.5) * 0.05,
                    index: i // For potential staggered animations
                };

                refs.scene.add(line);
                refs.shapes.push(line);
            }
        };

        const createDataParticles = () => {
            const { current: refs } = threeRefs;
            const particleCount = 4000;

            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            const colors = new Float32Array(particleCount * 3);

            for (let i = 0; i < particleCount; i++) {
                // Distribute particles tightly hugging the spline
                const t = Math.random();
                const curvePoint = refs.curve.getPointAt(t);

                // A wider scatter than the shapes to fill the void
                positions[i * 3] = curvePoint.x + (Math.random() - 0.5) * 150;
                positions[i * 3 + 1] = curvePoint.y + (Math.random() - 0.5) * 150;
                positions[i * 3 + 2] = curvePoint.z + (Math.random() - 0.5) * 150;

                const color = new THREE.Color();
                const rand = Math.random();
                if (rand < 0.3) color.setHex(0x00e5ff); // Cyan
                else if (rand < 0.6) color.setHex(0xff00b3); // Magenta
                else color.setHex(0x8b5cf6); // Purple

                colors[i * 3] = color.r;
                colors[i * 3 + 1] = color.g;
                colors[i * 3 + 2] = color.b;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            const material = new THREE.PointsMaterial({
                size: 1.5,
                vertexColors: true,
                transparent: true,
                opacity: 0.6,
                sizeAttenuation: true
            });

            refs.particles = new THREE.Points(geometry, material);
            refs.scene.add(refs.particles);
        };

        const setupGSAPTimeline = () => {
            const { current: refs } = threeRefs;

            // Ensure we unmount any old instances correctly by destroying previous proxy
            refs.scrollProxy.progress = 0;

            // The ScrollTrigger that spans the ENTIRE document
            // It scrubs proxy.progress from 0 to 1
            ScrollTrigger.create({
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5, // 1.5 seconds smoothing for incredibly cinematic lag
                onUpdate: (self) => {
                    refs.scrollProxy.progress = self.progress;
                    setScrollProgress(self.progress);
                    // Calculate which section we are in
                    const section = Math.min(
                        Math.floor(self.progress * totalSections),
                        totalSections - 1
                    );
                    setCurrentSection(section);
                }
            });
        };

        const animate = () => {
            const { current: refs } = threeRefs;
            refs.animationId = requestAnimationFrame(animate);

            // Continuous rotation of Memphis shapes
            refs.shapes.forEach((obj: any) => {
                obj.rotation.z += obj.userData.rotSpeedZ;
                obj.rotation.x += obj.userData.rotSpeedX;
            });

            // Slowly rotate the entire particle cloud
            if (refs.particles) {
                refs.particles.rotation.z += 0.0005;
            }

            // -----------------------------------------------------------------
            // THE JOURNEY: Move camera along the spline based on Scroll Progress
            // -----------------------------------------------------------------
            if (refs.camera && refs.curve) {
                let p = refs.scrollProxy.progress;

                // Prevent strictly 1.0 to avoid lookAt errors at the very end of the curve
                if (p > 0.99) p = 0.99;

                // Current position on the curve
                const camPos = refs.curve.getPointAt(p);
                refs.camera.position.copy(camPos);

                // Look slightly ahead on the curve to bank and swoop
                const lookAhead = Math.min(1.0, p + 0.03); // Look 3% ahead into the future
                const targetPos = refs.curve.getPointAt(lookAhead);

                refs.camera.lookAt(targetPos);

                // Add dynamic roll/banking based on the curve orientation
                // This is a math trick: look at the difference in X over time to bank the camera
                const tangent = refs.curve.getTangentAt(p).normalize();
                refs.camera.rotation.z = -tangent.x * 0.8; // Bank left/right
            }

            if (refs.composer) {
                refs.composer.render();
            }
        };

        initThree();

        const handleResize = () => {
            const { current: refs } = threeRefs;
            if (refs.camera && refs.renderer && refs.composer) {
                refs.camera.aspect = window.innerWidth / window.innerHeight;
                refs.camera.updateProjectionMatrix();
                refs.renderer.setSize(window.innerWidth, window.innerHeight);
                refs.composer.setSize(window.innerWidth, window.innerHeight);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            const { current: refs } = threeRefs;
            if (refs.animationId) cancelAnimationFrame(refs.animationId);
            window.removeEventListener('resize', handleResize);
            ScrollTrigger.getAll().forEach(t => t.kill());

            if (refs.particles) {
                refs.particles.geometry.dispose();
                refs.particles.material.dispose();
            }
            refs.shapes.forEach((obj: any) => {
                if (obj.geometry) obj.geometry.dispose();
                if (obj.material) obj.material.dispose();
            });

            if (refs.renderer) refs.renderer.dispose();
        };
    }, []);

    // UI animations on load component
    useEffect(() => {
        if (!isReady) return;
        gsap.set([titleRef.current, subtitleRef.current, scrollProgressRef.current], {
            visibility: 'visible'
        });
        const tl = gsap.timeline();

        if (titleRef.current) {
            tl.from(titleRef.current, {
                scale: 0.8,
                opacity: 0,
                y: 50,
                duration: 1.5,
                ease: "elastic.out(1, 0.5)"
            }, "+=0.2");
        }

        if (subtitleRef.current) {
            tl.from(subtitleRef.current, {
                y: 30,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out"
            }, "-=1.0");
        }

        if (scrollProgressRef.current) {
            tl.from(scrollProgressRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out"
            }, "-=0.5");
        }
        return () => { tl.kill(); };
    }, [isReady]);

    return (
        <>
            <canvas ref={canvasRef} className="hero-canvas" />

            <div ref={containerRef} className="hero-container relative z-10 flex items-center justify-center">
                {/* Retro Window Container HUD */}
                <div className="hero-content w-full max-w-4xl relative">

                    <div ref={titleRef} style={{ visibility: 'hidden' }} className="retro-window pointer-events-none relative border-[3px] border-[#00e5ff] rounded-lg p-10 md:p-16 bg-[#0a0b10]/60 backdrop-blur-md shadow-[0_0_30px_rgba(0,229,255,0.2)]">

                        {/* Window header buttons */}
                        <div className="absolute top-0 left-0 w-full h-8 border-b-[3px] border-[#00e5ff] flex items-center px-3 gap-2 bg-gradient-to-r from-[#00e5ff]/20 to-[#ff00b3]/20 rounded-t-lg">
                            <div className="w-3 h-3 border-2 border-[#00e5ff]" />
                            <div className="w-3 h-3 border-2 border-[#00e5ff]" />
                            <div className="w-3 h-3 border-2 border-[#00e5ff]" />
                        </div>

                        <h1 className="hero-title mt-4 font-black uppercase text-center" style={{
                            background: 'linear-gradient(90deg, #93c5fd, #e879f9, #5eead4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '3px 3px 0px rgba(255, 0, 179, 0.4)'
                        }}>
                            SWAPARUP MUKHERJEE
                        </h1>

                        <div ref={subtitleRef} className="text-center mt-6" style={{ visibility: 'hidden' }}>
                            <p className="text-xl md:text-3xl font-light italic text-[#f8fafc] tracking-widest break-words" style={{ fontFamily: 'Georgia, serif' }}>
                                Backend × Web3 × Full-Stack
                            </p>
                            <p className="mt-6 text-slate-300 font-mono text-sm md:text-base max-w-2xl mx-auto">
                                I build backends that don&apos;t sleep: distributed systems, real-time infrastructure and on-chain apps.
                            </p>
                            <span className="inline-block mt-6 font-mono text-xs md:text-sm tracking-widest bg-[#ff00b3] text-white px-3 py-1 font-bold shadow-[4px_4px_0px_#00e5ff]">
                                GSoC 2026 · BRL-CAD
                            </span>
                        </div>

                        {/* Decorative crosshairs on corners */}
                        <div className="absolute -left-2 -top-2 w-4 h-4 border-l-2 border-t-2 border-[#ff00b3]" />
                        <div className="absolute -right-2 -top-2 w-4 h-4 border-r-2 border-t-2 border-[#ff00b3]" />
                        <div className="absolute -left-2 -bottom-2 w-4 h-4 border-l-2 border-b-2 border-[#ff00b3]" />
                        <div className="absolute -right-2 -bottom-2 w-4 h-4 border-r-2 border-b-2 border-[#ff00b3]" />
                    </div>

                </div>

                <div ref={scrollProgressRef} className="scroll-progress pointer-events-none" style={{ visibility: 'hidden' }}>
                    <div className="scroll-text text-[#ff00b3] font-mono font-bold tracking-[0.3em]">START</div>
                    <div className="progress-track bg-[#0a0b10] border border-[#ff00b3]/50">
                        <div
                            className="progress-fill shadow-[0_0_10px_rgba(255,0,179,0.8)] bg-[#ff00b3]"
                            style={{ width: `${scrollProgress * 100}%` }}
                        />
                    </div>
                    <div className="section-counter font-mono text-[#00e5ff] font-bold">
                        0{currentSection + 1}
                    </div>
                </div>
            </div>
        </>
    );
};
