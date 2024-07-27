import React, { useContext, useState, useEffect } from "react";

import { root } from "../../../palletColor";

import { Header, ListContainer, RadioButton, Span } from './style'
import { FlatList, StyleSheet, Text, View } from "react-native";
import { EmptyList } from "../EmptyList";
import { Task } from "../Task";

import { ListContext } from "../../contexts/listContext";


export function List() {
    const { taskList } = useContext(ListContext)

    // const [lista, setLista]=useState(taskList)


    // useEffect(()=>{
    //     setLista([...taskList])
    // },[taskList])

    const lista=[]

  


    
    return (
        <ListContainer>
            <Header>
                <RadioButton>
                    <Text style={[styles.strong, { color: `${root.blue}` }]}>Tarefas Criadas</Text>
                    <Span>
                        <Text style={styles.spanTex}>
                            {taskList?.length}
                        </Text>
                    </Span>
                </RadioButton>
                <RadioButton>
                    <Text style={[styles.strong, { color: `${root.purple}` }]}>Concluidas</Text>
                    <Span>
                        <Text style={styles.spanTex}>0 de 0</Text>
                    </Span>
                </RadioButton>
            </Header>

            {/* <View style={styles.teste}> */}
                <FlatList
                    data={taskList}
                    renderItem={({ item }) => <Task id={item.id} text={item.text} checked={item.checked} />}
                    keyExtractor={item => String(item.id)}
                    ListEmptyComponent={() => <EmptyList />}
                    ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                    ListFooterComponent={<View style={{height: 20}}/>}
                    
                />
            {/* </View> */}



        </ListContainer>
    )
}

const styles = StyleSheet.create({
    strong: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    spanTex: {
        color: `${root.gray200}`,
        fontWeight: 'bold',
        fontSize: 16
    },


})