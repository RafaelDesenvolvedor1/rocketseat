import styled from "styled-components";

import { root } from "../../../palletColor";

export const ListContainer = styled.View`
    width: 100%;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top:44px ;

`

export const RadioButton = styled.TouchableOpacity`
    flex-direction: row;
    gap:8px;
    align-items: center;
`

export const Span = styled.View`
    background-color: ${root.gray400};
    padding:3px 8px ;
    border-radius: 16px;

`