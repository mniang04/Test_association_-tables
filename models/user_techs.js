'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Techs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User_Techs.init({
    user_id: DataTypes.INTEGER,
    tech_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Techs',
  });
  return User_Techs;
};