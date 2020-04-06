const jwt = require('jsonwebtoken')
const Food = require('../models').Food

class Auth {

    static authentication(req, res, next) {
        try {
            const token = req.headers.token
            if (!token) {
                res.status(404).json({
                    message: 'Token not found'
                })
            } else {
                const decoded = jwt.verify(token, process.env.SECRET)
                req.id = decoded.id
                next()
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    }

    static authorization(req, res, next) {
        Food.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(result => {
                if (!result) {
                    res.status(404).json({
                        message: 'Food not found'
                    })
                } else if (result.UserId === req.id) {
                    next()
                } else {
                    res.status(400).json({
                        message: 'Access forbiden'
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Internal server error'
                })
            })
    }
}

module.exports = Auth