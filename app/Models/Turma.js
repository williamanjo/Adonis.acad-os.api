'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Turma extends Model {
    static getCamposCadastro(){
        return ['sigla']
        
    }
    alunos(){
        return this.hasMany('App/Models/Aluno')
    }
}

module.exports = Turma
