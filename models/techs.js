'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Techs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Users, {
        foreignKey: "tech_id",
        through: "user_techs",
        as: "users",
      });
    }
  };
  Techs.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Techs',
  });
  return Techs;
};