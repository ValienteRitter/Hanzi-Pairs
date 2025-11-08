import { HanziCard } from "./HanziCard";

export function HanziCardContainer({ data, handleClick, selectedHanzi }) {
    return (
        <div className="hanzi container">
            {data.map(({ hanzi }) => (
                <HanziCard
                    hanzi={hanzi}
                    key={crypto.randomUUID()}
                    handleClick={handleClick}
                    selectedHanzi={selectedHanzi}
                />
            ))}
        </div>
    );
}
