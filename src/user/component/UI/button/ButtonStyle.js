import { styled } from "styled-components";


export const BaseButton = styled.button`
    margin-left: 25px;
    border-radius: 50px;
    padding: 8px 25px;
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    display: inline-block;
    border:none;
`;

export const PrimaryButton = styled(BaseButton)`
    background: ${props => props.disabled ? 'gray' :' #FF6337'};
    color: #fff;

    &:hover {
        background: ${props => props.disabled ? 'Black' :'blue'};
    };
`;

export const SecounderyButton = styled(BaseButton)`
    background: ${props => props.disabled ? 'gray' : 'hotpink'};
    color: #fff;

    &:hover {
        background: ${props => props.disabled ? 'Black' : 'Blue'};
    };
`;

export const OutlineButton = styled(BaseButton)`
    background:yellow;
    color: green;

    &:hover {
        background:Black;
    };
`;