const initialState = {
  adminToken: null,
  userToken: null,
  userName: null,
};

const security = (state = initialState, action) => {
  switch (action.type) {
      case "CHECK_ADMIN_TOKEN_REDUCER":
        return {
          ...state,
          adminToken: action.payload,
        };
        case "CHECK_USER_TOKEN_REDUCER":
          return {
            ...state,
            userToken: action.payload,
          };
        case "SAVE_USERNAME":
          return {
            ...state,
            userName: action.payload,
          }
    default:
      return state;
  }
};

export default security;
