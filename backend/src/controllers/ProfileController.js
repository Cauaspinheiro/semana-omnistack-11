import connection from '../database/connection';

export default {
  async index(req, res) {
    const { id: ong_id } = req.headers;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidents);
  },
};
