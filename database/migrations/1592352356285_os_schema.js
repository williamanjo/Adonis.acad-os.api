'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OsSchema extends Schema {
  up () {
    this.create('os', (table) => {
      table.increments()
      table.datetime('data_hora_abertura').notNullable()
      table.datetime('data_hora_fechamento')
      table.text('problema_relatado')
      table.text('solucao')
      table.string('situacao',20).notNullable()

      table.integer('equipamento_id').unsigned().references('id').inTable('equipamentos').notNullable()

      table.integer('aluno_id').unsigned().references('id').inTable('alunos').notNullable()

      table.integer('suporte_id').unsigned().references('id').inTable('suportes').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('os')
  }
}

module.exports = OsSchema
