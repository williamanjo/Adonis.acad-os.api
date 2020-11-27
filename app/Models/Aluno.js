'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Aluno extends Model {
    static getCamposCadastro(){
        return ['nome','email','senha','sexo','cpf','data_nascimento','turno','curso','turma_id']

    }
}

module.exports = Aluno
