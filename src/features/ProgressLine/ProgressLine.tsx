import React from "react";
import "./ProgressLine.css";

export interface ProgressLineProps {
    value: number,
    count: number
}

function ProgressLine(props: ProgressLineProps) {
    const { value, count } = props;
    const percentage = Math.round((value / count) * 100);
    return (
        <div className="fir-progress-line">
            <div className="fir-progress-line-numbers">
                <span className="fir-progress-line-numbers-value">{ "0" + value }</span>
                <span className="fir-progress-line-numbers-count">{ '/' + count }</span>
            </div>
            <div className="fir-progress-line-visual">
                <div className="fir-progress-line-visual-active" style={{ width: percentage + '%' }}/>
                <div className="fir-progress-line-visual-passive"/>
            </div>
        </div>
    )
}

export default ProgressLine;
