export const Types = {
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
  CREATE_USER_REQUEST: "users/create_user_request",
  PHOTOS_ERROR: "photos/photos_error",
  GET_ALBUM_PHOTOS: "photos/get_album_photos",
  GET_PHOTOS_SUCCESS: "photos/get_photo_success",
};

export const getPhotosRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getPhotosOfAlbumsRequest = () => ({
  type: Types.GET_ALBUM_PHOTOS,
});

export const getPhotosSuccess = ({ items }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: {
    items,
  },
});

export const getPhotosOfAlbumsSuccess = ({ photos }) => ({
  type: Types.GET_PHOTOS_SUCCESS,
  payload: {
    photos,
  },
});

export const createUserRequest = ({ firstName, lastName }) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: {
    firstName,
    lastName,
  },
});

export const photosError = ({ error }) => ({
  type: Types.PHOTOS_ERROR,
  payload: {
    error,
  },
});
