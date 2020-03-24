import connection from '../database/connection';

export default {
  async index(req, res) {
    const incidents = await connection('incidents').select('*');

    return res.json(incidents);
  },

  async create(req, res) {
    const { title, value, description } = req.body;
    const { id: ong_id } = req.headers;


    const [id] = await connection('incidents').insert({
      title, value, description, ong_id,
    });

    return res.status(201).json({ id });
  },

  async destroy(req, res) {
    const { id } = req.params;
    const { id: ong_id } = req.headers;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id').first();

    if (!incident) return res.status(404).json({ error: 'NOT FOUND' });

    if (incident.ong_id !== ong_id) return res.status(401).json({ error: 'NOT AUTHORIZED' });

    await connection('incidents').where('id', id).delete();

    return res.status(204).send();
  },
};
