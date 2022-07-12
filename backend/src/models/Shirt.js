
import Sequelize from "sequelize";

import db from "./db";

const Shirt = db.define('shirt', {
  // Model attributes are defined here
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull : false,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  composition: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  linkimg: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
{
  timestamps: false
});

Shirt.sync();

//Shirt.sync({alter: true}); verifica se tem diferença na tabela e altera


module.exports = Shirt;