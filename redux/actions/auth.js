import http from "../../helper/http";

export const signup = (fullName, email, password) => {
  const param = new URLSearchParams();
  param.append('fullName', fullName);
  param.append('email', email);
  param.append('password', password);
  const dataRegist = {
    fullName, email
  }

  return {
    type: 'REGISTER',
    payload: http().post('/auth/register', param)
  }
}

export const addDataRegist = (fullName, email, password) => {
  const dataRegist = {fullName, email, password}
  return {
    type: 'ADD_DATA_REGIST',
    payload: {
      dataRegist
    }
  }
}
