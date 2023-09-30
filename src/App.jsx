import { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";

function App() {
    const [card, setCard] = useState(0);
    const [guess, setGuess] = useState("");
    const [streak, setStreak] = useState(0);
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
    ];
    const prevCard = () => {
        if (card == 0) {
            setCard(cards.length - 1);
        } else {
            setCard(card - 1);
        }
    };

    const nextCard = () => {
        setCard((card + 1) % cards.length);
    };

    const onCheckAnswer = () => {
        if (guess == cards[card]["a"]) {
            alert("You are correct! :)");
            setStreak(streak + 1);
        } else {
            alert("You are incorrect. :(");
            setStreak(0);
        }
    };

    const handleChange = (event) => {
        setGuess(event.target.value);
    };

    return (
        <div>
            <h1 className='title'>Elementary Math</h1>
            <h3 className='title'>
                Addition, subtraction, multiplication, and division
            </h3>
            <h4 className='title'>Number of cards: {cards.length}</h4>
            <h5 className='title'>Streak: {streak}</h5>
            <Flashcard card={cards[card]} />
            <input
                type='text'
                value={guess}
                placeholder="What's the answer?"
                className='text-box'
                onChange={handleChange}
            />
            <div className='container'>
                <button className='button-23' onClick={onCheckAnswer}>
                    Check Answer
                </button>
            </div>
            <div className='container'>
                <button className='button-23' onClick={prevCard}>
                    Previous Card
                </button>
                <button className='button-23' onClick={nextCard}>
                    Next Card
                </button>
            </div>
        </div>
    );
}

export default App;
