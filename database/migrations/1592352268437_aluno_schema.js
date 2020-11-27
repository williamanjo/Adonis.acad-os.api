'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunoSchema extends Schema {
  up () {
    this.create('alunos', (table) => {
      table.increments()
      table.string('cpf',11).unique().notNullable()
      table.string('nome',45).notNullable()
      table.string('sexo',1).notNullable()
      table.string('email',50).unique().notNullable()
      table.string('senha',12).notNullable()
      table.date('data_nascimento').notNullable()
      table.string('turno',10).notNullable()
      table.string('curso',20).notNullable()

      table.integer('turma_id').unsigned().references('id').inTable('turmas').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('alunos')
  }
}

module.exports = AlunoSchema
