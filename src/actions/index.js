import axios from "axios";

const BASE_URL =
  "http://localhost:8088/https://api-sandbox.mysitoo.com/v2/accounts/90316/sites/1/";
const GET_AND_CREATE_URL = `${BASE_URL}/users.json`;
const UPDATE_AND_DELETE_URL = `${BASE_URL}/users`;

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
        url: `${GET_AND_CREATE_URL}?start=${index}`,
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
export const updateUser = (user, userId) => {
  return async dispatch => {
    dispatch({ type: UPDATE_USER });
    try {
      const auth = {
        username: "90316-125",
        password: "pfX0Y7A2TYAlZ571IKEO7AKoXza6YlvsP8kKvAu3"
      };

      const { data } = await axios({
        method: "PUT",
        url: `${UPDATE_AND_DELETE_URL}/${userId}.json`,
        auth: auth,
        data: user
      });
      dispatch(getUsers(0));
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

      await axios({
        method: "POST",
        url: GET_AND_CREATE_URL,
        auth: auth,
        data: user
      });
      dispatch(getUsers(0));
      dispatch({ type: CREATE_USER_SUCCESS });
    } catch (error) {
      dispatch({ type: CREATE_USER_FAILURE, payload: error });
    }
  };
};

export const DELETE_USER = "CREATE_USER";
export const DELETE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "CREATE_USER_FAILURE";
export const deleteUser = userId => {
  return async dispatch => {
    dispatch({ type: DELETE_USER });
    try {
      const auth = {
        username: "90316-125",
        password: "pfX0Y7A2TYAlZ571IKEO7AKoXza6YlvsP8kKvAu3"
      };

      const { data } = await axios({
        method: "DELETE",
        url: `${UPDATE_AND_DELETE_URL}/${userId}.json`,
        auth: auth
      });
      dispatch(getUsers(0));
      dispatch({ type: DELETE_USER_SUCCESS, payload: data.items });
    } catch (error) {
      dispatch({ type: DELETE_USER_FAILURE, payload: error });
    }
  };
};

export const DELETE_USERS = "CREATE_USER";
export const DELETE_USERS_SUCCESS = "CREATE_USER_SUCCESS";
export const DELETE_USERS_FAILURE = "CREATE_USER_FAILURE";
export const deleteUsers = userIds => {
  return async dispatch => {
    dispatch({ type: DELETE_USERS });
    for (var id in userIds) {
      try {
        const auth = {
          username: "90316-125",
          password: "pfX0Y7A2TYAlZ571IKEO7AKoXza6YlvsP8kKvAu3"
        };

        const { data } = await axios({
          method: "DELETE",
          url: `${UPDATE_AND_DELETE_URL}/${userIds[id]}.json`,
          auth: auth
        });
        dispatch(getUsers(0));
        dispatch({ type: DELETE_USERS_SUCCESS, payload: data.items });
      } catch (error) {
        dispatch({ type: DELETE_USERS_FAILURE, payload: error });
      }
    }
  };
};

export const RESET_STATE = "RESET_STATE";
export const resetState = () => {
  return dispatch => {
    dispatch({ type: RESET_STATE });
  };
};
