import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";

export interface InputNumbersProps {
    onChangeCallback?: Function,
    min: number,
    max: number
}

function InputNumber(props: InputHTMLAttributes<HTMLInputElement> & InputNumbersProps) {
    const { defaultValue = '', min, max, onChangeCallback, ...otherProps } = props;
    const [ value, setValue ] = useState(defaultValue);

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
        <input
            className={"fir-inputs"}
            onChange={event => onChangeNumbers(event)}
            value={value}
            {...otherProps}
        />
    )
}

export default InputNumber;
