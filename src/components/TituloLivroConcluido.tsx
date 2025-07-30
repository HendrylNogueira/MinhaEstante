import { View, Text, StyleSheet } from "react-native";

export default function TituloLivroConcluido(){
    return (
    <View style={styles.container}>
        <Text style={styles.Text}> Livros já lidos</Text>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff0',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 4,
        marginTop: 16,
    },
    Text: {
        fontSize: 20
    }
})