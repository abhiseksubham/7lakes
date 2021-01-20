import {
  takeEvery,
  takeLatest,
  take,
  call,
  put,
  fork,
} from "redux-saga/effects";
import * as actions from "../actions/albums";
import * as api from "../api/albums";

function* getAlbums() {
  try {
    const result = yield call(api.getAlbums);
    yield put(
      actions.getUsersSuccess({
        items: result.data,
      })
    );
  } catch (e) {
    yield put(
      actions.usersError({
        error: "An error occurred when trying to get the albums",
      })
    );
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getAlbums);
}

function* getPhotos() {
  try {
    const result = yield call(api.getPhotos);
    console.log(result);
    yield put(
      actions.getPhotosOfAlbumsSuccess({
        photos: result.data,
      })
    );
  } catch (e) {
    yield put(
      actions.usersError({
        error: "An error occurred when trying to get the users",
      })
    );
  }
}

function* watchgetPhotos() {
  yield takeLatest(actions.Types.GET_ALBUM_PHOTOS, getPhotos);
}

const userSagas = [fork(watchGetUsersRequest), fork(watchgetPhotos)];

export default userSagas;
