import styled from "styled-components";
import { root } from "./palletColor";

export const Application= styled.View`
    flex: 1;
    background-color: ${root.gray600};
    width: 100%;
    align-items: center;
    padding: 0;
    margin: 0;
`

export const Header= styled.View`
    background-color: ${root.gray700};
    flex: 1;
    justify-content: center;
    align-items: center;

    width: 100%;
`



export const Body= styled.View`
    flex:3;
    align-items: center;
    justify-content: center;
    width: 95%;

    /* background-color: green; */

`
export const Main= styled.View`
    width: 100%;
    /* background-color: red; */

`

