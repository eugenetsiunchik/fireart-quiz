import React, { useRef, useState } from "react";
import "./Select.css";
import { useOutsideClick } from "../../hooks";
import { ReactComponent as DownIcon } from '../../../assets/down-icon.svg';

export interface SelectProps {
    options: string[],
    onSelect: Function
}

function Select(props: SelectProps) {
    const { options, onSelect: onSelectCallback } = props;
    const ref = useRef<HTMLDivElement>(null);
    const [ selected, setSelected ] = useState(options[0]);
    const [ optionsVisibility, setOptionsVisibility ] = useState(false)

    const onSelect = (option: string) => {
        setSelected(option);
        onSelectCallback(option);
    }

    useOutsideClick(ref, () => {
        setOptionsVisibility(false);
    });

    return (
        <div ref={ref}  className="fir-inputs fir-select" onClick={() => setOptionsVisibility(!optionsVisibility)}>
            <span className="fir-select-value">{selected}</span>
            <DownIcon className="fir-select-icon"/>
            <div className="fir-select-options" style={{ display: optionsVisibility ? 'block' : 'none' }}>
                {
                    options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => onSelect(option)}
                            className="fir-select-options-item"
                        >
                            {option}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Select;
