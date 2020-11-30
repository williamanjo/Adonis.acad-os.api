'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Suporte = use('App/Models/Suporte')

/**
 * Resourceful controller for interacting with suportes
 */
class SuporteController {
  /**
   * Show a list of all suportes.
   * GET suportes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Suporte.query().with('os').paginate()
  }

  /**
   * Create/save a new suporte.
   * POST suportes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposCadastro = Suporte.getCamposCadastro()
    const dados = request.only(camposCadastro)
    return Suporte.create(dados);

  }

  /**
   * Display a single suporte.
   * GET suportes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Suporte.query().with('os').where('id' , params.id).first()
  }

  /**
   * Render a form to update an existing suporte.
   * GET suportes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async update ({ params, request, response }) {
    const camposCadastro = Suporte.getCamposCadastro()
    const dados = request.only(camposCadastro)

    const suporte = await Suporte.query().where('id', params.id).first()
    suporte.merge(dados)
    await suporte.save()

    return suporte;
  }

  /**
   * Delete a suporte with id.
   * DELETE suportes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const suporte = await Suporte.findOrFail(params.id)
    suporte.delete()

  }
}

module.exports = SuporteController
