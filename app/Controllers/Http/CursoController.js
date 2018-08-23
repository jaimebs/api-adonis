'use strict'

const Curso = use('App/Models/Curso')

/**
 * Resourceful controller for interacting with cursos
 */
class CursoController {
  /**
   * Show a list of all cursos.
   * GET cursos
   */
  async index() {
    const cursos = await Curso.all()
    return cursos
  }

  /**
   * Create/save a new curso.
   * POST cursos
   */
  async store({ request }) {
    const data = request.only(['nome'])
    const curso = await Curso.create(data)
    return curso
  }

  /**
   * Display a single curso.
   * GET cursos/:id
   */
  async show({ params }) {
    const curso = await Curso.findOrFail(params.id)
    return curso
  }

  /**
   * Update curso details.
   * PUT or PATCH cursos/:id
   * Obs: Caso queira pegar todos os dados do body só colocar request.all()
   */
  async update({ params, request, response }) {
    const curso = await Curso.findOrFail(params.id)
    const data = request.only([
      'nome'
    ])
    curso.merge(data)
    await curso.save()
    return curso
  }

  /**
   * Delete a curso with id.
   * DELETE cursos/:id
   */
  async destroy({ params, response }) {
    const curso = await Curso.findOrFail(params.id)
    await curso.delete()
    return response.status(200).send({ mensagem: 'Curso deletado com sucesso!' })
  }
}

module.exports = CursoController
