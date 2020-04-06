const Route = require('express')
const routes = Route()
const Users = require('./route_user')
const Foods = require('./route_foods')

routes.use('/users', Users)
routes.use('/foods', Foods)

module.exports = routes