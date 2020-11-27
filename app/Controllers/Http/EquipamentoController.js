'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Equipamento = use('App/Models/Equipamento')

/**
 * Resourceful controller for interacting with equipamentos
 */
class EquipamentoController {
  /**
   * Show a list of all equipamentos.
   * GET equipamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Equipamento.query().paginate()
  }

  /**
   * Create/save a new equipamento.
   * POST equipamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposCadastro = Equipamento.getCamposCadastro()
    const dados = request.only(camposCadastro)
    return Equipamento.create(dados);

  }

  /**
   * Display a single equipamento.
   * GET equipamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Equipamento.query().where('id' , params.id).first()
  }

  /**
   * Render a form to update an existing equipamento.
   * GET equipamentos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async update ({ params, request, response }) {
    const camposCadastro = Equipamento.getCamposCadastro()
    const dados = request.only(camposCadastro)

    const equipamento = await Equipamento.query().where('id', params.id).first()
    equipamento.merge(dados)
    await equipamento.save()

    return equipamento;
  }

  /**
   * Delete a equipamento with id.
   * DELETE equipamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const equipamento = await Equipamento.findOrFail(params.id)
    equipamento.delete()

  }
}

module.exports = EquipamentoController
