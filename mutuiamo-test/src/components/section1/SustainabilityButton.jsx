import React from "react";
import { useDispatch } from "react-redux";
import { setSustainabilityAction, setYearAction } from "../../redux/actions";

const SustainabilityButton = ({
  rate,
  setting,
  checker,
  handleButtonClick,
}) => {
  let cssClass = setting;
  const dispatch = useDispatch();

  if (checker === "Bassa" && cssClass === "bassa text-center") {
    /* console.log(`bottone ${rate}`) */
    cssClass += " bassaSost";
  } else if (checker === "Media" && cssClass === "media text-center") {
    /* console.log(`bottone ${rate}`) */
    cssClass += " mediaSost";
  } else if (checker === "Alta" && cssClass === "alta text-center") {
    /* console.log(`bottone ${rate}`) */
    cssClass += " altaSost";
  } else if (checker === "Alta" || checker === "Media" || checker === "Bassa") {
    /* console.log("Button not selected") */
  } else {
    console.log("handleButtonClick function doesn't work correctly!");
  }

  return (
    <div
      onClick={() => {
        /* console.log({ rate }); */
        handleButtonClick(rate);
        dispatch(setSustainabilityAction(rate))
        if(rate === "Bassa") {
          dispatch(setYearAction(10))
        } else if(rate === "Media") {
          dispatch(setYearAction(20))
        } else if(rate === "alta") {
          dispatch(setYearAction(30))
        } else {
          console.log("Sustainability Button doesn't work correctly")
          return "Sustainability Button doesn't work correctly";
        }
        
      }}
      className={cssClass}
    >
      <span>{rate}</span>
    </div>
  );
};

export default SustainabilityButton;
