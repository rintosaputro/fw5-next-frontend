import http from '../../helper/http';

export const getHistory = (token) => ({
  type: 'GET_HISTORIES',
  payload: http(token).get('/transactions/history'),
});
