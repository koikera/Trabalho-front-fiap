const sqlite3 = require('sqlite3').verbose();

// Abra o banco de dados (ele será criado se não existir)
const db = new sqlite3.Database('../../banco.db');

const createTables = () => {
  // Execute as migrações em série
  db.serialize(() => {
      db.run("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, senha TEXT)");
      db.run("CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, idUsuario INT , nome TEXT, dataConclusao TEXT, ischecked BOOL)");
  });
};

const criarUsuario = (login, senha) => {
  // Execute o INSERT
  console.log(login, senha)
  db.serialize(() => {
    const stmt = db.prepare("INSERT INTO usuarios (email, senha) VALUES (?, ?)");
    stmt.run(login, senha, function(err) {
        if (err) {
            console.error("Erro ao inserir usuário:", err.message);
        } else {
            console.log("Usuário inserido com sucesso. ID:", this.lastID);
        }
        // Finalize o statement
        stmt.finalize();
    });
});
}

const criarTarefa = (idUsuario, nome, dataConclusao) => {
  console.log(idUsuario, nome, dataConclusao)
  db.serialize(() => {
    const stmt = db.prepare("INSERT INTO tarefas (idUsuario, nome, dataConclusao, ischecked) VALUES (?, ?, ?, false)");
    stmt.run(idUsuario, nome, dataConclusao, function(err) {
        if (err) {
            console.error("Erro ao inserir usuário:", err.message);
        } else {
            console.log("Usuário inserido com sucesso. ID:", this.lastID);
        }
        // Finalize o statement
        stmt.finalize();
    });
});
}


const pegarUsuario = (login, senha) => {
  return new Promise((resolve, reject) => {

      // Execute o SELECT para pegar um único usuário
      db.serialize(() => {
          db.get("SELECT * FROM usuarios WHERE email = ? and senha = ?", [login, senha], (err, row) => {
              if (err) {
                  console.error(err.message);
                  // Rejeitar a Promessa em caso de erro
                  reject(err);
                  return;
              }
              // Resolver a Promessa com o resultado se encontrado
              resolve(row);
          });
      });
  });
};

const pegarTarefas = (id) => {
  return new Promise((resolve, reject) => {
      console.log(id)
      // Execute o SELECT para pegar as tarefas do usuário
      db.serialize(() => {
        db.all("SELECT * FROM tarefas WHERE idUsuario = ? ", [id], (err, rows) => {
            if (err) {
                console.error(err.message);
                // Rejeitar a Promessa em caso de erro
                reject(err);
                return;
            }
            // Resolver a Promessa com o resultado se encontrado
            resolve(rows);
        });
    });
  });
};

const marcarConcluido = (novoStatus, id) => {
  return new Promise((resolve, reject) => {

    // Execute o UPDATE para atualizar o campo isChecked
    db.run("UPDATE tarefas SET isChecked = ? WHERE id = ?", [novoStatus, id], function(err) {
        if (err) {
            console.error(err.message);
            // Rejeitar a Promessa em caso de erro
            reject(err);
            return;
        }
        // Verificar se alguma linha foi afetada pela atualização
        if (this.changes > 0) {
            // Resolver a Promessa com sucesso
            resolve("Tarefa atualizada com sucesso.");
        } else {
            // Se nenhum registro foi atualizado, significa que o idTarefa não foi encontrado
            reject(new Error("Nenhuma tarefa encontrada com o ID fornecido."));
        }
    });
});
}


module.exports = {
  pegarUsuario,
  createTables,
  criarUsuario,
  pegarTarefas,
  criarTarefa,
  marcarConcluido
}