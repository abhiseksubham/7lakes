import { Types } from "../actions/users";

const INITIAL_STATE = {
  items: [],
  photos: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS: {
      return {
        ...state,
        items: action.payload.items,
      };
    }
    case Types.GET_PHOTOS_SUCCESS: {
      return {
        ...state,
        photos: action.payload.photos,
      };
    }
    case Types.USERS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
}
