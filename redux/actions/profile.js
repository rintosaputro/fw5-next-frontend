import http from '../../helper/http';

export const getProfile = (token) => ({
  type: 'USER_PROFILE',
  payload: http(token).get('/profile'),
});

export const getBalance = (token) => ({
  type: 'GET_BALANCE',
  payload: http(token).get('/profile/balance'),
});

export const getPhoneList = (token) => ({
  type: 'GET_PHONELIST',
  payload: http(token).get('/profile/phones'),
});

export const getAllUser = (token) => ({
  type: 'GET_ALL_USER',
  payload: http(token).get('/users'),
});
