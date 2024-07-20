import react from "react";
import { Formulario, Input, SubmitButton, } from "./style";
import { Text } from "react-native";

import { root } from "../../../palletColor";

import { Feather } from '@expo/vector-icons';


export function Form(){
    return(
        <Formulario>
            <Input 
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor={root.gray300}
            />
            <SubmitButton>
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