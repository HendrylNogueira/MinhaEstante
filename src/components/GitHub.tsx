import React from "react";
import { Image, View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";

export default function LinkGitHub(){
    const abrirLink = () => { Linking.openURL('https://github.com/HendrylNogueira')};

    return (
        <View style={style.container}>
            
            <TouchableOpacity onPress={abrirLink}>
                <Image
                source={require('../assets/images/GitHub.jpeg')}
                style={style.imagem}
                />
            </TouchableOpacity>
            <Text style= {{textAlign: 'center'}}>GitHub</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingTop: 10,
        paddingBlockEnd: 20,
    },

    imagem: {
        width: 60, 
        height: 60, 
        borderRadius: 15,
    }
})