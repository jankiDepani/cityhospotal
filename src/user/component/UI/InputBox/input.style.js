import { styled } from "styled-components";

export const Input = styled.input`
    border: 1px solid ${props => props.errorText ? 'red' : 'grey'};
`;

export const InputError = styled.p`
    color: red;
    display: ${props => props.errorText ? 'inline-block' : 'none'};
`;