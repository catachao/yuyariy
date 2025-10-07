// __tests__/routes/groupNoticeRoutes.test.mjs
import { jest, test, expect } from '@jest/globals';

// ✅ Mockea el modelo ANTES de importar app.js
jest.unstable_mockModule('../../models/groupNoticeModel.js', () => ({
  getAllNotices: jest.fn().mockResolvedValue([
    { id: 1, title: 'aviso test', cluster: 1 }
  ]),
  getNoticesByCluster: jest.fn().mockResolvedValue([])
}));

// ✅ Importa Express app DESPUÉS del mock
const { default: app } = await import('../../app.js');
import request from 'supertest';

test('GET /groupnotices -> 200', async () => {
  const res = await request(app).get('/groupnotices');
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{ id: 1, title: 'aviso test', cluster: 1 }]);
});
