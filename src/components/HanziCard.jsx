import { useState } from "react";

export function HanziCard({ hanzi, handleClick, selectedHanzi }) {
    return (
        <div className="hanzi card">
            <button
                type="button"
                onClick={(e) => handleClick(e, "hanzi")}
                className={selectedHanzi === hanzi ? "highlighted" : ""}
            >
                {hanzi}
            </button>
        </div>
    );
}
