import { combineReducers } from "redux";
import histories from "./histories";
import inputTransfer from "./transfer";
// import registerUser from "./auth";
import { registerUser, login, forgotPassword, changePassword } from "./auth";
import { phoneList, balance, allUser } from './profile';
import { topUp } from "./transaction";
import users from "./users";

const rootReducers = combineReducers({
  histories,
  inputTransfer,
  registerUser,
  login,
  forgotPassword,
  changePassword,
  phoneList,
  allUser,
  balance,
  topUp,
  users
})

export default rootReducers;
