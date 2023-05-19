export const SET_ACTUAL_LOAN_REQUEST = "SET_ACTUAL_LOAN";
export const SET_ACTUAL_TOTAL_IMPORT = "SET_ACTUAL_TOTAL_IMPORT";
export const SET_RATE_FIX_OR_VARIABLE = "SET_RATE_FIX_OR_VARIABLE";
export const SET_RATE = "SET_RATE";
export const SET_TAEG = "SET_TAEG";
export const SET_YEAR = "SET_YEAR";
export const SET_SUSTAINABILITY = "SET_SUSTAINABILITY";
export const SET_MONTHLYRATE = "SET_MONTHLYRATE";

export const setLoanAction = (loan) => {
  /* console.log("loan is: ", loan) */
  return {
    type: SET_ACTUAL_LOAN_REQUEST,
    payload: loan,
  };
};

export const setTotalImportAction = (totalImport) => {
  /* console.log("totalImport is: ", totalImport) */
  return {
    type: SET_ACTUAL_TOTAL_IMPORT,
    payload: totalImport,
  };
};

export const setRateFixOrVarAction = (rateFixOrVar) => {
  /* console.log("rateFixOrVar is: ", rateFixOrVar) */
  return {
    type: SET_RATE_FIX_OR_VARIABLE,
    payload: rateFixOrVar,
  };
};

export const setRateAction = (rate) => {
  /* console.log("rate is: ", rate) */
  return {
    type: SET_RATE,
    payload: rate,
  };
};

export const setTAEGAction = (TAEG) => {
  /* console.log("TAEG is: ", TAEG) */
  return {
    type: SET_TAEG,
    payload: TAEG,
  };
};

export const setYearAction = (year) => {
  /* console.log("year is: ", year) */
  return {
    type: SET_YEAR,
    payload: year,
  };
};

export const setSustainabilityAction = (sustainability) => {
  /* console.log("sustainability is: ", sustainability) */
  return {
    type: SET_SUSTAINABILITY,
    payload: sustainability,
  };
};

export const setMonthlyRateAction = (monthlyRate) => {
  /* console.log("sustainability is: ", monthlyRate) */
  return {
    type: SET_MONTHLYRATE,
    payload: monthlyRate,
  };
};

