require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../lib/app');
const connect = require('../../lib/utils/connect');

describe('Actor routes tests', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates an Actor', () => {
    return request(app)
      .post('/api/v1/actors')
      .send({
        name: 'Charlie Sheen',
        dob: new Date('9/3/1965'),
        pob: 'New York City'
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'Charlie Sheen',
          dob: new Date('9/3/1965').toISOString(),
          pob: 'New York City',
          _id: expect.any(String),
          __v: 0
        });
      });
  });
});
