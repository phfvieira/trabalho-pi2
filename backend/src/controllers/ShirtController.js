import Shirt from '../models/Shirt';

class ShirtController {
  async index(id) {} //buscar por id

  async create(data) {
    
  } //criar linha

  async list(req, res) {
    const shirts = await Shirt.findAll();
    return res.json(shirts);
  } //listar linhas com filtros

  async update(id, data) {} //atualizar por id

  async delete(id) {} //deletar por id

}
export default new ShirtController();