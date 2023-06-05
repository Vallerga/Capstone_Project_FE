import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMonthlyRateAction } from "../../../redux/actions";
import VisibleForm from "./VisibleForm";

function Amount() {
  const [monthlyRate, setmonthlyRate] = useState(0);
  const [decimal, setDecimal] = useState("");

  const monthlyVisualManager = (value) => {
    setmonthlyRate(value);
    setDecimal(() => {
      let buffer = value - Math.floor(value);
      return buffer.toString().slice(2, 4);
    });
  };

  const dispatch = useDispatch();

  let TAEGStore = useSelector((state) => state.estimation.LoanRequest.TAEG);
  let yearStore = useSelector((state) => state.estimation.LoanRequest.year);
  let monthlyRateStore = useSelector((state) => state.estimation.LoanRequest.monthlyRate);
  let actualLoanRequestStore = useSelector((state) => state.estimation.LoanRequest.actualLoanRequest);
  let checkStore = useSelector((state) => state.estimation.LoanRequest);
  console.debug("THIS IS THE STORE: ", checkStore);

  //
  const mounthlyAmountFromStore = useCallback(() => {
    const r = TAEGStore / 100 / 12;
    const n = yearStore * 12;
    const monthlyRateCalculated =
      (actualLoanRequestStore * (r * Math.pow(1 + r, n))) /
      (Math.pow(1 + r, n) - 1);
    dispatch(setMonthlyRateAction(monthlyRateCalculated));    
    setmonthlyRate(monthlyRateStore);
    monthlyVisualManager(monthlyRateStore);
  }, [TAEGStore, yearStore, monthlyRateStore, actualLoanRequestStore, dispatch]);

  useEffect(() => {
    mounthlyAmountFromStore();
  }, [mounthlyAmountFromStore]);

  return (
    <>
      <div className="text-center mb-4">
        <span className="bigFont fw-bold">{Math.floor(monthlyRate)},</span>
        <span className="middleFont">{decimal}</span>
        <span className="smallFont ms-1 Greytext">€/mese</span>
      </div>
      <VisibleForm />
    </>
  );
}

export default Amount;
