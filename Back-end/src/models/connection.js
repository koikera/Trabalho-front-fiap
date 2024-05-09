const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost', // ou '127.0.0.1' se o Docker Desktop estiver em execução
    port: '3307', // Porta mapeada do contêiner para a máquina host
    user: 'root', // Nome de usuário do MySQL
    password: 'root', // Senha do MySQL
    database: 'github', // Nome do banco de dados
    timeout: 1000
  });

module.exports = connection;