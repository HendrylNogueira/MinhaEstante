import React from "react";
import { FlatList, View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { useEffect, useState } from 'react';
import dbLivros from '../context/database';

const LarguraTela = Dimensions.get('window').width;


type Livro = {
    id: number;
    ean: string;
    titulo: string;
    foto: string;
    autor: string;
    categoria: string;
    nota: number;
};

type CardLivroProps = {
    livro: Livro;
};

function CardLivro({ livro }: CardLivroProps) {
  return (
    <View style={styles.container}>

        <Image 
            source={{ uri: livro.foto }} 
            style={styles.imagem} 
        />

        <View style={styles.SubView}>
            <Text style={{ marginTop: 10, fontWeight: 'bold' }}>{livro.titulo}</Text>
            <Text>{livro.autor}</Text>
            <Text>{livro.categoria}</Text>
            <Text>Nota: {livro.nota}</Text>
        </View>
    </View>
  );
}



export default function LivrosTeste(){
    const [livros, setLivros] = useState<Livro[]>([]);

    useEffect(() => {
    const fetchLivros = async () => {
      try {
        // Usamos withTransactionAsync para garantir que a operação seja atômica

          // Usamos db.getAllAsync para buscar múltiplas linhas
          const allLivros = await dbLivros.getAllAsync(
            'SELECT * FROM livros WHERE lido = 0;'
          );
          setLivros(allLivros as Livro[]); // allLivros já é um array de objetos

      } catch (error) {
        console.error("Erro ao buscar livros:", error);
        // Você pode adicionar um alerta ou outra forma de feedback para o usuário aqui
      }
    };

    fetchLivros();
  }, []); // O array de dependências vazio significa que ele roda uma vez ao montar o componente


    return(
        <View style={{ flex: 1, padding: 20 }}>
            <FlatList
                  data={livros}
                  renderItem={({ item }) => <CardLivro livro={item} />}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  style={{ flex: 1 }}
                />
        </View>
    )
}
 const styles = StyleSheet.create({
    container: {
        minHeight: 200,
        width: 353,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        padding: 2,
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