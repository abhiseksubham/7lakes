import { combineReducers } from "redux";
import UsersReducer from "./albums";

export default combineReducers({
  users: UsersReducer,
});
