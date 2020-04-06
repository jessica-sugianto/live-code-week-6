'use strict';
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
    }, { sequelize })

    User.associate = function(models) {
        // associations can be defined here
        User.hasMany(models.Food)
    };
    return User;
};