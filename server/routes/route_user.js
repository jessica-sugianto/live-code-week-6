const Route = require('express')
const routes = Route()
const Controller = require('../controllers/user_controllers')

routes.post('/register', Controller.register)
routes.post('/login', Controller.login)

module.exports = routes