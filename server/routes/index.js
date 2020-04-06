const Route = require('express')
const routes = Route()
const Users = require('./route_user')

routes.use('/users', Users)

module.exports = routes