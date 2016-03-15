'use strict'

const Joi = require('joi')

function Std () {
  this.Fields = Fields
}

function Fields () {
  this.offset = Joi.number()
    .default(0)
    .description('Offset a iniciar a leitura.')

  this.limit = Joi.number()
    .default(10)
    .description('Quantidade de registros a serem lidos por vez.')
}

module.exports = Std
