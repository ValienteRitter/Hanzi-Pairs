import { useEffect, useState } from "react";
import { HanziCardContainer } from "./components/HanziCardContainer";
import { setHanziPairs, checkHanziPairs } from "./utilities";
import { PinyinCardContainer } from "./components/PinyinCardContainer";
import { Header } from "./components/Header";

import "./App.css";

export function App() {
    const [hanziPairs, handleHanziPairs] = useState(setHanziPairs(5, 1));
    const [selectedCard, handleSelectedCard] = useState({
        pinyin: "",
        hanzi: "",
    });

    function selectCard(e, type) {
        handleSelectedCard((prev) => ({
            ...prev,
            [type]: e.target.textContent,
        }));
    }

    useEffect(() => console.log(selectedCard), [selectedCard]);

    useEffect(() => {
        if (selectedCard.hanzi && selectedCard.pinyin) {
            if (checkHanziPairs(selectedCard)) {
                console.log("cool");
            } else {
                console.log("not so cool");
            }
        }
    }, [selectedCard]);

    return (
        <div className="app-container">
            <Header />
            <div>
                <HanziCardContainer
                    data={hanziPairs}
                    handleClick={selectCard}
                    selectedHanzi={selectedCard.hanzi}
                />
                <hr />
                <PinyinCardContainer
                    data={hanziPairs}
                    handleClick={selectCard}
                    selectedPinyin={selectedCard.pinyin}
                />
            </div>
        </div>
    );
}
