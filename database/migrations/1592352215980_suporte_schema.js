'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SuporteSchema extends Schema {
  up () {
    this.create('suportes', (table) => {
      table.increments()
      table.string('cpf',11).notNullable()
      table.string('nome',45).notNullable()
      table.string('sexo',1).notNullable()
      table.string('email',50).unique().notNullable()
      table.string('senha',12).notNullable()
      table.date('data_nascimento').notNullable()
      table.date('data_admissao').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('suportes')
  }
}

module.exports = SuporteSchema
