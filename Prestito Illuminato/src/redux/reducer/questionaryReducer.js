const initialState = {
  questionResult: true,
  adminToken: null,
  userToken: null,
};

const questionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_QUESTIONARY_REDUCER":
      return {
        ...state,
        questionResult: action.payload,
      };
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
    default:
      return state;
  }
};

export default questionaryReducer;
