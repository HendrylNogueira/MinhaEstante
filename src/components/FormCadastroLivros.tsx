import { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import dbLivros from '../context/database';
import * as ImagePicker from 'expo-image-picker';

import * as SQLite from 'expo-sqlite';
import React from 'react';

export default function FormCadastrousuario(){
    const [ean, setEan] = useState('');
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [categoria, setCategoria] = useState('');
    const [nota, setNota] = useState('');
    const [foto, setFoto] = useState('');

    const handleCadastro = () => {
        // Aqui você pode validar e salvar no banco

        if (titulo.trim() === '' || autor.trim() === '') {
            alert('Preencha todos os campos!');
            return;
        }
        else{
            insertLivro();    
        };
    }

    const insertLivro = async () => {
    try {
        await dbLivros.withTransactionAsync(async () => {
            const result = await dbLivros.runAsync(
                'INSERT INTO livros (ean, titulo, autor, categoria, nota, foto, lido) VALUES (?, ?, ?, ?, ?, ?, ?);',
                [ean, titulo, autor, categoria, nota, foto, 0] // 0 = ainda não lido
            );
            console.log("Livro inserido!", result);
            console.log([ean, titulo, autor, categoria, nota, foto, 0])
            alert('Livro cadastrado com sucesso!');
            setEan('');
            setTitulo('');
            setAutor('');
            setCategoria('');
            setNota('');
            setFoto('');
        });
    } catch (error) {
        console.error('Erro ao inserir livro:', error);
        alert('Erro ao cadastrar livro.');
    }
};


const abrirCamera = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permissão negada', 'Você precisa permitir o uso da câmera.');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({ quality: 0.5, base64: false });
        if (!result.canceled) {
            setFoto(result.assets[0].uri);
        }
    };

    const escolherDaGaleria = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permissão negada', 'Você precisa permitir acesso à galeria.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({ quality: 0.5, base64: false });
        if (!result.canceled) {
            setFoto(result.assets[0].uri);
        }
    };


    useEffect(() => {
    const setupDatabase = async () => {
        try {
            await dbLivros.withTransactionAsync(async () => {
                await dbLivros.execAsync(
                    `CREATE TABLE IF NOT EXISTS livros (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        ean TEXT,
                        titulo TEXT,
                        autor TEXT,
                        categoria TEXT,
                        nota INTEGER,
                        foto TEXT,
                        lido INTEGER
                    );`
                );
            });
            console.log('Tabela livros criada ou já existente.');
        } catch (error) {
            console.error('Erro ao configurar o banco de dados:', error);
        }
    };

    setupDatabase();
}, []);



    return(
        <View style={style.container}>
            <TextInput 
                style={style.input} 
                placeholder="  EAN" 
                value={ean} 
                onChangeText={setEan}
            />

            <TextInput 
                style={style.input} 
                placeholder=" * Título" 
                value={titulo} 
                onChangeText={setTitulo}
            />

            <TextInput 
                style={style.input} 
                placeholder=" * Autor" 
                value={autor} 
                onChangeText={setAutor}
            />

            <TextInput 
                style={style.input} 
                placeholder="  Categoria"
                value={categoria}
                onChangeText={setCategoria}
            />

            <TextInput 
                style={style.input} 
                placeholder="  Nota"
                value={nota}
                onChangeText={setNota}
            />

            <TextInput 
                style={style.input} 
                placeholder="  Foto de Capa (.jpg)"
                value={foto}
                onChangeText={setFoto}
            />

            <View style={style.botoesFotoContainer}>
                <TouchableOpacity style={style.botaoSecundario} onPress={abrirCamera}>
                    <Text style={style.textoBotao}>📸 Tirar Foto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.botaoSecundario} onPress={escolherDaGaleria}>
                    <Text style={style.textoBotao}>🖼️ Escolher da Galeria</Text>
                </TouchableOpacity>
            </View>

            {foto !== '' && (
                <Image source={{ uri: foto }} style={{ width: 100, height: 140, marginTop: 10 }} />
            )}

            <TouchableOpacity onPress={handleCadastro} style={style.botao} >
                <Text style={style.textoBotao}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
    alignItems: 'center',
    padding: 4,
        },
    input: {
        backgroundColor: '#bdbbbb16',
        borderColor: '#8f8d8dfa',
        borderWidth: 1,
        width: 310,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 20
        },
    botao: {
        backgroundColor: '#72c24d',
        borderRadius: 10,
        width: 100,
        height: 38,
        justifyContent: 'center',
        marginTop: 20
    },
    textoBotao: {
        textAlign: 'center',
        fontSize: 14
    },
        botaoSecundario: {
        backgroundColor: '#d4d4d4',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginTop: 10,
        marginHorizontal: 5,
    },
    botoesFotoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
    },
})
