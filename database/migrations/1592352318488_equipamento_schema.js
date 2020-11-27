'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EquipamentoSchema extends Schema {
  up () {
    this.create('equipamentos', (table) => {
      table.increments()
      table.string('tipo',50).notNullable()

      table.integer('setor_id').unsigned().references('id').inTable('setors').notNullable()

      table.integer('marca_id').unsigned().references('id').inTable('marcas').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('equipamentos')
  }
}

module.exports = EquipamentoSchema
