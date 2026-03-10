import React from "react";

interface BlockquoteProps {
    children: React.ReactNode;
    source?: string;
    variant?: "scripture" | "magisterium";
}

export default function Blockquote({
    children,
    source,
    variant = "scripture",
}: BlockquoteProps) {
    return (
        <blockquote
            className={variant === "scripture" ? "scripture-quote" : "magisterium-quote"}
        >
            <div className="relative z-10 pl-4">{children}</div>
            {source && (
                <cite
                    className="block mt-3 text-xs not-italic font-medium tracking-wide pl-4"
                    style={{
                        fontFamily: "var(--font-sans)",
                        color:
                            variant === "scripture"
                                ? "var(--color-crimson)"
                                : "var(--color-gold)",
                    }}
                >
                    — {source}
                </cite>
            )}
        </blockquote>
    );
}
