import React from "react";
import "./Select.css";
import { ReactComponent as DownIcon } from '../../../assets/down-icon.svg';

export interface SelectProps {
    options: string[],
    onSelect: Function
}

function Select(props: SelectProps) {
    const { options, onSelect: onSelectCallback } = props;

    const onSelect = (option: string) => {
        onSelectCallback(option);
    }

    return (
        <div className="fir-select-container">
            <DownIcon className="fir-select-icon"/>
            <select className="fir-inputs fir-select">
                {
                    options.map((option, index) => (
                        <option
                            key={index}
                            onClick={() => onSelect(option)}
                            className="fir-select-options-item"
                        >
                            {option}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default Select;
