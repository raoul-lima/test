'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*this.hasMany(models.Etape);
      this.belongsTo(models.Activite, {
        foreignKey: {
          allowNull: false
        }
      });*/
    }
  };
  Todo.init({
    idUser: DataTypes.INTEGER,
    idActivite: DataTypes.INTEGER,
    label: DataTypes.STRING,
    description: DataTypes.TEXT,
    isStarted: DataTypes.BOOLEAN,
    isFinished: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};