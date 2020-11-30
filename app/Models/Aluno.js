'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Aluno extends Model {
    static getCamposCadastro(){
        return ['nome','email','senha','sexo','cpf','data_nascimento','turno','curso','turma_id']

    }
    turma(){
        return this.belongsTo('App/Models/Turma')
    }
    os(){
        return this.hasMany('App/Models/O')
    }
}

module.exports = Aluno
