'use strict';
const Pass = require('../helpers/password')
module.exports = (sequelize, DataTypes) => {
    const Sequelize = sequelize.Sequelize
    const Model = Sequelize.Model

    class User extends Model {

    }

    User.init({
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmpty: {
                    msg: 'email tidak boleh kosong'
                },
                isNull: {
                    msg: 'email tidak boleh null'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                isEmpty: {
                    msg: 'password tidak boleh kosong'
                },
                isNull: {
                    msg: 'password tidak boleh null'
                }
            },
        }
    }, {
        hooks: {
            beforeCreate: (user, options) => {
                console.log('masuk hooks')
                if (user.email === '' && user.password === '') {
                    user.email = 'yokai@mail.com',
                        user.password = Pass.hashPassword('12345')
                }
            }
        },
        sequelize
    })

    User.associate = function(models) {
        // associations can be defined here
        User.hasMany(models.Food)
    };
    return User;
};