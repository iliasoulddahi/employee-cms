'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Position.hasMany(models.Employee, {foreignKey:'PositionId'})
    }
  }
  Position.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'name is required'
        },
        notEmpty:{
          msg: 'name is required'
        }
      }
    },
    description: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'description is required'
        },
        notEmpty:{
          msg: 'description is required'
        }
      }
    },
    salary: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'salary is required'
        },
        notEmpty:{
          msg: 'salary is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Position',
  });
  return Position;
};