'use strict'
const  { Model } = require("sequelize");
import {DataTypes} from 'sequelize'
module.exports = (sequelize:any) => {
    class Table extends Model {
      static associate(models:any) {
        
      }
    };
    Table.init({
      name:{
        type:DataTypes.INTEGER(),
    }
    }, {
      sequelize,
      modelName: 'table',
    });
    return Table;
};
