import * as SQLite from 'expo-sqlite';

const dbLivros = SQLite.openDatabaseSync('livros.db');

export default dbLivros;