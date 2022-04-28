import http from '../../helper/http';

export const topUp = (token, amount) => {
  const param = new URLSearchParams();
  param.append('amount', amount);
  return {
    type: 'TOPUP',
    payload: http(token).post('/transactions/topup', param),
  };
};

export const transfer = (token, amount, recipient, pin, notes) => {
  const param = new URLSearchParams();
  param.append('amount', amount);
  param.append('recipient', recipient);
  param.append('pin', pin);
  if (notes) {
    param.append('notes', notes);
  }

  return {
    type: 'TRANSFER',
    payload: http(token).post('/transactions/transfer', param),
  };
};
