import React from "react";
import { rawReferences, formatAPA } from "../data/references";

function renderAPA(text: string, url?: string) {
    const { authorOrSource, year, title } = formatAPA(text, url);

    return (
        <React.Fragment>
            {authorOrSource}. ({year}). <em>{title}</em>. {url && (
                <span className="break-all">Retrieved from <a href={url} target="_blank" rel="noopener noreferrer" className="text-[var(--color-crimson)] hover:text-[var(--color-gold)] transition-colors duration-200 underline decoration-dotted underline-offset-2">{url}</a></span>
            )}
        </React.Fragment>
    );
}

export default function Bibliography() {
    return (
        <div className="mt-8 mb-16">
            <ol className="space-y-5 m-0 p-0" style={{ listStyleType: "none", counterReset: "bibliography" }}>
                {rawReferences.map((ref) => (
                    <li
                        key={ref.id}
                        id={`ref-${ref.id}`}
                        className="flex gap-4 sm:gap-5 text-[15px] sm:text-base leading-relaxed scroll-mt-24 items-start"
                    >
                        <span
                            className="shrink-0 w-8 sm:w-10 text-right font-bold text-[var(--color-crimson)] mt-[2px]"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            [{ref.id}]
                        </span>
                        <div className="flex-1 text-[var(--color-slate-medium)]" style={{ paddingLeft: "2rem", textIndent: "-2rem" }}>
                            {renderAPA(ref.text, ref.url)}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}
