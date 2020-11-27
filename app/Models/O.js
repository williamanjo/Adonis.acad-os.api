'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class O extends Model {
    static getCamposCadastro(){
        return ['data_hora_abertura',
                'data_hora_fechamento',
                'problema_relatado',
                'solucao',
                'situacao',
                'equipamento_id',
                'aluno_id',
                'suporte_id'
            ]
        
    }

}

module.exports = O
