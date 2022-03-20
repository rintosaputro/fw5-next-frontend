import { combineReducers } from "redux";
import histories from "./histories";
import inputTransfer from "./transfer";
// import registerUser from "./auth";
import { registerUser, login } from "./auth";
import { phoneList, balance } from './profile';

const rootReducers = combineReducers({
  histories,
  inputTransfer,
  registerUser,
  login,
  phoneList,
  balance
})

export default rootReducers;
