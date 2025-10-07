// __tests__/controllers/groupNoticeController.test.mjs
import { jest, test, expect } from '@jest/globals';

// ✅ Mock del modelo (usa la extensión real .mjs)
jest.unstable_mockModule('../../models/groupNoticeModel.js', () => ({
  getAllNotices: jest.fn().mockResolvedValue([{ title: 'hola' }]),
  getNoticesByCluster: jest.fn().mockResolvedValue([])
}));

// ✅ Importa después de definir el mock
const { getGroupNotices, getGroupNoticesByCluster } = await import('../../controllers/groupNoticeController.js');

// 🔧 Mock del objeto response de Express
function mockRes() {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}

test('getGroupNotices responde con json', async () => {
  const res = mockRes();
  await getGroupNotices({}, res);
  expect(res.json).toHaveBeenCalledWith([{ title: 'hola' }]);
});

test('getGroupNoticesByCluster responde 404 si no hay docs', async () => {
  const req = { params: { cluster: 99 } };
  const res = mockRes();
  await getGroupNoticesByCluster(req, res);
  expect(res.status).toHaveBeenCalledWith(404);
});
