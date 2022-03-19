import http from "../../helper/http";

export const signup = (fullName, email, password) => {
  const param = new URLSearchParams();
  param.append('fullName', fullName);
  param.append('email', email);
  param.append('password', password);
}
