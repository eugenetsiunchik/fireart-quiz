import React from "react";

export interface SelectProps {
    options: [],
    onSelect: Function
}

function Select(props: SelectProps) {
    const { options, onSelect } = props;

    return (
        <select>
            {
                options.map((option, index) => (
                    <option
                        key={index}
                        onClick={() => onSelect(option)}
                    >
                        {option}
                    </option>
                ))
            }
        </select>
    )
}

export default Select;
