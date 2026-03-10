import React from "react";

interface ContentSectionProps {
    id: string;
    children: React.ReactNode;
}

export default function ContentSection({ id, children }: ContentSectionProps) {
    return (
        <section id={id} className="scroll-mt-24 mb-8">
            {children}
        </section>
    );
}
