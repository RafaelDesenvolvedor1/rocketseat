import styled from "styled-components";
import {root} from  '../../../palletColor'

export const Formulario = styled.View`
    flex-direction: row;
    width: 100%;
    margin-top: -24px;
    gap:8px;
    justify-content: space-between;
`

export const Input = styled.TextInput`
    flex: 1;
    display: block;
    background-color: ${root.gray500};
    color: ${root.gray100};
    border: 1px solid ${root.gray700};
    border-radius: 8px;
    padding: 16px;

`

export const SubmitButton = styled.TouchableOpacity`
    /* width: 80px; */
    /* flex: 1; */
    padding:16px;
    background-color: ${root.blueDark};
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    /* flex-direction: row;
    gap:8px; */
`
