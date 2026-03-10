"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 500);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
                }`}
            style={{
                background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-muted))",
                color: "white",
            }}
            aria-label="Về đầu trang"
        >
            <ArrowUp size={20} />
        </button>
    );
}
