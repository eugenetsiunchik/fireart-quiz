import React from "react";
import "./ResultAnswer.css";
import { ReactComponent as Correct } from "../../assets/correct.svg";
import { ReactComponent as Wrong } from "../../assets/wrong.svg";

export interface ResultAnswerProps {
    isCorrect: boolean,
    text: string
}

function ResultAnswer(props: ResultAnswerProps) {
    const { isCorrect, text } = props;
    return (
        <div className="fir-result-answer" style={{ backgroundColor: isCorrect ? 'white' : '#FFDBDB' }}>
            <span>{ text }</span>
            <div className="fir-result-answer-mark">
                {
                    isCorrect ? <Correct/> : <Wrong/>
                }
            </div>
        </div>
    )
}

export default ResultAnswer;
