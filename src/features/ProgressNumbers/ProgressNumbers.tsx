import React from "react";
import "./ProgressNumbers.css";

export interface ProgressNumbersProps {
    value: number,
    count: number
}

function ProgressNumbers(props: ProgressNumbersProps) {
    const { value, count} = props;
    return (
        <div className="fir-progress-numbers">
            <span className="fir-progress-numbers-value">{ "0" + value }</span>
            <span className="fir-progress-numbers-count">{ '/' + count }</span>
        </div>
    )
}

export default ProgressNumbers;
