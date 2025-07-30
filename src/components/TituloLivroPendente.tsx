import { View, Text, StyleSheet } from "react-native";

export default function TituloLivroPendente(){
    return (
    <View style={styles.View}>
        <Text style={styles.Text}> Livros para ler</Text>

    </View>
    )
}

const styles = StyleSheet.create({
    View: {
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