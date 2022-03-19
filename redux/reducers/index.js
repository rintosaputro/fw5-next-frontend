import { combineReducers } from "redux";
import histories from "./histories";
import inputTransfer from "./transfer";
import registerUser from "./auth";

const rootReducers = combineReducers({
  histories,
  inputTransfer,
  registerUser
})

export default rootReducers;
