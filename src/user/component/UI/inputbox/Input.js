import React from 'react';
import { BaseInput, InputError } from './InputStyle';

function Input({errorTxet, ...rest }) {
    return (
        <>
        <BaseInput
            className="form-control"
            errorTxet = {errorTxet}
            { ...rest } />
        <InputError errorTxet={errorTxet}>
            {errorTxet}
        </InputError>
        </>
    );
}

export default Input;