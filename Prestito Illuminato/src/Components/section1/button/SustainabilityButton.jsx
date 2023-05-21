import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSustainabilityAction, setYearAction } from "../../../redux/actions";

const SustainabilityButton = ({
  type,
  setting,
  checker,
  handleButtonClick,
}) => {
  let cssClass = setting;
  const sustainability = useSelector((state) => state.estimation.LoanRequest.sustainability);
  const dispatch = useDispatch();
  let WhoIsSelected = sustainability;

  // connect year duration button with sustainability
  const connectSustainabilityYearFun = () => {
    if(type === "Bassa") {
      /* console.log(`dispatch: ${type}`) */
      dispatch(setYearAction(25))
    } else if(type === "Media") {
      /* console.log(`dispatch: ${type}`) */
      dispatch(setYearAction(15))
    } else if(type === "Alta") {
      /* console.log(`dispatch: ${type}`) */
      dispatch(setYearAction(5))
    } else {
      console.log("Sustainability Button doesn't work correctly")
      return "Sustainability Button doesn't work correctly";
    }
  }
  //let WhoIsSelected = checker; // <--- activate this line if you want to use the props

  // check witch button is selected
  if (WhoIsSelected === "Bassa" && cssClass === "bassa text-center") {
    /* console.log(`bottone ${type}`) */
    cssClass += " bassaSost";
  } else if (WhoIsSelected === "Media" && cssClass === "media text-center") {
    /* console.log(`bottone ${type}`) */
    cssClass += " mediaSost";
  } else if (WhoIsSelected === "Alta" && cssClass === "alta text-center") {
    /* console.log(`bottone ${type}`) */
    cssClass += " altaSost";
  } else if (WhoIsSelected === "Alta" || WhoIsSelected === "Media" || WhoIsSelected === "Bassa") {
    /* console.log("Button not selected, type è: ", type) */
  } else {
    console.log("handleButtonClick function doesn't work correctly!");
  }

  return (
    <div
      onClick={() => {
        /* console.log({ type }); */
        // handleButtonClick(type); // <--- activate this line if you want to use the props
        dispatch(setSustainabilityAction(type))
        connectSustainabilityYearFun()               
      }}
      className={cssClass}
    >
      <span>{type}</span>
    </div>
  );
};

export default SustainabilityButton;
