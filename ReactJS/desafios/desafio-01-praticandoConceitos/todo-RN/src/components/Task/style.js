import styled from "styled-components";

import { root } from "../../../palletColor";


export const TaskContainer = styled.TouchableOpacity`
    /* justify-content: space-evenly; */
    width: 100%;
    background-color: ${root.gray500};
    border:1px solid ${root.gray400};
    padding: 16px;
    border-radius: 8px;
    flex-direction: row;
    gap:9px;
    align-items: center;
`
export const TaskContainerChecked = styled.TouchableOpacity`
    /* justify-content: space-evenly; */
    width: 100%;
    background-color: ${root.gray500};
    border:1px solid ${root.gray500};
    padding: 16px;
    border-radius: 8px;
    flex-direction: row;
    gap:9px;
    align-items: center;
`

// export const CheckBox = styled.View`
//     width: 10px;
//     height: 10px;
//     border-radius: 32px;
//     border: 2px solid ${root.blue};
//     padding: 8px;
// `

/* Checked  */


