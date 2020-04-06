'use strict';
module.exports = (sequelize, DataTypes) => {
    const Sequelize = sequelize.Sequelize
    const Model = Sequelize.Model

    class Food extends Model {

    }

    Food.init({
        title: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        ingerdients: {
            type: DataTypes.STRING
        },
        tag: {
            type: DataTypes.STRING
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