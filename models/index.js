const sequelize = require('../config/sequelize')
//importando arquivos de configuracao do BD
const Sequelize = require('sequelize')
//importando arquivo do sequelize
const Curso = require('./curso')
//importando arquivo do app
const curso = Curso(sequelize, Sequelize.DataTypes)
//criacao do modulo
const db = {
    curso,
    Sequelize
}

module.exports = db
//exportar
