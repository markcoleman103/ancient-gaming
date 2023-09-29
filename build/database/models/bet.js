'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class bet extends Model {
        static associate() {
            // define association here
        }
    }
    bet.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        userId: DataTypes.INTEGER,
        betAmount: DataTypes.FLOAT,
        chance: DataTypes.FLOAT,
        payout: DataTypes.FLOAT,
        win: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'bet',
    });
    return bet;
};
