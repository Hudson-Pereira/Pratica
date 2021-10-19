const express = require('express')

const cursosRouter = require('./cursos')
const estudantesRouter = require('./estudantes')
//especificando valores para variaveis para as rotas


const router = express.Router()
// instanciando arquivo de rotas

router.get('/', (req,res) => {
    res.send('Deu certo com arquivo de rotas')
})

router.use('/cursos', cursosRouter)
router.use('/estudantes', estudantesRouter)
//redireciona para o arquivo de rota especificado quando digitado na url

module.exports = router
