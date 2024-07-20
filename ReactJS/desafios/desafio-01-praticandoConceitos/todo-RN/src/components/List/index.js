import react from "react";

import { root } from "../../../palletColor";

import { Header, ListContainer, RadioButton, Span } from './style'
import { FlatList, StyleSheet, Text } from "react-native";
import { EmptyList } from "../EmptyList";


export function List() {
    return (
        <ListContainer>
            <Header>
                <RadioButton>
                    <Text style={[styles.strong, {color:`${root.blue}`}]}>Tarefas Criadas</Text>
                    <Span>
                        <Text style={styles.spanTex}>0</Text>
                    </Span>
                </RadioButton>
                <RadioButton>
                    <Text style={[styles.strong, {color:`${root.purple}`}]}>Concluidas</Text>
                    <Span>
                        <Text style={styles.spanTex}>0 de 0</Text>
                    </Span>
                </RadioButton>
            </Header>

            <FlatList
                ListEmptyComponent={()=> <EmptyList/>}
            />

        </ListContainer>
    )
}

const styles = StyleSheet.create({
    strong:{
        fontSize:18,
        fontWeight:'bold'
    },

    spanTex:{
        color:`${root.gray200}`,
        fontWeight:'bold',
        fontSize:16
    }
})