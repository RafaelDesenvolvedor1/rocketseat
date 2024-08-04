import React, { useState, useContext } from "react";
import { TaskContainer, TaskContainerChecked } from "./style";
import { StyleSheet, Text, Alert, Button, TouchableOpacity, View } from "react-native";

import { root } from "../../../palletColor";

import { Ionicons } from '@expo/vector-icons';

import { ListContext } from "../../contexts/listContext";

export function Task({ id, text, checked }) {
    const [checkbox, setCheckBox] = useState(checked)

    const { deleteTask, changeTaskChecked } = useContext(ListContext)

    function handleChecked() {
        setCheckBox(!checkbox)
        changeTaskChecked(id, !checkbox)
    }

    function handleTaskDelete() {
        Alert.alert('Atenção', 'Deseja mesmo excluir essa tarefa?', [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Continuar',
                onPress: () => deleteTask(id)
            }
        ])
    }

    if (checkbox) {
        return (

            <TaskContainer
                onPress={handleChecked}
                onLongPress={handleTaskDelete}

            >
                <View style={styles.containerButtons}>

                    <Ionicons name="checkmark-circle" size={26} color={root.purpleDark} />

                    <Text style={[styles.taskText, styles.taskTextChecked]}>{text}</Text>
                </View>



                <TouchableOpacity style={styles.btnDelete} onPress={handleTaskDelete}>
                    <Ionicons name="trash" size={24} color={root.gray300} />
                </TouchableOpacity>


            </TaskContainer>
        )
    } else {
        return (

            <TaskContainerChecked
                onPress={handleChecked}
                onLongPress={handleTaskDelete}


            >

                <View style={styles.containerButtons}>
                    <Ionicons name="radio-button-off-outline" size={26} color={root.blue} />

                    <Text style={styles.taskText}>{text}</Text>
                </View>


                <TouchableOpacity style={styles.btnDelete} onPress={handleTaskDelete}>
                    <Ionicons name="trash" size={24} color={root.gray300} />
                </TouchableOpacity>

            </TaskContainerChecked>
        )
    }

}

const styles = StyleSheet.create({
    taskText: { color: `${root.gray100}`, fontSize: 16, paddingRight: 16, marginHorizontal:10 },
    taskTextChecked: {
        textDecorationLine: 'line-through',
        color: `${root.gray300}`
    },
    btnDelete: {
        backgroundColor: `${root.gray500}`,
        padding: 8,
        borderRadius: 8,
        width:'100%'
    },
    containerButtons:{
        flexDirection:'row',
        alignItems:'center',
        width:'85%',
    }
})