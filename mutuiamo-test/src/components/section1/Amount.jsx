import React, { useEffect, useState } from "react";
import InvisibleForm from "./InvisibleForm";
import { useDispatch, useSelector } from "react-redux";
import { setMonthlyRateAction } from "../../redux/actions";

function Amount() {
  const [importoMensile, setImportoMensile] = useState(0);
  const [decimale, setDecimale] = useState("");

  // mounthly amount calculated with props
  const gestoreMensile = (value) => {
    setImportoMensile(value);
    setDecimale(() => {
      let buffer = value - Math.floor(value);
      return buffer.toString().slice(2,4);
    });
  };
  const dispatch = useDispatch();
  let TAEGStore = useSelector((state) => state.LoanRequest.TAEG)
  let yearStore = useSelector((state) => state.LoanRequest.year)
  let monthlyRateStore = useSelector((state) => state.LoanRequest.monthlyRate)
  let actualLoanRequestStore = useSelector((state) => state.LoanRequest.actualLoanRequest)
  let checkStore = useSelector((state) => state.LoanRequest)
  console.log("THIS IS THE STORE: ", checkStore)

  // 
  const mounthlyAmountFromStore = () => {
    const r = (TAEGStore / 100) / 12;
    const n = yearStore * 12;
    const monthlyRateCalculated =
      (actualLoanRequestStore * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    dispatch(setMonthlyRateAction(monthlyRateCalculated));
    console.log("MENSILITA CALCOLATA MALE? ", monthlyRateCalculated)
    setImportoMensile(monthlyRateStore);
    gestoreMensile(monthlyRateStore);
    // settingVisibleForm(rateStore, TAEGStore);
  
  };

  useEffect(() => {
    mounthlyAmountFromStore();
  },[TAEGStore, yearStore, monthlyRateStore, actualLoanRequestStore]);

  return (
    <>
      <div className="text-center mb-4">
        <span className="bigFont fw-bold">{Math.floor(importoMensile)},</span>
        <span className="fs-3 fw-bold">{decimale}</span>
        <span className="fs-5 ms-1 Greytext">€/mese</span>
      </div>
      <InvisibleForm /* onMensileChange={gestoreMensile} // props function */ />
    </>
  );
}

export default Amount;
