import React from "react";
import { Cross } from "lucide-react";

export default function CrossDivider() {
    return (
        <div className="cross-divider" role="separator" aria-hidden="true">
            <Cross className="cross-icon" size={14} strokeWidth={1.5} />
        </div>
    );
}
