import {SAVE_USERID} from "../actions";

const initialState = {
  userToken: null,
  userName: null,
  userId: null,
};

const security = (state = initialState, action) => {
  switch (action.type) {
      case "CHECK_TOKEN_REDUCER":
        return {
          ...state,
          userToken: action.payload,
        };        
        case "SAVE_USERNAME":
          return {
            ...state,
            userName: action.payload,
          }
          case SAVE_USERID:
            return {
              ...state,
              userId: action.payload,
            }
    default:
      return state;
  }
};

export default security;
