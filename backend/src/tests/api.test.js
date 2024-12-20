const request = require('supertest');
const app = require('../app'); // Sesuaikan path ini ke lokasi file app.js

describe('Product API Endpoints', () => {
  it('GET /api/products should return list of products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeDefined();
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/products should create a new product', async () => {
    const newProduct = { name: 'Sample Product', price: 100 };
    const res = await request(app).post('/api/products').send(newProduct);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(newProduct.name);
  });
});
