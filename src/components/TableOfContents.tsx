"use client";

import React, { useState, useEffect, useCallback } from "react";
import { BookOpen, X, List } from "lucide-react";

interface TocItem {
    id: string;
    label: string;
    level: number;
}

const tocItems: TocItem[] = [
    { id: "dan-nhap", label: "I. Dẫn Nhập", level: 1 },
    { id: "nen-tang-kinh-thanh", label: "II. Nền Tảng Kinh Thánh", level: 1 },
    { id: "dt-9-14", label: "1. Dt 9:14: Cấu Trúc Ba Ngôi", level: 2 },
    { id: "gethsemane", label: "2. Gethsemane & Tiếng Kêu Bị Bỏ Rơi", level: 2 },
    { id: "than-hoc-gioan", label: "3. Thần Học Gioan", level: 2 },
    { id: "quan-diem-than-hoc", label: "III. Các Quan Điểm Thần Học Hệ Thống", level: 1 },
    { id: "karl-rahner", label: "1. Karl Rahner", level: 2 },
    { id: "moltmann", label: "2. Jürgen Moltmann", level: 2 },
    { id: "balthasar", label: "3. Hans Urs von Balthasar", level: 2 },
    { id: "karl-barth", label: "4. Karl Barth", level: 2 },
    { id: "bang-so-sanh-1", label: "Bảng So Sánh: Moltmann & Balthasar", level: 2 },
    { id: "giao-huan-huan-quyen", label: "IV. Giáo Huấn Huấn Quyền Công Giáo", level: 1 },
    { id: "ccc", label: "1. Sách Giáo Lý (CCC)", level: 2 },
    { id: "salvifici-doloris", label: "2. Thánh Gioan Phaolô II", level: 2 },
    { id: "deus-caritas-est", label: "3. Đức Bênêđictô XVI", level: 2 },
    { id: "nghe-thuat-thanh", label: "V. Nghệ Thuật Thánh & Linh Ảnh", level: 1 },
    { id: "gnadenstuhl", label: "1. Ngai Tòa Ân Sủng", level: 2 },
    { id: "bang-nghe-thuat", label: "Bảng Đặc Trưng Nghệ Thuật", level: 2 },
    { id: "masaccio", label: "2. Bích Họa Masaccio", level: 2 },
    { id: "rublev", label: "3. Linh Ảnh Rublev", level: 2 },
    { id: "y-nghia-thuc-tien", label: "VI. Ý Nghĩa Thực Tiễn", level: 1 },
    { id: "theodicy", label: "1. Quan Niệm Đau Khổ (Theodicy)", level: 2 },
    { id: "hiep-thong", label: "2. Mô Hình Hiệp Thông", level: 2 },
    { id: "phung-vu", label: "3. Phụng Vụ & Dấu Thánh Giá", level: 2 },
    { id: "ket-luan", label: "VII. Kết Luận", level: 1 },
    { id: "nguon-trich-dan", label: "VIII. Nguồn Trích Dẫn", level: 1 },
];

export default function TableOfContents() {
    const [activeId, setActiveId] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);

    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
            setActiveId(visible[0].target.id);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            rootMargin: "-80px 0px -60% 0px",
            threshold: 0,
        });

        tocItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [handleObserver]);

    useEffect(() => {
        // Auto-scroll the active TOC item into view in the sidebar
        if (activeId) {
            const activeEl = document.querySelector(
                `[data-toc-id="${activeId}"]`
            );
            if (activeEl) {
                activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
            }
        }
    }, [activeId]);

    const handleClick = (id: string) => {
        setIsOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Mobile FAB */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 lg:hidden w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                    background:
                        "linear-gradient(135deg, var(--color-slate-dark), var(--color-slate-medium))",
                    color: "white",
                    border: "1px solid var(--color-table-border)",
                }}
                aria-label="Mở mục lục"
            >
                <List size={22} />
            </button>

            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 lg:hidden bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[var(--color-parchment)] shadow-2xl overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-[var(--color-parchment)] p-4 border-b border-[var(--color-table-border)] flex items-center justify-between z-10">
                            <div className="flex items-center gap-2 text-[var(--color-crimson)]">
                                <BookOpen size={18} />
                                <span
                                    className="font-semibold text-sm tracking-wide uppercase"
                                    style={{ fontFamily: "var(--font-sans)" }}
                                >
                                    Mục Lục
                                </span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-[var(--color-parchment-dark)] rounded-md transition-colors"
                                aria-label="Đóng mục lục"
                            >
                                <X size={18} className="text-[var(--color-slate-medium)]" />
                            </button>
                        </div>
                        <nav className="p-4">
                            <ul className="space-y-1">
                                {tocItems.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            data-toc-id={item.id}
                                            onClick={() => handleClick(item.id)}
                                            className={`toc-link w-full text-left px-3 py-2 text-sm rounded-r-md transition-all duration-200 block ${item.level === 2 ? "pl-7 text-xs" : ""
                                                } ${activeId === item.id
                                                    ? "active"
                                                    : "text-[var(--color-slate-medium)]"
                                                }`}
                                            style={{ fontFamily: "var(--font-sans)" }}
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}

            {/* Desktop sidebar */}
            <aside className="hidden lg:block sticky top-12 self-start w-full overflow-y-auto z-30 pr-4 pb-8" style={{ maxHeight: 'calc(100vh - 3rem)' }}>
                <div className="pt-2">
                    <div className="flex items-center gap-2 mb-5 pb-3 border-b-2 border-[var(--color-gold-muted)]/60">
                        <BookOpen
                            size={16}
                            className="text-[var(--color-crimson)]"
                        />
                        <span
                            className="font-bold text-[0.8rem] tracking-[0.15em] uppercase text-[var(--color-slate-dark)]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Mục Lục
                        </span>
                    </div>
                    <nav>
                        <ul className="space-y-1">
                            {tocItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        data-toc-id={item.id}
                                        onClick={() => handleClick(item.id)}
                                        className={`w-full text-left py-1.5 transition-all duration-200 block border-l-2 ${item.level === 2
                                            ? "pl-5 text-[0.85rem] leading-relaxed border-transparent font-normal"
                                            : "pl-3 text-[0.95rem] font-semibold"
                                            } ${activeId === item.id
                                                ? "text-[var(--color-crimson)] " + (item.level === 1 ? "border-[var(--color-crimson)]" : "font-semibold")
                                                : "text-[var(--color-slate-medium)] " + (item.level === 1 ? "border-transparent hover:border-[var(--color-gold-muted)]" : "hover:text-[var(--color-crimson)]")
                                            }`}
                                        style={{ fontFamily: item.level === 1 ? "var(--font-body)" : "var(--font-sans)" }}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}
