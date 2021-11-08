import React from "react";
import "./ProgressLine.css";
import ProgressNumbers from "../ProgressNumbers/ProgressNumbers";

export interface ProgressLineProps {
    value: number,
    count: number
}

function ProgressLine(props: ProgressLineProps) {
    const { value, count } = props;
    const percentage = Math.round((value / count) * 100);
    return (
        <div className="fir-progress-line">
            <ProgressNumbers value={value} count={count}/>
            <div className="fir-progress-line-visual">
                <div className="fir-progress-line-visual-active" style={{ width: percentage + '%' }}/>
                <div className="fir-progress-line-visual-passive"/>
            </div>
        </div>
    )
}

export default ProgressLine;
