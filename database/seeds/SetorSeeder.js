'use strict'

/*
|--------------------------------------------------------------------------
| SetorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Setor = use('App/Models/Setor')

class SetorSeeder {
  async run () {
    await Setor.createMany([
      {sigla: 'LAB-01'},
      {sigla: 'LAB-02'},
      {sigla: 'LAB-03'},
      {sigla: 'LAB-04'},
      {sigla: 'LAB-05'},
    ])
  }
}

module.exports = SetorSeeder
