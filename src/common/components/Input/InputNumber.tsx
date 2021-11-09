import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";
import Input, { InputProps } from "./Input";

export interface InputNumbersProps {
    min: number,
    max: number
}

function InputNumber(props: InputHTMLAttributes<HTMLInputElement> & InputNumbersProps & InputProps) {
    const { value: defaultValue = '', min, max, onChangeCallback } = props;
    const [ value, setValue ] = useState<number | string | readonly string[]>(defaultValue);

    const onChangeNumbers = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            onChangeCallback && onChangeCallback('');
            return setValue('')
        }
        const value = +event.target.value;
        if (value <= max && value >= min) {
            onChangeCallback && onChangeCallback(value);
            setValue(value);
        }
    }

    return (
        <Input
            {...props}
            onChange={event => onChangeNumbers(event)}
            value={value}
        />
    )
}

export default InputNumber;
