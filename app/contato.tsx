import { View, Text, TextInput, StyleSheet } from "react-native";
import LinkLinkedIn from "@/src/components/LinkedIn";
import TopMenu from "@/src/components/TopMenu";
import LinkGitHub from "@/src/components/GitHub";
import React from "react";

export default function Contato(){
    const nome = 'Hendryl Nogueira de Quadros';
    const linkedin = 'https://www.linkedin.com';
    const github = 'https://github.com/HendrylNogueira';
    const email = 'hendrylnogueira2508@gmail.com';

    return (
        <View>
            <TopMenu></TopMenu>
            <View style={style.container}>
                <View style={style.subContainer}>
                    <Text style={style.texto}>Desenvolvedor</Text>
                    <TextInput style={style.input}
                    value={nome}
                    editable={false}
                    />
                </View>

                <View style={style.subContainer}>
                    <Text style={style.texto}>Email</Text>
                    <TextInput style={style.input}
                    value={email}
                    editable={false}
                    />
                </View>

                <View style={style.images}>
                    <LinkLinkedIn></LinkLinkedIn>
                    <View style={{width: 20}}/>
                    <LinkGitHub></LinkGitHub>
                </View>
            </View>
        </View>
    )

}

const style= StyleSheet.create({
    container:{
        minHeight: 400,
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 2,
        margin: 16,
        elevation: 5,
    },
    subContainer: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
    },
    images: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
        maxWidth: 300,
        marginTop: 10,
        color: '#000000',
        textAlign: 'center'
        },

    texto: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "bold"
    }

})