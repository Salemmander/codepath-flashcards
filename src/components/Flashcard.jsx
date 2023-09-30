import "../App.css";
import { useState } from "react";

const Flashcard = (props) => {
    const [showAnswer, setshowAnswer] = useState(false);

    const toggleAnswer = () => {
        setshowAnswer(!showAnswer);
    };

    return (
        <div onClick={toggleAnswer} className={"flashcard"}>
            <h1>{showAnswer ? props.card["a"] : props.card["q"]}</h1>
        </div>
    );
};

export default Flashcard;
