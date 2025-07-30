import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useEffect, useState } from 'react';
import dbLivros from '../context/database';


export default function CardLivrosConcluido(){
    const [livros, setLivros] = useState<any[]>([]);

    useEffect(() => {
    const fetchLivros = async () => {
      try {
        // Usamos withTransactionAsync para garantir que a operação seja atômica
        await dbLivros.withTransactionAsync(async () => {
          // Usamos db.getAllAsync para buscar múltiplas linhas
          const allLivros = await dbLivros.getAllAsync(
            'SELECT * FROM livros WHERE lido = 0;'
          );
          setLivros(allLivros); // allLivros já é um array de objetos
        });
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
        // Você pode adicionar um alerta ou outra forma de feedback para o usuário aqui
      }
    };

    fetchLivros();
  }, []); // O array de dependências vazio significa que ele roda uma vez ao montar o componente


    return(

        <View>
            <View>
                {livros.length > 0 ? (
                    livros.map((livro) => (
                        <Text key={livro.id}>{livro.titulo} {livro.autor} {livro.ean} {livro.nota}</Text>
                        ))
                    ) : (
                        <Text>Nenhum livro pendente encontrado.</Text>
                    )}
            </View>

            <View style={styles.container}>
                <Image
                    source={require('../assets/images/nacaoDopamina.jpeg')}
                    style= {styles.imagem}
                />
                <View style= {styles.SubView}>
                    <Text style= {styles.texto}>Nação Dopamina</Text>
                    <Text>Pscicologia</Text>
                    <Text>Nota: 9</Text>
                </View>
            </View>

        </View>
    )
}
 const styles = StyleSheet.create({
    container: {
        minHeight: 200,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
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