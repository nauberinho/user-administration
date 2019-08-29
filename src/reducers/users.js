// Action types
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USERS,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAILURE,
  RESET_STATE
} from "../actions";

const initialState = {
  users: [],
  numberOfUsers: 0,
  successMessage: null,
  errorMessage: null,
  isLoading: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
    case UPDATE_USER:
    case CREATE_USER:
    case DELETE_USER:
    case DELETE_USERS:
      return { ...state, isLoading: true };

    case UPDATE_USER_SUCCESS:
    case CREATE_USER_SUCCESS:
    case DELETE_USER_SUCCESS:
    case DELETE_USERS_SUCCESS:
      return { ...state, successMessage: "Task completed.", isLoading: false };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.items,
        numberOfUsers: action.payload.totalcount,
        isLoading: false
      };

    case GET_USERS_FAILURE:
    case UPDATE_USER_FAILURE:
    case CREATE_USER_FAILURE:
    case DELETE_USER_FAILURE:
    case DELETE_USERS_FAILURE:
      return {
        ...state,
        errorMessage: "Something went wrong, please try again.",
        isLoading: false
      };
    case RESET_STATE:
      return {
        ...initialState,
        users: state.users,
        numberOfUsers: state.numberOfUsers
      };
    default:
      return state;
  }
};

export default users;
