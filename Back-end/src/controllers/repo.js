const usuarios = require('../models/usuarios');
const requisicao = require('./requisicao');
const repositories = require('../models/repositories');

const post =async (req,res)=>{

    const body = req.body;
    const username = body.username;
    const repositoriouser =await requisicao.repositoriesbyuser(username);
    if(repositoriouser.message == 'Request failed with status code 404'){
        return res.status(422).json ({"payload":{ "github_username":username },"message": "Usuário não encontrado no github"}); 
    }
    usuarios.getUserID(username).then(
        ID => {
            if(ID != undefined){
                repositoriouser.forEach(repo => {
                    if(ID != undefined){
                        repositories.getReposById_Name(repo.name, ID).then(repositoriesbyuserDB => {
                            if(repositoriesbyuserDB[0] == undefined){
                                repositories.createRepo(repo.name, ID);
                            }
                        }).catch(error => {
                            return res.status(500).json(
                                {"payload":{ "github_username": req.body.username },"message": error}
                            )
                        });
                    } else {
                        return res.status(422).json ({"payload":{ "github_username":username },"message": "Usuario nao encontrado no banco de dados!"});   
                    }
                });
            }

            return res.status(422).json({"payload":{ "github_username": "" },"message": "Usuario nao encontrado no banco de dados!"});   

        }
    ).catch(error => {
        return res.status(500).json(
            {"payload":{ "github_username": req.body.username },"message": error}
        )
    });
    

    return res.status(201).json ({"payload":{ "github_username":username},"message": "request created"});   
};

const get =async (req,res)=>{
    const username = req.params['username'];
    const repositoriouser =await requisicao.repositoriesbyuser(username);
    if(repositoriouser.message == 'Request failed with status code 404'){
        return res.status(422).json ({"payload":{ "github_username":username },"message": "Usuário não encontrado no github"}); 
    }
    usuarios.getUserID(username).then(
        ID => {
            if(ID != undefined){
                repositories.getReposByID(ID).then(
                    reposByUserId => {
                        let resultado = [];

                        reposByUserId.forEach(repo => {
                            const repoGit = repositoriouser.find(i => i.name == repo.repository_name)
                            if(repoGit != undefined){
                                resultado.push(repoGit);
                            }
                        })

                        return res.status(200).json({repos: resultado});

                    }
                ).catch(error => {
                    return res.status(500).json(
                        {"payload":{ "github_username": req.body.username },"message": error}
                    )
                })
            } else {
                return res.status(422).json ({"payload":{ "github_username":username },"message": "Usuario nao encontrado no banco de dados!"});   
            }
        }
    ).catch(error => {
        return res.status(500).json(
            {"payload":{ "github_username": req.body.username },"message": error}
        )
    });
}

module.exports = {
    post,
    get
}