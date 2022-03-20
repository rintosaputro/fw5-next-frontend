import { combineReducers } from "redux";
import histories from "./histories";
import inputTransfer from "./transfer";
// import registerUser from "./auth";
import { registerUser, login, phoneList } from "./auth";

const rootReducers = combineReducers({
  histories,
  inputTransfer,
  registerUser,
  login,
  phoneList
})

export default rootReducers;
