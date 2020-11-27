'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Setor extends Model {
    static getCamposCadastro(){
        return ['sigla']
        
    }
}

module.exports = Setor
