import { HanziCard } from "./HanziCard";

export function HanziCardContainer({ data, handleClick }) {
    return (
        <div className="hanzi container">
            {data.map(({ hanzi }) => (
                <HanziCard
                    hanzi={hanzi}
                    key={crypto.randomUUID()}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
}
