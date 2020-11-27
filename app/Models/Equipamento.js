'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Equipamento extends Model {
    static getCamposCadastro(){
        return ['tipo','setor_id','marca_id']
        
    }
}

module.exports = Equipamento
