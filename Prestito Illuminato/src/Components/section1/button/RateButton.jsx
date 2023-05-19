import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRateFixOrVarAction } from "../../../redux/actions";

const RatingButton = ({ ButtonType, setting, selected, handleButtonClick }) => {
  let cssClass = setting;
  const dispatch = useDispatch();

  // using Redux
  const rateFixOrVar = useSelector((state) => state.LoanRequest.rateFixOrVar);
  if (rateFixOrVar === ButtonType) {
    // console.log("rateFixOrVar: ", rateFixOrVar);
    // console.log("rate: ", ButtonType);
    cssClass += " selectedRate";
  } else if (rateFixOrVar === "Fisso" || rateFixOrVar === "Variabile") {
    // console.log("button isn't selected")
  } else {
    console.log("the rating button doesn't work correctly")
  }

  // using standard Props propagation
  /* if (selected) {
    cssClass += " selectedRate";
  } */

  return (
    <div
      onClick={() => {
        /* console.log("click event"); */
        // handleButtonClick(ButtonType) // <--- event for lifting method
        dispatch(setRateFixOrVarAction(ButtonType)); // <--- update REDUX store
      }}
      className={cssClass}
    >
      <span className="rateButtonFont">{ButtonType}</span>
    </div>
  );
};

export default RatingButton;
