import http from "../../helper/http";

export const getUsers = (token) => {
  return {
    type: 'GET_USERS',
    payload: http(token).get('/users')
  }
}
