// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRateFixOrVarAction } from "../../../../redux/actions";

const RatingButton = ({ ButtonType, setting}) => {
  let cssClass = setting;
  const dispatch = useDispatch();

  // using Redux
  const rateFixOrVar = useSelector((state) => state.estimation.LoanRequest.rateFixOrVar);
  if (rateFixOrVar === ButtonType) {
    cssClass += " selectedRate";
  } else if (rateFixOrVar === "Fisso" || rateFixOrVar === "Variabile") {    
  } else {
    console.log("the rating button doesn't work correctly")
  }
  return (
    <div
      onClick={() => {
        dispatch(setRateFixOrVarAction(ButtonType));
      }}
      className={cssClass}
    >
      <span className="rateButtonFont">{ButtonType}</span>
    </div>
  );
};

export default RatingButton;
