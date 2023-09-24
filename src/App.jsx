import { useState } from "react";
import "./App.css";
import Flashcard from "./components/flashcard";

function App() {
    var cards = [{ q: "question", a: "answer" }];

    return (
        <div>
            <Flashcard card={cards[0]} />
        </div>
    );
}

export default App;
