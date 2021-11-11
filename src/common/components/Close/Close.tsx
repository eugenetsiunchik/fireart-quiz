import React from "react";
import "./Close.css";
import { ReactComponent as CloseLight } from "../../../assets/close.svg";
import { ReactComponent as CloseDark } from "../../../assets/close-dark.svg";

interface CloseProps {
    className?: string,
    isDark?: boolean,
    onClickCallback: Function
}

function Close(props: CloseProps) {
    const { className = '', isDark = false, onClickCallback } = props;
    return(
        <div onClick={() => onClickCallback()} className={`fir-close ${className}`}>
            {
                isDark ? <CloseDark/> : <CloseLight/>
            }
        </div>
    )
}

export default Close;
