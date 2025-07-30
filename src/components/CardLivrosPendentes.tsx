import { View, Text, StyleSheet, Image } from "react-native";

export default function CardLivrosPendentes(){
    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/images/CleanArch.jpg')}
                style= {styles.imagem}
            />

            <View style= {styles.SubView}>
                <Text style= {styles.texto}>Arquitetura Limpa</Text>
                <Text>Tecnologia</Text>
                <Text>Nota: __</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 200,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 15,
        padding: 2,
        margin: 16,
        elevation: 5,

    },
    SubView: {
        backgroundColor: '#f1e4e40',
        justifyContent: 'center',
        minWidth: 170,
        maxWidth: 180,
        margin: 10,
    },
    texto: {
        fontSize: 18,
    },
    imagem: {
        width: 150, 
        height: 200, 
        borderRadius: 25,
        borderWidth: 1,
        margin: 15,
    }
})