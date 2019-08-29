import axios from "axios";

const BASE_URL =
  "http://localhost:8088/https://api-sandbox.mysitoo.com/v2/accounts/90316/sites/1/users.json";

export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
export const getUsers = index => {
  return async dispatch => {
    dispatch({ type: GET_USERS });
    try {
      const auth = {
        username: "90316-125",
        password: "pfX0Y7A2TYAlZ571IKEO7AKoXza6YlvsP8kKvAu3"
      };

      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}?start=${index}`,
        auth: auth
      });
      dispatch({ type: GET_USERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_USERS_FAILURE, payload: error });
    }
  };
};

export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";
export const updateUser = user => {
  return async dispatch => {
    dispatch({ type: UPDATE_USER });
    try {
      const auth = {
        username: "90316-125",
        password: "pfX0Y7A2TYAlZ571IKEO7AKoXza6YlvsP8kKvAu3"
      };

      const { data } = await axios({
        method: "PUT",
        url: BASE_URL + "/sites/1/users.json",
        auth: auth,
        data: user
      });
      dispatch({ type: UPDATE_USER_SUCCESS, payload: data.items });
    } catch (error) {
      dispatch({ type: UPDATE_USER_FAILURE, payload: error });
    }
  };
};

export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";
export const createUser = user => {
  return async dispatch => {
    dispatch({ type: CREATE_USER });
    try {
      const auth = {
        username: "90316-125",
        password: "pfX0Y7A2TYAlZ571IKEO7AKoXza6YlvsP8kKvAu3"
      };

      const { data } = await axios({
        method: "POST",
        url: BASE_URL + "/sites/1/users.json",
        auth: auth,
        data: user
      });
      dispatch({ type: CREATE_USER_SUCCESS, payload: data.items });
    } catch (error) {
      dispatch({ type: CREATE_USER_FAILURE, payload: error });
    }
  };
};
