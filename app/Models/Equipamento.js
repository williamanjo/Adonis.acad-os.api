'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Equipamento extends Model {
    static getCamposCadastro(){
        return ['tipo','setor_id','marca_id']
        
    }
    setor(){
        return this.belongsTo('App/Models/Setor')
    }
    marca(){
        return this.belongsTo('App/Models/Marca')
    }
}

module.exports = Equipamento
