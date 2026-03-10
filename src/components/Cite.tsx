import React from "react";
import { rawReferences, formatAPA } from "../data/references";

interface CiteProps {
    ids: number[];
}

export default function Cite({ ids }: CiteProps) {
    return (
        <sup className="citation-ref-wrapper">
            {ids.map((id, i) => {
                const ref = rawReferences.find(r => r.id === id);
                let authorOrSource = "Unknown";
                let title = "Unknown Title";

                if (ref) {
                    const parsed = formatAPA(ref.text);
                    authorOrSource = parsed.authorOrSource;
                    title = parsed.title;
                }

                return (
                    <React.Fragment key={id}>
                        <span className="relative group inline-block">
                            <a href={`#ref-${id}`} className="citation-ref">
                                {id}
                            </a>
                            {ref && (
                                <span className="fixed md:absolute bottom-6 md:bottom-full left-1/2 -translate-x-1/2 md:mb-2 w-[90vw] md:w-max md:max-w-[250px] p-3 md:p-2 bg-[var(--color-slate-dark)] text-white text-[13px] md:text-xs rounded-lg md:rounded shadow-2xl md:shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[100] whitespace-normal leading-snug font-sans text-left break-words border border-white/10 md:border-none">
                                    <span className="font-semibold block mb-1 text-[var(--color-gold-light)] md:text-white">{authorOrSource}</span>
                                    <span className="italic opacity-90">{title}</span>
                                    <span className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--color-slate-dark)]"></span>
                                </span>
                            )}
                        </span>
                        {i < ids.length - 1 && ","}
                    </React.Fragment>
                );
            })}
        </sup>
    );
}
