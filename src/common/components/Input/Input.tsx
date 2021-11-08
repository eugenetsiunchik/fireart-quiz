import React, { ChangeEvent, useState } from "react";
import "./Input.css";

export interface InputProps {
    value?: string,
    onChange: Function
}

function Input(props: InputProps) {
    const { value: defaultValue = '', onChange: onChangeCallback } = props;
    const [ value, setValue ] = useState(defaultValue);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(value);
        onChangeCallback(value);
    }

    return (
        <input
            className="fir-inputs fir-input"
            onChange={event => onChange(event)}
            value={value}
            type="number"
        />
    )
}

export default Input;
