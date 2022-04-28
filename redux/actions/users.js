import http from '../../helper/http';

export const getUsers = (token) => ({
  type: 'GET_USERS',
  payload: http(token).get('/users'),
});
