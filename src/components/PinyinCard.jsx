export function PinyinCard({ pinyin, handleClick, selectedPinyin }) {
    return (
        <div className="pinyin card">
            <button
                type="button"
                onClick={(e) => handleClick(e, "pinyin")}
                className={selectedPinyin === pinyin ? "highlighted" : ""}
            >
                {pinyin}
            </button>
        </div>
    );
}
