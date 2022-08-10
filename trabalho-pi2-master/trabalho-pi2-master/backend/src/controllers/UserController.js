import { where, fn, col } from 'sequelize';
import User from '../models/User';

class UserController {
  async index(id) {

  } // buscar por id

  async create(req, res) {
    const data = req.body;
    const emailExist = await User.findOne({ where: { email: data.email } });
    if (emailExist) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const cpfExist = await User.findOne({ where: { cpf: data.cpf } });
    if (cpfExist) {
      return res.status(400).json({ error: 'CPF already exists' });
    }

    const {
      email,
      name,
      cpf,
      sex,
      password,
    } = data;
    const user = await User.create({
      email,
      name,
      cpf,
      sex,
      password,
    });
    return user;
  } // criar linha

  async list(search) {
    const whereClause = search ? {
      name: where(fn('LOWER', col('email')), 'LIKE', `%${search}%`),
    } : {};

    const users = await User.findAll({
      where: whereClause,
    });
    return users;
  } // listar linhas com filtros

  async update(email, data) {} // atualizar por id

  async delete(email) {} // deletar por id
}
export default new UserController();
