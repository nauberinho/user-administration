// Action types
import { GET_USERS_SUCCESS } from "../actions";

const initialState = { users: [] };

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.items,
        numberOfUsers: action.payload.totalcount
      };
    default:
      return state;
  }
};

export default users;
