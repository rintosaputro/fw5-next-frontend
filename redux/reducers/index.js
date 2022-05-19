import { combineReducers } from 'redux';
import histories from './histories';
import inputTransfer from './transfer';
// import registerUser from "./auth";
import {
  registerUser, login, forgotPassword, changePassword,
} from './auth';
import {
  phoneList, balance, allUser, addPhone, deletePhone, updateProfile, changePin,
} from './profile';
import { topUp, transfer } from './transaction';
import users from './users';

const rootReducers = combineReducers({
  histories,
  inputTransfer,
  registerUser,
  login,
  forgotPassword,
  changePassword,
  phoneList,
  allUser,
  addPhone,
  deletePhone,
  updateProfile,
  changePin,
  balance,
  topUp,
  users,
  transfer,
});

export default rootReducers;
