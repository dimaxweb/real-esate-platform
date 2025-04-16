import axios from 'axios';

describe('GET /properties', () => {
  it('should return 200 ok', async () => {
    const res = await axios.get(`http://localhost:3000/api`);

    expect(res.status).toBe(200);
    // expect(res.data).toEqual({ message: 'Hello API' });
  });
});
