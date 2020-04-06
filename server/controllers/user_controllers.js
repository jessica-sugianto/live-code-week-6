const User = require('../models').User
const Pass = require('../helpers/password')
const jwt = require('jsonwebtoken')

class UserController {
    static register(req, res) {
        let data = {}
        if (req.body) {
            data.email = req.body.email
            data.password = Pass.hashPassword(req.body.password)
        } else {
            data.email = 'yokai@mail.com'
            data.password = Pass.hashPassword('12345')
        }
        User.create(data)
            .then(result => {
                res.status(201).json(result)
            })
            .catch(err => {
                console.log(err)
                if (err.message) {
                    res.status(400).json({
                        message: err.message
                    })
                } else {
                    res.status(500).json({
                        message: 'Internal server error'
                    })
                }
            })
    }

    static login(req, res) {
        User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(result => {
                let error = 'Email / Password salah'

                if (!result) {
                    res.status(404).json({
                        message: error
                    })
                } else {
                    if (result.password !== req.body.password) {
                        res.status(404).json({
                            message: error
                        })
                    } else {
                        let data = {
                            id: result.id
                        }
                        let token = jwt.sign(data, process.env.SECRET)
                        res.status(200).json(token)
                    }
                }
            })
            .catch(err => {
                console.log(err)
                if (err.message) {
                    res.status(400).json({
                        message: err.message
                    })
                } else {
                    res.status(500).json({
                        message: 'Internal server error'
                    })
                }
            })
    }
}

module.exports = UserController