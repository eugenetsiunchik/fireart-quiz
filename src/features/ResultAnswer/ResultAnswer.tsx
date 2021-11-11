import React from "react";
import "./ResultAnswer.css";
import { ReactComponent as Correct } from "../../assets/correct.svg";
import { ReactComponent as Wrong } from "../../assets/wrong.svg";

export interface ResultAnswerProps {
    isCorrect: boolean,
    text: string | null
}

function ResultAnswer(props: ResultAnswerProps) {
    const { isCorrect, text } = props;
    const backgroundColor =  isCorrect ? 'white' : '#FFDBDB';
    return (
        <div className="fir-result-answer" style={{ backgroundColor }}>
            <span dangerouslySetInnerHTML={{ __html: text || '' }}/>
            <div className="fir-result-answer-mark">
                {
                    isCorrect ? <Correct/> : <Wrong/>
                }
            </div>
        </div>
    )
}

export default ResultAnswer;
