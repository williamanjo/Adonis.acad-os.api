'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Setor = use('App/Models/Setor')

/**
 * Resourceful controller for interacting with setors
 */
class SetorController {
  /**
   * Show a list of all setors.
   * GET setors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Setor.query().with('equipamentos').fetch()
  }

  /**
   * Create/save a new setor.
   * POST setors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposCadastro = Setor.getCamposCadastro()
    const dados = request.only(camposCadastro)
    return Setor.create(dados);

  }

  /**
   * Display a single setor.
   * GET setors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Setor.query().with('equipamentos').where('id' , params.id).first()
  }

  /**
   * Render a form to update an existing setor.
   * GET setors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async update ({ params, request, response }) {
    const camposCadastro = Setor.getCamposCadastro()
    const dados = request.only(camposCadastro)

    const setor = await Setor.query().with('equipamentos').where('id', params.id).first()
    setor.merge(dados)
    await setor.save()

    return setor;
  }

  /**
   * Delete a setor with id.
   * DELETE setors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const setor = await Setor.findOrFail(params.id)
    setor.delete()

  }
}

module.exports = SetorController
