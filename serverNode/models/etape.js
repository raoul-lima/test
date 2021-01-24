'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Etape extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  //association here
      /*this.belongsTo(models.Todo, {
        foreignKey: {
          allowNull: false
        }
      }) */
    }
  };
  Etape.init({
    idTache: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Etape',
  });
  return Etape;
};