'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsTo(models.Position, { foreignKey:'PositionId' })
    }
  }
  Employee.init({
    firstName: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'firstName is required'
        },
        notEmpty:{
          msg: 'firstName is required'
        }
      }
    },
    lastName: {
      type:DataTypes.STRING,
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
        },
        isEmail:{
          msg: 'invalid email format'
        }
      }
    },
    imgUrl: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'imgUrl is required'
        },
        notEmpty:{
          msg: 'imgUrl is required'
        }
      }
    },
    dob: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'dob is required'
        },
        notEmpty:{
          msg: 'dob is required'
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
    address: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'address is required'
        },
        notEmpty:{
          msg: 'address is required'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'status is required'
        },
        notEmpty:{
          msg: 'status is required'
        }
      }
    },
    PositionId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'Position is required'
        },
        notEmpty:{
          msg: 'Position is required'
        }
      },
      references:{
        model:'Positions'
      }
    }
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};