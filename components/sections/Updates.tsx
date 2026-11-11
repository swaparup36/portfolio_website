"use client";

import Script from 'next/script';
import { ExternalLink, Linkedin, Twitter } from 'lucide-react';
import { ParallaxSection } from '../ui/ParallaxSection';

// Paste post links here, newest first. Supported:
//   X:        https://x.com/Swaparup36/status/<id>
//   LinkedIn: https://www.linkedin.com/posts/..._share-<id>-xxxx  (or _activity-<id>), not lnkd.in short links
//             https://www.linkedin.com/feed/update/urn:li:activity:<id>/
export const posts: string[] = [
    "https://x.com/Swaparup36/status/2120508534777631103",
    "https://www.linkedin.com/posts/swaparup-mukherjee-508001280_its-been-a-great-experience-this-summer-share-7500944301867278337-WuK6",
    "https://x.com/Swaparup36/status/2120490054468649463"
];

type Embed = { kind: 'x' | 'linkedin'; id: string; url: string } | null;

export const parsePost = (url: string): Embed => {
    const x = url.match(/(?:x|twitter)\.com\/[^/]+\/status\/(\d+)/);
    if (x) return { kind: 'x', id: x[1], url };
    const urn = url.match(/urn:li:(activity|share|ugcPost):(\d+)/);
    if (urn) return { kind: 'linkedin', id: `urn:li:${urn[1]}:${urn[2]}`, url };
    const post = url.match(/linkedin\.com\/posts\/.*(activity|share|ugcPost)-(\d+)/);
    if (post) return { kind: 'linkedin', id: `urn:li:${post[1]}:${post[2]}`, url };
    return null;
};

declare global {
    interface Window { twttr?: { widgets: { load: () => void } } }
}

export const Updates = () => {
    const embeds = posts.map(parsePost).filter((e): e is NonNullable<Embed> => e !== null);
    if (embeds.length === 0) return null;

    return (
        <ParallaxSection id="updates" index={4}>
            <div className="max-w-6xl w-full mx-auto relative z-10">
                <h2 className="text-3xl md:text-5xl font-black font-mono mb-16 text-center tracking-wide break-words text-[#f8fafc]" style={{ textShadow: '4px 4px 0px #ff00b3' }}>
                    Updates
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {embeds.map((e, i) => {
                        const color = ['#00e5ff', '#ff00b3', '#8b5cf6'][i % 3];
                        const Icon = e.kind === 'x' ? Twitter : Linkedin;
                        return (
                            <div key={e.url} className="bg-[#0a0b10] border-[3px] border-slate-800 hover:border-[#00e5ff] transition-colors duration-300 overflow-hidden" style={{ boxShadow: `6px 6px 0px ${color}` }}>
                                <div className="flex items-center justify-between px-3 py-2 border-b-[3px] border-slate-800" style={{ backgroundColor: `${color}20` }}>
                                    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white">
                                        <Icon className="w-4 h-4" style={{ color }} /> {e.kind === 'x' ? 'X' : 'LinkedIn'}
                                    </span>
                                    <a href={e.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-mono text-xs uppercase text-slate-400 hover:text-[#00e5ff] transition-colors">
                                        Open <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                                <div className="relative p-2 flex justify-center max-h-[340px] overflow-hidden [&_.twitter-tweet]:!my-0">
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 z-10 bg-gradient-to-t from-[#0a0b10] to-transparent" />
                                    {e.kind === 'x' ? (
                                        <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true">
                                            <a href={`https://twitter.com/i/status/${e.id}`}>Loading post…</a>
                                        </blockquote>
                                    ) : (
                                        <iframe
                                            src={`https://www.linkedin.com/embed/feed/update/${e.id}`}
                                            title="LinkedIn post"
                                            loading="lazy"
                                            scrolling="no"
                                            className="w-full h-[320px] bg-white"
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {embeds.some(e => e.kind === 'x') && (
                <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" onReady={() => window.twttr?.widgets.load()} />
            )}
        </ParallaxSection>
    );
};
