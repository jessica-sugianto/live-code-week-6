const { Food, User } = require('../models')


class FoodController {

    static get(req, res) {
        Food.findAll({
                include: User,
                where: {
                    UserId: req.id
                }
            }).then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({
                    message: err
                })
            })
    }

    static add(req, res) {
        console.log(req.body)
        Food.create({
                title: req.body.title,
                price: Number(req.body.price),
                ingerdients: req.body.ingredients,
                tag: req.body.tag,
                UserId: req.id
            })
            .then(result => {
                res.status(200).json(result)
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

    static delete(req, res) {
        Food.delete({
                where: {
                    id: req.params.id
                }
            })
            .then(result => {
                res.status(200).json({
                    message: "Successfully delete food from your menu"
                })
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

module.exports = FoodController