import generateUniqueId from '../utils/generateUniqueId';

import connection from '../database/connection';

export default {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  async create(req, res) {
    const {
      name, email, whatsapp, city, uf,
    } = req.body;

    const id = generateUniqueId();

    await connection('ongs').insert({
      id, name, email, whatsapp, city, uf,
    });

    return res.status(201).json({ id });
  },
  async destroy(req, res) {
    const { id } = req.headers;

    await connection('ongs').where('id', id).delete();
    await connection('incidents').where('ong_id', id).delete();

    return res.status(204).send();
  },
};
