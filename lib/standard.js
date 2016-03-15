'use strict'

const Joi = require('joi')

const Std = {
  Fields: {}
}

Std.Fields.offset = Joi.number()
    .default(0)
    .description('Offset a iniciar a leitura.')

Std.Fields.limit = Joi.number()
  .default(10)
  .description('Quantidade de registros a serem lidos por vez.')

module.exports = Std
