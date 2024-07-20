import styled from "styled-components";

import { root } from "../../../palletColor";

export const Container = styled.View`
    width: 100%;
    padding-top: 64px;
    /* margin-top: 32px; */
    align-items: center;
`

export const Hr = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${root.gray400};
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;

    margin-bottom: 34px;
`
