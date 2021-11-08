import React from "react";
import "./Select.css";

export interface SelectProps {
    options: string[],
    onSelect: Function
}

function Select(props: SelectProps) {
    const { options, onSelect } = props;

    return (
        <select className="fir-inputs fir-select">
            {
                options.map((option, index) => (
                    <option
                        key={index}
                        onClick={() => onSelect(option)}
                        className="fir-select-option"
                    >
                        {option}
                    </option>
                ))
            }
        </select>
    )
}

export default Select;
