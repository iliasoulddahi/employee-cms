'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
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
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        notNull:{
          msg: 'email is required'
        },
        notEmpty:{
          msg: 'email is required'
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'password is required'
        },
        notEmpty:{
          msg: 'password is required'
        }
      }
    },
    gender: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'gender is required'
        },
        notEmpty:{
          msg: 'gender is required'
        }
      }
    },
    phone: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'phone is required'
        },
        notEmpty:{
          msg: 'phone is required'
        }
      }
    },
    role:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'role is required'
        },
        notEmpty:{
          msg: 'role is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};