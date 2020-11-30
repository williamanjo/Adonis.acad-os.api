'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Suporte extends Model {
    static getCamposCadastro(){
        return ['nome','email','senha','sexo','cpf','data_nascimento','data_admissao']
        
    }
    os(){
        return this.hasMany('App/Models/O')
    }
}

module.exports = Suporte
