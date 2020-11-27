'use strict'

/*
|--------------------------------------------------------------------------
| AlunoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Aluno = use('App/Models/Aluno')

class AlunoSeeder {
  async run () {
    await Aluno.createMany([
      {cpf: "12345678915",
      nome: "jao lucas",
      sexo: "M",
      email: "jao@gmail.com",
      senha: "123",
      data_nascimento: "1997-06-30",
      curso: "ADS",
      turma_id: 1,},
      {cpf: "48345678915",
      nome: "lucas silva",
      sexo: "M",
      email: "lucas49@gmail.com",
      senha: "123",
      data_nascimento: "1997-06-30",
      curso: "ADS",
      turma_id: 1,}
    ])

  }
}

module.exports = AlunoSeeder
