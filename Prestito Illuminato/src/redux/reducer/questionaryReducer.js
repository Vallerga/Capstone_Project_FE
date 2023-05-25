const initialState = {
  questionResult: true,
  index: 0,
  questionary: null,
  
};

const questionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_QUESTIONARY_REDUCER":
      return {
        ...state,
        questionResult: action.payload,
      };     
      case "NEXT_QUESTION_REDUCER":
        return {
          ...state,
          index: action.payload,
        };
        case "GO_QUESTIONARY":
          return {
            ...state,
            questionary: action.payload,
          }; 
    default:
      return state;
  }
};

export default questionaryReducer;
