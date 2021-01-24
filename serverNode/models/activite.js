'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //models.Activite.hasMany(models.Todo);
    }
  };
  Activite.init({
    idUser: DataTypes.INTEGER,
    libelle: DataTypes.STRING,
    isFinished: DataTypes.BOOLEAN,
    isEncours: DataTypes.BOOLEAN,
    isOpen: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Activite',
  });
  return Activite;
};