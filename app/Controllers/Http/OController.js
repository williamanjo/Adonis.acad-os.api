'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const O = use('App/Models/O')

/**
 * Resourceful controller for interacting with os
 */
class OController {
  /**
   * Show a list of all os.
   * GET os
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return O.query().paginate()
  }

  /**
   * Create/save a new o.
   * POST os
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposCadastro = O.getCamposCadastro()
    const dados = request.only(camposCadastro)
    return O.create(dados);

  }

  /**
   * Display a single o.
   * GET os/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await O.query().where('id' , params.id).first()
  }

  /**
   * Render a form to update an existing o.
   * GET os/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async update ({ params, request, response }) {
    const RegisterFields = O.getRegisterFields()
    const dados = request.only(RegisterFields)

    const o = await O.query().where('id', params.id).first()
    o.merge(dados)
    await o.save()

    return o;
  }

  /**
   * Delete a o with id.
   * DELETE os/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const o = await O.findOrFail(params.id)
    o.delete()

  }
}

module.exports = OController
