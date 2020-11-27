'use strict'

/*
|--------------------------------------------------------------------------
| TurmaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Turma = use('App/Models/Turma')

class TurmaSeeder {
  async run () {
    await Turma.createMany([
      {sigla: 'AA'},
      {sigla: 'AB'},
      {sigla: 'AC'},
      {sigla: 'BA'},
      {sigla: 'BB'},
    ])
  }
}

module.exports = TurmaSeeder
