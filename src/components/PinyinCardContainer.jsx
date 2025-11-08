import { PinyinCard } from "./PinyinCard";

export function PinyinCardContainer({ data, handleClick, selectedPinyin }) {
    return (
        <div className="pinyin container">
            {data.map(({ pinyin }) => (
                <PinyinCard
                    pinyin={pinyin}
                    key={crypto.randomUUID()}
                    handleClick={handleClick}
                    selectedPinyin={selectedPinyin}
                />
            ))}
        </div>
    );
}
