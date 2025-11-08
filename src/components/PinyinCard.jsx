export function PinyinCard({ pinyin, handleClick }) {
    return (
        <div className="pinyin card">
            <button type="button" onClick={(e) => handleClick(e, "pinyin")}>
                {pinyin}
            </button>
        </div>
    );
}
