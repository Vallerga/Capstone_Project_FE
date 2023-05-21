import { useDispatch, useSelector } from "react-redux";
import {
  setSustainabilityAction,
  setYearAction,
} from "../../../redux/actions/index";
import { useEffect, useState } from "react";

const YearButton = ({ type, setting, checker, yearSelector }) => {
  // let cssClass = setting;
  const [cssClass, setCssClass] = useState(setting);
  const dispatch = useDispatch();
  const year = useSelector((state) => state.estimation.LoanRequest.year);
  // let sustainability = useSelector((state) => state.estimation.LoanRequest.sustainability);
  let WhoIsSelected = year;

  useEffect(() => {
    if (year === Number(type)) {
      setCssClass(setting + " yearSelected");
    } else {
      setCssClass(setting);
    }
  }, [year, type, setting]);

  // console.log("WhoIsSelected è: ", WhoIsSelected);
  // console.log("Number(year) è: ", Number(year));
  //let WhoIsSelected = checker; // <--- activate this line if you want to use the props

  // check witch button is selected
  const connectSustainabilityYear = () => {    
    if (WhoIsSelected === 5 && cssClass === "first duration text-center ") {
      setCssClass(cssClass + " yearSelected");
      console.log("i'm selected, cssClass is: ",cssClass )
      dispatch(setSustainabilityAction("Alta"));
      console.log("sono attivo: 5, Alta");
    } else if (WhoIsSelected === 10 && cssClass === "second duration text-center ") {
      setCssClass(cssClass + " yearSelected");
      console.log("i'm selected, cssClass is: ",cssClass )      
      dispatch(setSustainabilityAction("Alta"));
      console.log("sono attivo: 10, Alta");
    } else if (WhoIsSelected === 15 && cssClass === "third duration text-center ") {
      setCssClass(cssClass + " yearSelected");
      console.log("i'm selected, cssClass is: ",cssClass )
      dispatch(setSustainabilityAction("Media"));
      console.log("sono attivo: 15, Media");
    } else if (WhoIsSelected === 20 && cssClass === "fourth duration text-center ") {
      setCssClass(cssClass + " yearSelected");
      console.log("i'm selected, cssClass is: ",cssClass )
      dispatch(setSustainabilityAction("Media"));
      console.log("sono attivo: 20, Media");
    } else if (WhoIsSelected === 25 && cssClass === "fifth duration text-center ") {
      setCssClass(cssClass + " yearSelected");
      console.log("i'm selected, cssClass is: ",cssClass )
      dispatch(setSustainabilityAction("Bassa"));
      console.log("sono attivo: 25, Bassa");
    } else if (WhoIsSelected === 30 && cssClass === "sixth duration text-center ") {
      setCssClass(cssClass + " yearSelected");
      console.log("i'm selected, cssClass is: ",cssClass )
      dispatch(setSustainabilityAction("Bassa"));
      console.log("sono attivo: 30, Bassa");
    } else if (WhoIsSelected === 5 || WhoIsSelected === 10 || WhoIsSelected === 15 ||
      WhoIsSelected === 20 || WhoIsSelected === 25 || WhoIsSelected === 30) {
      setCssClass(setting);
      //console.log("button not selected");
    } else {
      console.log("yearSelector function doesn't work correctly");
    }
  };
  return (
    <div
      onClick={() => {
        /* console.log({ type }); */
        // yearSelector(type); // <--- activate this line if you want to use the props
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
