const connection = require('./connection')
// Convertendo os dados para JSON

const getUserID = (username) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT id FROM users WHERE username = ?", username, (error, userRows) => {
            if (error) {
                console.error('Erro ao executar a consulta:', error);
                reject(error); // Rejeita a Promise em caso de erro
            } else {
                if(userRows.length != 0){
                    let ID = userRows[0].id; // Acessa o ID da primeira linha retornada
                    resolve(ID); // Resolve a Promise com o ID
                } else {
                    resolve(undefined);
                }
            }
        });
    });
}

const create_user = async (repositorios, username) => {
    return true
}

module.exports = {create_user, getUserID};