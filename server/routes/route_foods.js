const Route = require('express')
const routes = Route()
const Controller = require('../controllers/food_controllers')
const Auth = require('../middlewares/Auth')

routes.post('/', Auth.authentication, Controller.add)
routes.get('/', Auth.authentication, Controller.get)
routes.delete('/:id', Auth.authentication, Auth.authorization, Controller.delete)

module.exports = routes