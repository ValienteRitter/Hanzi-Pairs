export function HanziCard({ hanzi, handleClick }) {
    return (
        <div className="hanzi card">
            <button type="button" onClick={(e) => handleClick(e, "hanzi")}>
                {hanzi}
            </button>
        </div>
    );
}
