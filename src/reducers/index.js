import { combineReducers } from "redux";
import AlbumsReducer from "./albums";

export default combineReducers({
  albums: AlbumsReducer,
});
