import http from "../../helper/http";

export const topUp = (token, amount) => {
  const param = new URLSearchParams();
  param.append('amount', amount);
  return {
    type: 'TOPUP',
    payload: http(token).post('/transactions/topup', param)
  }
}
