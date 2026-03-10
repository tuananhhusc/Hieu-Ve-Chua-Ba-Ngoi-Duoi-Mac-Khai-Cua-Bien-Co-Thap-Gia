"use client";

import React from "react";
import { Cross } from "lucide-react";

export default function Hero() {
    return (
        <header
            id="hero"
            className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden"
            style={{
                background:
                    "linear-gradient(135deg, #1a1a2e 0%, #2d1b3d 30%, #1a1a2e 60%, #0f0f1f 100%)",
            }}
        >
            {/* Subtle sacred art overlay pattern */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(184, 134, 11, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(139, 26, 26, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 50% 80%, rgba(184, 134, 11, 0.2) 0%, transparent 50%)`,
                }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Cross watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
                <Cross
                    className="text-[var(--color-gold)]"
                    size={400}
                    strokeWidth={0.5}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                {/* Ornamental line */}
                <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent to-[var(--color-gold-muted)]" />
                    <Cross
                        className="text-[var(--color-gold-muted)]"
                        size={18}
                        strokeWidth={1.5}
                    />
                    <div className="w-16 h-px bg-gradient-to-l from-transparent to-[var(--color-gold-muted)]" />
                </div>

                {/* Subtitle */}
                <p
                    className="text-[var(--color-gold-muted)] tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in-up animate-delay-200"
                    style={{ fontFamily: "var(--font-sans)" }}
                >
                    Báo Cáo Nghiên Cứu Chuyên Sâu
                </p>

                {/* Main Title */}
                <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up animate-delay-400"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    Hiểu Về Chúa Ba Ngôi
                    <br />
                    <span className="text-[var(--color-gold-light)]">
                        Dưới Mặc Khải Của
                    </span>
                    <br />
                    Biến Cố Thập Giá
                </h1>

                {/* Bottom ornamental line */}
                <div className="flex items-center justify-center gap-4 mt-8 animate-fade-in-up animate-delay-600">
                    <div className="w-24 h-px bg-gradient-to-r from-transparent to-[var(--color-gold-muted)]" />
                    <div className="w-2 h-2 rounded-full bg-[var(--color-gold-muted)]" />
                    <div className="w-24 h-px bg-gradient-to-l from-transparent to-[var(--color-gold-muted)]" />
                </div>

                {/* Scroll indicator */}
                <div className="mt-12 animate-fade-in-up animate-delay-600">
                    <a
                        href="#dan-nhap"
                        className="inline-flex flex-col items-center gap-2 text-[var(--color-gold-muted)] hover:text-white transition-colors duration-300"
                    >
                        <span
                            className="text-xs tracking-widest uppercase"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            Khám Phá
                        </span>
                        <svg
                            className="w-5 h-5 animate-bounce"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
}
