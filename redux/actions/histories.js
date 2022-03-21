import http from "../../helper/http"
export const getHistory = (token) => {
  return {
    type: 'GET_HISTORIES',
    payload: http(token).get('/transactions/history')
  }  
}
