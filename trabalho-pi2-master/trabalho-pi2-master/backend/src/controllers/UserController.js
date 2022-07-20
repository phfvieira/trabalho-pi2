import User from '../models/User';

class UserController {
  async index(id) {

  } //buscar por id

  async create(data) {
    const {
      email,
      name,
      cpf,
      team,
      sex,
      password,
    } = data;
    const user = await User.create({
      email,
      name,
      cpf,
      team,
      sex,
      password,
    });
    return user;
  } //criar linha

  async list(search) {
    const whereClause = search ? {
      name: where(fn('LOWER', col('email')), 'LIKE', `%${search}%`),
    } : {};

    const users = await User.findAll({
      where: whereClause,
    });
    return users;
  } //listar linhas com filtros

  async update(email, data) {} //atualizar por id

  async delete(email) {} //deletar por id

}
export default new UserController();