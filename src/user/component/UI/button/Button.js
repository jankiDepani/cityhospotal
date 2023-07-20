import React from 'react';
import { OutlineButton, PrimaryButton, SecounderyButton } from './ButtonStyle';

function Button({ children, btnType='primary', disabled=false }) {
    console.log(btnType);

    const checkBtnType = () => {
        switch(btnType) {
            case 'primary':
                return PrimaryButton;

            case 'secoundery':
                return SecounderyButton;

            case 'outline':
                return OutlineButton;
        }
    }

    let CustomButton = checkBtnType();

    console.log(CustomButton);

    return (
        <CustomButton disabled={disabled}>
        {children}
        </CustomButton>
    );
}

export default Button;