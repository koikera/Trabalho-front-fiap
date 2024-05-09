const repo = require('./controllers/repo')
const express = require('express');
const router = express.Router();


router.post('/login', repo.login)

router.get('/tarefas/:id', repo.pegarTarefas)

router.post('/createTable/', repo.createTable)
router.post('/criarUsuario/', repo.criarUsuario)
router.post('/criarTarefa/:id', repo.criarTarefa)

router.put('/alterarStatusTarefa', repo.alterarStatusTarefa)


module.exports = router