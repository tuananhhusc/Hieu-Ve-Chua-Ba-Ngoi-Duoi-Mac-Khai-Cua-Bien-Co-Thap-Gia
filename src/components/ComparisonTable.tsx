import React from "react";

interface Column {
    header: string;
    key: string;
    width?: string;
}

interface ComparisonTableProps {
    title: string;
    columns: Column[];
    rows: Record<string, React.ReactNode>[];
    caption?: string;
}

export default function ComparisonTable({
    title,
    columns,
    rows,
    caption,
}: ComparisonTableProps) {
    return (
        <div className="my-8">
            <h4
                className="text-lg font-bold mb-4 text-[var(--color-crimson)]"
                style={{ fontFamily: "var(--font-heading)" }}
            >
                {title}
            </h4>
            <div className="table-wrapper">
                <table className="w-full border-collapse min-w-[600px]">
                    <thead>
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    className="px-4 py-3 text-left text-sm font-semibold text-white tracking-wide"
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        background: "var(--color-table-header)",
                                        width: col.width,
                                        borderBottom: "3px solid var(--color-gold)",
                                    }}
                                >
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIdx) => (
                            <tr
                                key={rowIdx}
                                className="transition-colors duration-200 hover:bg-[var(--color-parchment-dark)]"
                                style={{
                                    background:
                                        rowIdx % 2 === 0
                                            ? "var(--color-table-row-odd)"
                                            : "var(--color-table-row-even)",
                                }}
                            >
                                {columns.map((col) => (
                                    <td
                                        key={col.key}
                                        className="px-4 py-3 text-sm leading-relaxed align-top"
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            borderBottom: "1px solid var(--color-table-border)",
                                        }}
                                    >
                                        {row[col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {caption && (
                <p
                    className="mt-2 text-xs text-[var(--color-slate-medium)] italic text-center"
                    style={{ fontFamily: "var(--font-sans)" }}
                >
                    {caption}
                </p>
            )}
        </div>
    );
}
