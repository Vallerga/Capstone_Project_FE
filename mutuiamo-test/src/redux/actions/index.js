export const SET_ACTUAL_LOAN_REQUEST = "SET_ACTUAL_LOAN";
export const SET_ACTUAL_TOTAL_IMPORT = "SET_ACTUAL_TOTAL_IMPORT";
export const SET_RATE_FIX_OR_VARIABLE = "SET_RATE_FIX_OR_VARIABLE";
export const SET_RATE = "SET_RATE";
export const SET_TAEG = "SET_TAEG";
export const SET_YEAR = "SET_YEAR";
export const SET_SUSTAINABILITY = "SET_SUSTAINABILITY";
export const SET_MONTHLYRATE = "SET_MONTHLYRATE";

export const setLoanAction = (loan) => {
  return {
    type: SET_ACTUAL_LOAN_REQUEST,
    payload: loan,
  };
};

export const setTotalImportAction = (totalImport) => {
  return {
    type: SET_ACTUAL_TOTAL_IMPORT,
    payload: totalImport,
  };
};

export const setRateFixOrVarAction = (rateFixOrVar) => {
  return {
    type: SET_RATE_FIX_OR_VARIABLE,
    payload: rateFixOrVar,
  };
};

export const setRateAction = (rate) => {
  return {
    type: SET_RATE,
    payload: rate,
  };
};

export const setTAEGAction = (TAEG) => {
  return {
    type: SET_TAEG,
    payload: TAEG,
  };
};

export const setYearAction = (year) => {
  return {
    type: SET_YEAR,
    payload: year,
  };
};

export const setSustainabilityAction = (sustainability) => {
  return {
    type: SET_SUSTAINABILITY,
    payload: sustainability,
  };
};

export const setMonthlyRateAction = (monthlyRate) => {
  return {
    type: SET_MONTHLYRATE,
    payload: monthlyRate,
  };
};

