import React from 'react';
import { BaseButton, OutlineButton, PrimaryButton, SecondaryButton } from './button.style';

function Button({ children, btnType, type, disabled=false }) {
    console.log(disabled);

    const checkButtonType = ()  => {
        switch(btnType) {
            case 'primary':
                console.log(btnType);
                return PrimaryButton;

            case 'secondary':
                return SecondaryButton;

            case 'outline':
                return OutlineButton;
        }
    }

    let CustomButton = checkButtonType();
    console.log(CustomButton);
    return (
        <CustomButton disabled={disabled} {...type}>
            {children}
        </CustomButton>
    );
}

export default Button;