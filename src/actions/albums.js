export const Types = {
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
  DELETE_USER_REQUEST: "users/delete_user_request",
  CREATE_USER_REQUEST: "users/create_user_request",
  USERS_ERROR: "users/user_error",
  GET_ALBUM_PHOTOS: "photos/get_album_photos",
  GET_PHOTOS_SUCCESS: "photos/get_photo_success",
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getPhotosOfAlbumsRequest = () => ({
  type: Types.GET_ALBUM_PHOTOS,
});

export const getUsersSuccess = ({ items }) => ({
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

export const deleteUserRequest = (userId) => ({
  type: Types.DELETE_USER_REQUEST,
  payload: {
    userId,
  },
});

export const usersError = ({ error }) => ({
  type: Types.USERS_ERROR,
  payload: {
    error,
  },
});
