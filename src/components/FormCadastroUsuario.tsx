import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function FormCadastrousuario(){
    const pressionar = () => {
        console.log('Usuário cadastrado');  
    };

    return(
        <View style={style.container}>
            <TextInput style={style.input} placeholder=" * CPF"></TextInput>
            <TextInput style={style.input} placeholder=" * Nome"></TextInput>
            <TextInput style={style.input} placeholder=" * Email"></TextInput>
            <TextInput style={style.input} placeholder=" * Telefone"></TextInput>
            <TextInput style={style.input} placeholder=" * Idade"></TextInput>

            <TouchableOpacity onPress={pressionar} style={style.botao}>
                <Text style={style.textoBotao}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
    alignItems: 'center',
    padding: 4,
        },
    input: {
        backgroundColor: '#bdbbbb16',
        borderColor: '#8f8d8dfa',
        borderWidth: 1,
        width: 310,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 20
        },
    botao: {
        backgroundColor: '#72c24d',
        borderRadius: 10,
        width: 100,
        height: 38,
        justifyContent: 'center',
        marginTop: 20
    },
    textoBotao: {
        textAlign: 'center',
        fontSize: 14
    }
})