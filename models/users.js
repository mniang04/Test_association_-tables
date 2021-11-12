'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Adresses, { foreignKey: "user_id", as: "addresses" });
      this.belongsToMany(models.Techs, {
        foreignKey: "user_id",
        through: "user_techs",
        as: "techs",
      });
    }
  };
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
