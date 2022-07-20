import { where, fn, col } from 'sequelize';

import Shirt from '../models/Shirt';

class ShirtsController {
  async index(id) {
    const shirt = await Shirt.findByPk(id);
    return shirt;
  }

  async create(data) {
    const {
      name,
      price,
      team,
      composition,
      description,
      linkimg,
    } = data;

    const shirt = await Shirt.create({
      name,
      price,
      team,
      composition,
      description,
      linkimg,
    });

    return shirt;
  }

  async list(search) {
    const whereClause = search ? {
      name: where(fn('LOWER', col('name')), 'LIKE', `%${search}%`),
    } : {};

    const shirts = await Shirt.findAll({
      where: whereClause,
    });
    return shirts;
  }
}
export default new ShirtsController();
