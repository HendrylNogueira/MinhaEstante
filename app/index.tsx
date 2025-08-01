import { View, FlatList, Dimensions, Text, Image, ScrollView } from 'react-native';
import TopMenu from '../src/components/TopMenu';
import TituloLivroPendente from '@/src/components/TituloLivroPendente';
import TituloLivroConcluido from '@/src/components/TituloLivroConcluido';
import CardLivrosPendentes from '@/src/components/CardLivrosPendentes';
import CardLivrosConcluido from '@/src/components/CardLivrosConcluidos';
import React from 'react';
import LivrosTeste from '../src/components/CardLivro';
import db from '../src/context/database';

const livros = [
  { id: 1, titulo: 'Livro 1', capa: 'https://www.google.com/imgres?q=o%20ceticismo%20da%20f%C3%A9&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51S2Kxqi5VS._UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.br%2FCeticismo-f%25C3%25A9-D%25C3%25BAvida-Certeza-Distor%25C3%25A7%25C3%25A3o%2Fdp%2F8582162073&docid=KL7yJzSZ-4EUgM&tbnid=G_bx4F6LMBGFjM&vet=12ahUKEwiZuc6ftuiOAxWcpZUCHR0hAyIQM3oECBoQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwiZuc6ftuiOAxWcpZUCHR0hAyIQM3oECBoQAA' },
  { id: 2, titulo: 'Livro 2', capa: 'https://...' },
  // etc
];

const LarguraTela = Dimensions.get('window').width;

function CardLivro({ livro }: { livro: { id: number, titulo: string, capa: string } }) {
  return (
    <View style={{ width: 400, height: 400, alignItems: 'center', padding: 20,  }}>
      <Image source={ require('../src/assets/images/CleanArch.jpg') } style={{ width: 150, height: 200 }} />
      <Text style={{ marginTop: 10 }}>{livro.titulo} {livro.id}</Text>
    </View>
  );
}


export default function Home() {
  

  return (
    <ScrollView>
      <View>
        <TopMenu></TopMenu>
        <TituloLivroPendente></TituloLivroPendente>
        <CardLivrosPendentes></CardLivrosPendentes>
        <TituloLivroConcluido></TituloLivroConcluido>
        <CardLivrosConcluido></CardLivrosConcluido>

        <LivrosTeste></LivrosTeste>




        {/* comentário entre componentes 
        <FlatList
        data={livros}
        renderItem={({ item }) => <CardLivro livro={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        /> */}
      </View>
    </ScrollView>
    
  );
}