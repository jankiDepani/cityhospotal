import React from 'react';
import { Input, InputError } from './input.style';

function InputBox({ errorText, ...rest }) {
    console.log(errorText);
    return (
        <>
            <Input
                className="form-control"
                errorText={errorText}
                {...rest}
            />
            <InputError errorText={errorText}>
                {errorText}
            </InputError>
        </>
    );
}

export default InputBox;