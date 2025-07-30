import { View, Text, ScrollView, StyleSheet } from "react-native";
import TopMenu from "@/src/components/TopMenu";
import TopMenuCadastroUsuario from "@/src/components/TopMenuCadastroUsuario";
import TopMenuCadastroLivro from "@/src/components/TopMenuCadastroLivro";
import FormCadastrousuario from "@/src/components/FormCadastroUsuario";
import FormCadastroLivro from "@/src/components/FormCadastroLivros";
import React from "react";

export default function CadastroUsuarios(){
    return (
        <View >
            <ScrollView >
                <TopMenu></TopMenu>

                <View style={style.container}>
                    <TopMenuCadastroUsuario></TopMenuCadastroUsuario>
                    <FormCadastrousuario></FormCadastrousuario>
                </View>

                <View style={{height: 20}}/>

                <View style={style.container}>
                    <TopMenuCadastroLivro></TopMenuCadastroLivro>
                    <FormCadastroLivro></FormCadastroLivro>
                </View>

                <View style={{height: 100}}/>

            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginLeft: 25, 
        marginRight: 25, 
        paddingBlockEnd: 20, 
        paddingBlockStart: 15, 
        borderColor: 'black', 
        minHeight: 400,
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 2,
        margin: 16,
        elevation: 5,
    }
})