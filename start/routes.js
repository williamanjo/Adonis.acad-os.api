'use strict'

const AlunoController = require('../app/Controllers/Http/AlunoController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/users', 'UserController.store')
Route.post('/users/token', 'UserController.token')

Route.resource('/alunos','AlunoController').apiOnly
Route.resource('/turmas','TurmaController').apiOnly
Route.resource('/setores','SetorController').apiOnly
Route.resource('/equipamentos','EquipamentoController').apiOnly
Route.resource('/marcas','MarcaController').apiOnly
Route.resource('/suportes','SuporteController').apiOnly
Route.resource('/OS','OController').apiOnly