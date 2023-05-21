const initialState = {
  questionResult: true,
};

const questionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_QUESTIONARY_REDUCER":
      return {
        ...state,
        questionResult: action.payload,
      };

    default:
      return state;
  }
};

export default questionaryReducer;
