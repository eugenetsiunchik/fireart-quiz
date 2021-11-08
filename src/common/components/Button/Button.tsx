import React, { ReactNode } from "react";
import "./Button.css";

export interface ButtonProps {
    className?: string,
    children: string | ReactNode,
    ariaLabel: string,
    onClick: Function
}

function Button(props: ButtonProps) {
    const { children, className = '' } = props;
    return (
        <button
            className={"fir-button " + className}
            aria-label={props.ariaLabel}
            onClick={() => props.onClick()}
        >
            { children }
        </button>
    )
}

export default Button;
