import hsk from "./data/hsk.json";

export function setHanziPairs({ count, diffLevel }) {
    return hsk
        .filter(({ level }, index) => level === diffLevel && index < count)
        .map(({ pinyin, hanzi }) => ({ pinyin: pinyin, hanzi: hanzi }));
}
