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

export const addPhone = (token, phone) => {
  const param = new URLSearchParams();
  param.append('number', phone);
  return {
    type: 'ADD_PHONE',
    payload: http(token).post('/profile/phones', param),
  };
};
