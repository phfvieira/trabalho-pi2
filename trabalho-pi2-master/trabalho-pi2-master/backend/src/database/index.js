import { Sequelize } from 'sequelize';
import config from '../config/db';

import Shirt from '../models/Shirt';
import User from '../models/User';
const currentConfig = config[process.env.NODE_ENV || 'development'];

const models = [
  Shirt,
  User,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(currentConfig);
    console.log('connection done');

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
