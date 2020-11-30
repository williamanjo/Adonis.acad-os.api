'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Marca extends Model {
    static getCamposCadastro(){
        return ['nome']
        
    }
    equipamentos(){
        return this.hasMany('App/Models/Equipamento')
    }
}

module.exports = Marca
