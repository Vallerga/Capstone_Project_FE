import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSustainabilityAction,
  setYearAction,
} from "../../../../redux/actions";

const SustainabilityButton = ({ type, setting }) => {
  
  const dispatch = useDispatch();
  
  const sustainability = useSelector((state) => state.estimation.LoanRequest.sustainability);

  let WhoIsSelected = sustainability;
  let cssClass = setting;

  // connect year duration button with sustainability
  const connectSustainabilityYearFun = () => {
    if (type === "Bassa") {
      dispatch(setYearAction(25));
    } else if (type === "Media") {
      dispatch(setYearAction(15));
    } else if (type === "Alta") {
      dispatch(setYearAction(5));
    } else {
      console.log("connectSustainabilityYearFun Button doesn't work correctly");
    }
  };

  if (WhoIsSelected === "Bassa" && cssClass === "bassa text-center") {
    cssClass += " bassaSost";
  } else if (WhoIsSelected === "Media" && cssClass === "media text-center") {
    cssClass += " mediaSost";
  } else if (WhoIsSelected === "Alta" && cssClass === "alta text-center") {
    cssClass += " altaSost";
  } else if (
    WhoIsSelected === "Alta" ||
    WhoIsSelected === "Media" ||
    WhoIsSelected === "Bassa"
  ) {
    // console.log("Button not selected, type is: ", type)
  } else {
    console.debug("SustainabilityButton function doesn't work correctly!");
  }

  return (
    <div
      onClick={() => {
        dispatch(setSustainabilityAction(type));
        connectSustainabilityYearFun();
      }}
      className={cssClass}
    >
      <span>{type}</span>
    </div>
  );
};

export default SustainabilityButton;
