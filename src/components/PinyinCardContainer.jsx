import { PinyinCard } from "./PinyinCard";

export function PinyinCardContainer({ data }) {
    return (
        <div className="pinyin container">
            {data.map(({ pinyin }) => (
                <PinyinCard pinyin={pinyin} key={crypto.randomUUID()} />
            ))}
        </div>
    );
}
