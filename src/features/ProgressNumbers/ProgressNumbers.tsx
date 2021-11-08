import React from "react";
import "./ProgressNumbers.css";

export interface ProgressNumbersProps {
    value: number,
    amount: number
}

function ProgressNumbers(props: ProgressNumbersProps) {
    const { value, amount } = props;
    return (
        <div className="fir-progress-numbers">
            <span className="fir-progress-numbers-value">{ "0" + value }</span>
            <span className="fir-progress-numbers-count">{ '/' + amount }</span>
        </div>
    )
}

export default ProgressNumbers;
