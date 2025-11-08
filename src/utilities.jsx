import hsk from "./data/hsk.json";

export function setHanziPairs(count, diffLevel) {
    return hsk
        .filter(({ level }) => level === diffLevel)
        .slice(0, count)
        .map(({ pinyin, hanzi }) => ({ pinyin, hanzi }));
}

export function checkHanziPairs(selectedCard) {
    return hsk.some(
        ({ pinyin, hanzi }) =>
            pinyin === selectedCard.pinyin && hanzi === selectedCard.hanzi
    );
}
