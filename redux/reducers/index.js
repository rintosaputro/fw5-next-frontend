import { combineReducers } from "redux";
import histories from "./histories";
import inputTransfer from "./transfer";
// import registerUser from "./auth";
import { registerUser, login } from "./auth";

const rootReducers = combineReducers({
  histories,
  inputTransfer,
  registerUser,
  login
})

export default rootReducers;
