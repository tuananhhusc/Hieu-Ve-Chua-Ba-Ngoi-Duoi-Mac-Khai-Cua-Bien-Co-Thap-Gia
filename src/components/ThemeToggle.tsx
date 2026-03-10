"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="fixed bottom-[10.5rem] right-6 z-40 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 print:hidden"
            style={{
                background: "var(--color-parchment)",
                color: "var(--color-slate-dark)",
                border: "1px solid var(--color-table-border)",
            }}
            aria-label="Toggle Dark Mode"
        >
            {theme === 'dark' ? <Sun size={20} className="text-[var(--color-gold)]" /> : <Moon size={20} />}
        </button>
    );
}
