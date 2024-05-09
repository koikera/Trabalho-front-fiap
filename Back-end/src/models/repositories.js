const connection = require('./connection')
// Convertendo os dados para JSON

const getReposById_Name = (repositorios_name, ID) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM repositories WHERE user_id = ? and repository_name = ?", [ID, repositorios_name], function(error, repositoriesRows) {
            if (error) {
                console.error('Erro ao executar a consulta:', error);
                reject(error);
            };

            resolve(repositoriesRows);
        });
    })
    
}

const getReposByID = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM repositories WHERE user_id = ?", ID, function(error, repositoriesRows) {
            if (error) {
                console.error('Erro ao executar a consulta:', error);
                reject(error);
            };

            resolve(repositoriesRows);
        });
    })
    
}

const createRepo = (repositorios_name, ID) => {
    connection.query("INSERT INTO repositories (user_id ,repository_name) VALUES (?,?);", [ID ,repositorios_name], function(error, result) {
        if (error) {
            console.error('Erro ao executar a consulta:', error);
            throw error;
        };

        return result
    });
}

module.exports = {
    getReposById_Name,
    getReposByID,
    createRepo
}