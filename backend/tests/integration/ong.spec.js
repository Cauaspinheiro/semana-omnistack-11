import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const res = await request(app).post('/ongs').send({
      name: 'SDPD',
      email: 'contato@sdpd.br',
      whatsapp: '5511912345678',
      city: 'Barueri',
      uf: 'SP',
    });

    expect(res.body).toHaveProperty('id');
    expect(res.body.id).toHaveLength(16);
  });
});
