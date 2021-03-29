/* eslint-disable no-empty */
/* eslint-disable no-undef */
const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3333/api',
});

it('Should return if the application is running', async () => {
  const res = await api.get('/');
  expect(res.status).toEqual(200);
});

it('should return an array of users', async () => {
  const res = await api.get('/user');
  expect(res.status).toEqual(200);
});

it('should return a 201 status after registering a user', async () => {
  const res = await api.post('/user', {
    firstName: '<your-name-here>',
    lastName: '<your-last-name-here>',
    participation: 50,
  });
  expect(res.status).toEqual(201);
});

it('should return a 400 status when registering a wrong user', async () => {
  try {
    const res = await api.post('/user', {
      firstName: '<your-name-here>',
      participation: 50,
    });
    expect(res.status).toEqual(400);
  } catch (e) {

  }
});

it('should return a 400 status when enrolling a user with a participation greater than 100', async () => {
  try {
    const res = await api.post('/user', {
      firstName: '<your-name-here>',
      lastName: '<your-last-name-here>',
      participation: 101,
    });
    expect(res.status.erro).toEqual('Invalid Participation value: bigger than 100.');
  } catch (e) {

  }
});

it('should return a 400 status when enrolling a user with a participation less than 0', async () => {
  try {
    const res = await api.post('/user', {
      firstName: '<your-name-here>',
      lastName: '<your-last-name-here>',
      participation: -1,
    });
    expect(res.status.erro).toEqual('Invalid Participation value: less than 0.');
  } catch (e) {

  }
});
