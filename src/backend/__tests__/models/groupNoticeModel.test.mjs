// __tests__/models/groupNoticeModel.test.mjs
import { jest, test, expect } from '@jest/globals';

// mock del módulo config/db.js
jest.unstable_mockModule('../../config/db.js', () => ({
  getDB: () => ({
    collection: () => ({
      find: () => ({ toArray: async () => [{ title: 'fake' }] })
    })
  })
}));

// Importar el módulo bajo prueba (después de mockear)
const { getAllNotices, getNoticesByCluster } = await import('../../models/groupNoticeModel.js');

test('getAllNotices devuelve documentos', async () => {
  const res = await getAllNotices();
  expect(res).toEqual([{ title: 'fake' }]);
});

test('getNoticesByCluster filtra por cluster', async () => {
  const res = await getNoticesByCluster(1);
  expect(Array.isArray(res)).toBe(true);
});
