import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";

export interface InputProps {
    defaultValue?: number | string | readonly string[],
    onChangeCallback?: Function
}

function Input(props: InputHTMLAttributes<HTMLInputElement> & InputProps) {
    const [ value, setValue ] = useState(props.defaultValue);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(value);
        props.onChangeCallback && props.onChangeCallback(value);
    }

    return (
        <input
            className="fir-inputs"
            onChange={event => onChange(event)}
            value={value}
            {...props}
        />
    )
}

export default Input;
