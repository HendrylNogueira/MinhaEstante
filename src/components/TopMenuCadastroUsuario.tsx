import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function TopMenuCadastroUsuario() {
    return(
        <View style={styles.menuContainer}>
            <TouchableOpacity style={[styles.button]}>
                <Text style={[styles.buttonText]}> Usuários</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  menuContainer: {
    alignItems: 'center',
    padding: 4,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 4,
    minWidth: 50,
    maxWidth: 150,
    borderWidth: 1,
    borderColor: '#6e6b6b',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    color: '#555',
    minWidth: 70,
    textAlign: 'center'

  },
  activeButton: {
    borderWidth: 2,
    borderColor: '#000000', // ou outra cor que destaque
  }
});