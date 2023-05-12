import {SET_ACTUAL_LOAN_REQUEST} from "../actions";
import {SET_ACTUAL_TOTAL_IMPORT} from "../actions";
import {SET_RATE_FIX_OR_VARIABLE} from "../actions";
import {SET_RATE} from "../actions";
import {SET_TAEG} from "../actions";
import {SET_YEAR} from "../actions";
import {SET_SUSTAINABILITY} from "../actions";
import {SET_MONTHLYRATE} from "../actions";


const initialState = {
  LoanRequest: {
    actualLoanRequest: 100000,
    actualtotalImport: 200000,
    rateFixOrVar: "fisso",
    rate: 3,
    TAEG: 4,
    year: 25,
    sustainability: "alta",
    monthlyRate: 500,
  },
  favourite: {
    list: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTUAL_LOAN_REQUEST:
      return {
        ...state,
        LoanRequest: {
          ...state.LoanRequest,
          actualLoanRequest: action.payload,
        },
      };
      case SET_ACTUAL_TOTAL_IMPORT:
      return {
        ...state,
        LoanRequest: {
          ...state.LoanRequest,
          actualtotalImport: action.payload,
        },
      };
      case SET_RATE_FIX_OR_VARIABLE:
      return {
        ...state,
        LoanRequest: {
          ...state.LoanRequest,
          rateFixOrVar: action.payload,
        },
      };
      case SET_RATE:
      return {
        ...state,
        LoanRequest: {
          ...state.LoanRequest,
          rate: action.payload,
        },
      };
      case SET_TAEG:
      return {
        ...state,
        LoanRequest: {
          ...state.LoanRequest,
          TAEG: action.payload,
        },
      };
    case SET_YEAR:
      return {
        ...state,
        LoanRequest: {
          ...state.LoanRequest,
          year: action.payload,
        },
      };
    case SET_SUSTAINABILITY:
      return {
        ...state,
        LoanRequest: {
          ...state.LoanRequest,
          sustainability: action.payload,
        },
      };
      case SET_MONTHLYRATE:
      return {
        ...state,
        LoanRequest: {
          ...state.LoanRequest,
          monthlyRate: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
