import React, { ChangeEvent, useState } from "react";

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
            onChange={event => onChange(event)}
            value={value}
        />
    )
}

export default Input;
