import react from "react";
import { Container, Hr } from "./style";
import { StyleSheet, Text } from "react-native";
import { root } from "../../../palletColor";

import Clipboard from '../../assets/Clipboard.svg'

export function EmptyList(){
    return(
        <Container>
            {/* <Hr/> */}
            <Clipboard/>
            <Text style={styles.strong}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.p}>Crie tarefas e organize seus itens a fazer</Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    strong: {
        fontWeight:'bold',
        marginTop:16,
        color:`${root.gray300}`,
        fontSize:16
    },
    p:{
        color:`${root.gray300}`,
        fontSize:16
    }
})