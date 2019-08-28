const initialState = { isLoading: false };

const app = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, isLoading: true };

    case "GET_USERS_FAILURE":
    case "GET_USERS_SUCCESS":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default app;
