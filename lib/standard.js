'use strict'

const Joi = require('joi')

const Std = {
  Fields: {}
}

Std.Fields.offset = Joi
  .number()
  .integer()
  .default(0)
  .description('Offset inicial da leitura.')

Std.Fields.limit = Joi
  .number()
  .integer()
  .default(10)
  .description('Quantidade de registros a serem lidos por vez.')

module.exports = Std
