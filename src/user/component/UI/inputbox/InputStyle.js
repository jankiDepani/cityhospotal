import { styled } from "styled-components";


export const BaseInput = styled.input`
border : 1px solid ${props => props.errorTxet ? 'red' : 'gray'}
    
`;
export const InputError = styled.p`
color: red;
display: ${props => props.errorTxet ? 'inline-block' : 'none'}
`;