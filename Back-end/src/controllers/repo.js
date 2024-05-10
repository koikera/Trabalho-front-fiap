const usuarios = require('../models/connection');

const login = async (req,res)=>{

    const body = req.body;
    const email = body.email;
    const senha = body.senha;

    let usuario = await usuarios.pegarUsuario(email, senha);
    if(usuario != null){
        console.log(usuario)
        return res.status(200).json({id: usuario.id, email: usuario.email});
    }

    return res.status(422).json({"message": "Usuario nao encontrado no banco de dados!"});   
};

const pegarTarefas =async (req,res)=>{
    try {
        const id = req.params["id"];
        let tarefas = await usuarios.pegarTarefas(id);
        return res.status(200).send(tarefas);

    } catch (error) {
        return res.status(500).json({"payload": error.message});   
    }

}

const pegarTarefasFiltradas =async (req,res)=>{
    try {
        const id = req.params["id"];
        let tarefas = await usuarios.pegarTarefas(id);
        return res.status(200).send(tarefas);

    } catch (error) {
        return res.status(500).json({"payload": error.message});   
    }

}

const criarTarefa = (req,res) =>{
    try {
        const body = req.body;
        const id = req.params["id"];
        const nome = body.nome;
        const dataConclusao = body.dataConclusao;
        usuarios.criarTarefa(id, nome, dataConclusao);

        return res.status(200).send("Tarefa criada com sucesso!");

    } catch (error) {
        return res.status(500).json({"payload": error.message});   
    }
}

const createTable =async (req,res)=>{
    try {
        usuarios.createTables();

        return res.status(200).send("Tabelas criadas com sucesso!");

    } catch (error) {
        return res.status(500).json({"payload": error.message});   
    }

}

const criarUsuario = (req,res) =>{
    try {
        const body = req.body;
        const email = body.email;
        const senha = body.senha;
        usuarios.criarUsuario(email, senha);

        return res.status(200).send("Usuario criado com sucesso!");

    } catch (error) {
        return res.status(500).json({"payload": error.message});   
    }
}

const alterarStatusTarefa = async (req,res) => {
    try {
        const body = req.body;
        const isChecked = body.isChecked;
        const id = body.id;

        console.log(id, isChecked)
        await usuarios.marcarConcluido(isChecked, id);

        return res.status(200).send("Tarefa alterada com sucesso!");

    } catch (error) {
        return res.status(500).json({"payload": error.message});   
    }
}

module.exports = {
    login,
    createTable,
    criarUsuario,
    pegarTarefas,
    criarTarefa,
    alterarStatusTarefa,
    pegarTarefasFiltradas
}