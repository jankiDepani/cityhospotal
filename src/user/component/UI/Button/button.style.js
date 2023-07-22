import { styled } from "styled-components";

export const BaseButton = styled.button`
    border: 0;
    padding: 10px 35px;
    transition: 0.4s;
    border-radius: 50px;  
`;

export const PrimaryButton = styled(BaseButton)`
    background: ${props => props.disabled ? 'grey' :  '#FF6337'};
    color: #fff;

    &:hover {
        background: ${props => props.disabled ? 'grey' :  'blue'};
    }
`;

export const SecondaryButton = styled(BaseButton)`
    background: black;
    color: #fff;

    &:hover {
        background: white;
    }
`;

export const OutlineButton = styled(BaseButton)`
    background: none;
    border: 1px solid black;
    color: #fff;

    &:hover {
        background: black;
    }
`;