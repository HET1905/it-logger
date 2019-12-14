import { combineReducers } from "redux";
import logReducer from "./logReducer";

export default combineReducers({
  // use this log in log.js in mapStateToprops
  log: logReducer
});
