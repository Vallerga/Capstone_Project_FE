import { useDispatch, useSelector } from "react-redux";
import {
  setSustainabilityAction,
  setYearAction,
} from "../../../../redux/actions/index";
import { useEffect, useState } from "react";

const YearButton = ({ type, setting }) => {
  const dispatch = useDispatch();

  const [cssClass, setCssClass] = useState(setting);
  const year = useSelector((state) => state.estimation.LoanRequest.year);

  let WhoIsSelected = year;

  useEffect(() => {
    if (year === Number(type)) {
      setCssClass(setting + " yearSelected");
    } else {
      setCssClass(setting);
    }
  }, [year, type, setting]);

  // check witch button is selected
  const connectSustainabilityYear = () => {
    if (WhoIsSelected === 5 && cssClass === "first duration text-center ") {
      setCssClass(cssClass + " yearSelected");
      dispatch(setSustainabilityAction("Alta"));
    } else if (
      WhoIsSelected === 10 &&
      cssClass === "second duration text-center "
    ) {
      setCssClass(cssClass + " yearSelected");
      dispatch(setSustainabilityAction("Alta"));
    } else if (
      WhoIsSelected === 15 &&
      cssClass === "third duration text-center "
    ) {
      setCssClass(cssClass + " yearSelected");
      dispatch(setSustainabilityAction("Media"));
    } else if (
      WhoIsSelected === 20 &&
      cssClass === "fourth duration text-center "
    ) {
      setCssClass(cssClass + " yearSelected");
      dispatch(setSustainabilityAction("Media"));
    } else if (
      WhoIsSelected === 25 &&
      cssClass === "fifth duration text-center "
    ) {
      setCssClass(cssClass + " yearSelected");
      dispatch(setSustainabilityAction("Bassa"));
    } else if (
      WhoIsSelected === 30 &&
      cssClass === "sixth duration text-center "
    ) {
      setCssClass(cssClass + " yearSelected");
      dispatch(setSustainabilityAction("Bassa"));
    } else if (
      WhoIsSelected === 5 ||
      WhoIsSelected === 10 ||
      WhoIsSelected === 15 ||
      WhoIsSelected === 20 ||
      WhoIsSelected === 25 ||
      WhoIsSelected === 30
    ) {
      setCssClass(setting);
      //console.log("button not selected");
    } else {
      console.debug(
        "connectSustainabilityYear function doesn't work correctly"
      );
    }
  };

  return (
    <div
      onClick={() => {
        connectSustainabilityYear();
        dispatch(setYearAction(Number(type)));
      }}
      className={cssClass}
    >
      <span>{type}</span>
    </div>
  );
};

export default YearButton;
