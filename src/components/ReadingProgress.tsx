"use client";

import React, { useEffect, useState } from "react";

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight > 0) {
                setProgress(Number((currentScroll / scrollHeight).toFixed(4)) * 100);
            }
        };

        window.addEventListener("scroll", updateProgress);
        window.addEventListener("resize", updateProgress);
        updateProgress();

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[80] bg-transparent pointer-events-none print:hidden drop-shadow-sm">
            <div
                className="h-full w-full bg-[var(--color-gold)] transition-transform duration-75 ease-linear origin-left"
                style={{ transform: `scaleX(${progress / 100})` }}
            />
        </div>
    );
}
