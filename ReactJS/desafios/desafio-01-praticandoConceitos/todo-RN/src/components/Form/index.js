import React, {useState, useContext} from "react";
import { Formulario, Input, SubmitButton, } from "./style";
import { Text } from "react-native";

import { root } from "../../../palletColor";

import { Feather } from '@expo/vector-icons';

import { ListContext } from "../../contexts/listContext";


export function Form(){
    const [inputText, setInputText]=useState('')

    const {addTask}= useContext(ListContext)

    function handleAddTask(){
        if(inputText.trim().length === 0){
            return
        }
       addTask(inputText)
       setInputText('')
    }
    return(
        <Formulario>
            <Input 
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor={root.gray300}
                value={inputText}
                onChangeText={(text)=>setInputText(text)}
            />
            <SubmitButton onPress={handleAddTask}>
                {/* <Text style={{
                    fontWeight:'bold',
                    fontSize:20,
                    color:`${root.gray100}`
                }}>
                    Criar
                </Text> */}
                <Feather name="plus-circle" size={30} color={root.gray100} />
            </SubmitButton>
        </Formulario>
    )
}