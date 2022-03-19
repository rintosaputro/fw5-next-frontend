import { combineReducers } from "redux";
import histories from "./histories";
import inputTransfer from "./transfer";

const rootReducers = combineReducers({
  histories,
  inputTransfer
})

export default rootReducers;
