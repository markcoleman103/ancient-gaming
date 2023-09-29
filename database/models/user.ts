'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize:any, DataTypes:any) => {
  class user extends Model {
    static associate() {
      // define association here
    }
  }
  user.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    balance: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};