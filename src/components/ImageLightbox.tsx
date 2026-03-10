"use client";

import React, { useState } from "react";
import { X, Maximize2 } from "lucide-react";

interface ImageLightboxProps {
    src: string;
    alt: string;
    caption?: string;
}

export default function ImageLightbox({ src, alt, caption }: ImageLightboxProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="my-8">
            <figure className="relative group overflow-hidden rounded-xl shadow-md border border-[var(--color-table-border)]/50 bg-[var(--color-parchment-dark)] mx-auto max-w-2xl cursor-pointer" onClick={() => setIsOpen(true)}>
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md pb-8" size={32} />
                </div>
                {caption && (
                    <figcaption className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm text-white text-sm py-2 px-4 shadow-t-md text-center font-serif italic border-t border-[var(--color-gold-muted)]/30">
                        {caption}
                    </figcaption>
                )}
            </figure>

            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setIsOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full backdrop-blur-md"
                        onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                        aria-label="Đóng"
                    >
                        <X size={24} />
                    </button>
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-full max-h-[90vh] object-contain rounded drop-shadow-2xl ring-1 ring-white/10"
                    />
                    {caption && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white/90 px-6 py-3 rounded-full text-sm font-serif pointer-events-none ring-1 ring-[var(--color-gold-muted)]/30">
                            {caption}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
