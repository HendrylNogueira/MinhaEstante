import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter, usePathname } from 'expo-router';
import React from "react";

export default function TopMenu() {
    const router = useRouter();
    const pathname = usePathname();
    
    return(
        <View style={styles.menuContainer}>
            
            <TouchableOpacity 
                style={[styles.button, 
                    pathname === '/' && styles.activeButton,
                ]}
                onPress={() => router.replace('/')}>
                <Text style={[styles.buttonText]}> Home</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.button, 
                    pathname === '/cadastro' && styles.activeButton
                    
                ]}
                onPress={() => router.replace('/cadastro')}>
                <Text style={styles.buttonText}>Cadastro</Text>
            </TouchableOpacity>


            <TouchableOpacity 
            style={[styles.button, 
                    pathname === '/contato' && styles.activeButton,
                ]}
            onPress={() => router.replace('/contato')}>
                <Text style={styles.buttonText}>Contato</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 16,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 4,
    minWidth: 50,
    justifyContent: 'center',
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