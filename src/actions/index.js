import axios from "axios";

export const GET_USERS = "REQUESTING_USERS";
export const GET_USERS_SUCCESS = "REQUESTING_USERS_SUCCESS";
export const GET_USERS_FAILURE = "REQUESTING_USERS_FAILURE";
export const getUsers = () => {
  return async dispatch => {
    const someUrl = "www.someUrl.com";
    dispatch({ type: GET_USERS });
    try {
      const response = await axios.get(someUrl);
      dispatch({ type: GET_USERS_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: GET_USERS_FAILURE, payload: error });
    }
  };
};
