import { useDispatch, useSelector } from "react-redux";
import {setYearAction} from "../../redux/actions/index"

const YearButton = ({ rate, setting, checker, yearSelector }) => {

  let cssClass = setting;
  const dispatch = useDispatch();
  const year = useSelector((state) => state.LoanRequest.year)
  
  // check witch button is selected
  if (checker === "5" && cssClass === "first duration text-center") {
    cssClass += " yearSelected";
  } else if (checker === "10" && cssClass === "second duration text-center") {
    cssClass += " yearSelected";
  } else if (checker === "15" && cssClass === "third duration text-center") {
    cssClass += " yearSelected";
  } else if (checker === "20" && cssClass === "fourth duration text-center") {
    cssClass += " yearSelected";
  } else if (checker === "25" && cssClass === "fifth duration text-center") {
    cssClass += " yearSelected";
  } else if (checker === "30" && cssClass === "sixth duration text-center") {
    cssClass += " yearSelected";
  } else if (
    checker === "5" ||
    checker === "10" ||
    checker === "15" ||
    checker === "20" ||
    checker === "25" ||
    checker === "30"
  ) {
    /* console.log("button not selected"); */
  } else {
    console.log("yearSelector function doesn't work correctly");
  }
  return (
    <div
      onClick={() => {
        /* console.log({ rate }); */        
        yearSelector(rate);
        dispatch(setYearAction(year));
      }}
      className={cssClass}
    >
      <span>{rate}</span>
    </div>
  );
};

export default YearButton;
