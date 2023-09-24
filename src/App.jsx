import { useState } from "react";
import "./App.css";
import Flashcard from "./components/flashcard";

function App() {
    const [card, setCard] = useState(0);
    var cards = [
        { q: "2 + 2", a: "4" },
        { q: "4 * 15", a: "60" },
        { q: "259/12", a: "21.583" },
        { q: "951 * 0.12", a: "114.12" },
        { q: "1 + 0", a: "1" },
        { q: "8 - 0.00145", a: "7.999" },
        { q: "7 / 3", a: "2.333" },
        { q: "22 / 7", a: "3.14" },
        { q: "94 * 65", a: "6,110" },
        { q: "100 / 0", a: "Undefined" },
        { q: "649 - 40.532", a: "608.468" },
    ];

    const randomCard = () => {
        setCard(Math.floor(Math.random() * cards.length));
    };

    return (
        <div>
            <h1 className='cardSet'>Elementary Math</h1>
            <h3 className='cardSet'>
                Addition, subtraction, multiplication, and division
            </h3>
            <Flashcard card={cards[card]} />
            <button className='button-23' onClick={randomCard}>
                New Card
            </button>
        </div>
    );
}

export default App;
