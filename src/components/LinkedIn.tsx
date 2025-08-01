import React from "react";
import { Image, View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";

export default function LinkLinkedIn(){
    const abrirLink = () => { Linking.openURL('https://www.linkedin.com/in/hendryl-nogueira-0569581b1/')};

    return (
        <View style={style.container}>
            
            <TouchableOpacity onPress={abrirLink}>
                <Image
                source={require('../assets/images/LinkedIn.jpg')}
                style={style.imagem}
                />
            </TouchableOpacity>
            <Text style= {{textAlign: 'center'}}>LinkedIn</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },

    imagem: {
        width: 60, 
        height: 60, 
        borderRadius: 15,
    }
})