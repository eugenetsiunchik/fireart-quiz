import React from "react";
import "./ProgressNumbers.css";

export interface ProgressNumbersProps {
    value: number,
    amount: number
}

function ProgressNumbers(props: ProgressNumbersProps) {
    const { value, amount } = props;
    const presentationValue = value >= 10 ? value : "0" + value;
    return (
        <div className="fir-progress-numbers">
            <span className="fir-progress-numbers-value">{ presentationValue }</span>
            <span className="fir-progress-numbers-amount">{ '/' + amount }</span>
        </div>
    )
}

export default ProgressNumbers;
