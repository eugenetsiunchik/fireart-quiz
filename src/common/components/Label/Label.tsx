import React, { ReactNode } from "react";
import "./Label.css";

export interface LabelProps {
    Image: ReactNode,
    text: string
}

function Label(props: LabelProps) {
    const { Image, text } = props;
    return (
        <div className="fir-label">
            <div className="fir-label-image">{ Image }</div>
            <span className="fir-label-text">{text}</span>
        </div>
    )
}

export default Label;
