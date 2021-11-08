import React, { ReactNode } from "react";

export interface LabelProps {
    Image: ReactNode,
    text: string
}

function Label(props: LabelProps) {
    const { Image, text } = props;
    return (
        <div>
            { Image }
            <span>{text}</span>
        </div>
    )
}

export default Label;
