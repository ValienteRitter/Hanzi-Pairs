import { useState } from "react";
import { HanziCardContainer } from "./components/HanziCardContainer";
import { setHanziPairs } from "./utilities";
import { PinyinCardContainer } from "./components/PinyinCardContainer";

import './App.css'

export function App() {
    const [hanziPairs, handleHanziPairs] = useState(setHanziPairs(5, 1));

    return (
        <div className="app-container">
            <HanziCardContainer data={hanziPairs} />
            <hr />
            <PinyinCardContainer data={hanziPairs} />
        </div>
    );
}
