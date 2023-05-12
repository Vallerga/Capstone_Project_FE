import React from "react";
import { useDispatch } from "react-redux";
import { setRateFixOrVarAction } from "../../redux/actions";

const RatingButton = ({ rate, setting, selected, handleButtonClick }) => {
  let cssClass = setting;
  const dispatch = useDispatch();
  
  if (selected) {
    cssClass += " selectedRate";
  }

  return (
    <div
      onClick={() => {
        /* console.log("click event"); */        
        handleButtonClick(rate)
        dispatch(setRateFixOrVarAction(rate))
      }}
      className={cssClass}
    >
      <span>{rate}</span>
    </div>
  );
};

export default RatingButton;