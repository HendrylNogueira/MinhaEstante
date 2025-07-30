import { View } from 'react-native';
import TopMenu from '../src/components/TopMenu';
import TituloLivroPendente from '@/src/components/TituloLivroPendente';
import TituloLivroConcluido from '@/src/components/TituloLivroConcluido';
import CardLivrosPendentes from '@/src/components/CardLivrosPendentes';
import CardLivrosConcluido from '@/src/components/CardLivrosConcluidos';
import React from 'react';
import { useEffect, useState } from 'react';
import db from '../src/context/database';


export default function Home() {
  

  return (
    <View>
      <TopMenu></TopMenu>
      <TituloLivroPendente></TituloLivroPendente>
      <CardLivrosPendentes></CardLivrosPendentes>
      <TituloLivroConcluido></TituloLivroConcluido>
      <CardLivrosConcluido></CardLivrosConcluido>
    </View>
    
  );
}