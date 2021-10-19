const express = require('express')
const router = express.Router()

router.get("/", (req,res) => {
    res.send('Funcionando com arquivo de rotas.')
})

module.exports = router