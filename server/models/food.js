'use strict';
module.exports = (sequelize, DataTypes) => {
    const Sequelize = sequelize.Sequelize
    const Model = Sequelize.Model

    class Food extends Model {

    }

    Food.init({
        title: {
            type: DataTypes.STRING,
            validate: {
                isEmpty: {
                    msg: 'title tidak boleh kosong'
                },
                isNull: {
                    msg: 'title tidak boleh null'
                }
            }
        },
        price: {
            type: DataTypes.INTEGER,
            validate: {
                isEmpty: {
                    msg: 'harga tidak boleh kosong'
                },
                isNull: {
                    msg: 'harga tidak boleh null'
                }
            }
        },
        ingerdients: {
            type: DataTypes.STRING,
            validate: {
                isEmpty: {
                    msg: 'title tidak boleh kosong'
                },
                isNull: {
                    msg: 'title tidak boleh null'
                }
            }
        },
        tag: {
            type: DataTypes.STRING,
            validate: {
                isEmpty: {
                    msg: 'title tidak boleh kosong'
                },
                isNull: {
                    msg: 'title tidak boleh null'
                }
            }
        },
        UserId: {
            type: DataTypes.INTEGER
        }
    }, { sequelize })

    Food.associate = function(models) {
        // associations can be defined here
        Food.belongsTo(models.User)
    };
    return Food;
};