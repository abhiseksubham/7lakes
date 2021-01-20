import photoSagas from "./albums";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...photoSagas]);
}
