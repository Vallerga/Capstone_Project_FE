import { useDispatch, useSelector } from "react-redux";
import { setLoanAction, setTotalImportAction } from "../../../redux/actions";

const CircleButton = ({
  whatIs,
  actualImport,
  onClickHandler,
  type,
  setting,
}) => {
  let cssClass = setting;
  let changer = 10000;
  let maxImport = 1000000;

  // method using REDUX
  const dispatch = useDispatch();
  let actualLoanRequest = useSelector(
    (state) => state.estimation.LoanRequest.actualLoanRequest
  );

  let actualTotalImport = useSelector(
    (state) => state.estimation.LoanRequest.actualTotalImport
  );

  const reduxImportSetter = () => {
    if (whatIs === "loanRequest") {
      if (type === "+") {
        if (actualLoanRequest + changer > actualTotalImport) {
          alert("Loan request cannot be greater than total import immobile");
          return "Loan request cannot be greater than total import immobile";
        }
        actualLoanRequest += changer;
        dispatch(setLoanAction(actualLoanRequest));
        console.log("loanRequest del bottone", actualLoanRequest);
      } else if (type === "-") {
        if (actualLoanRequest - changer < 0) {
          alert("Loan request cannot be less than 0€");
          return "Loan request cannot be less than 0€";
        }
        actualLoanRequest -= changer;
        dispatch(setLoanAction(actualLoanRequest));
        console.log("loanRequest del bottone", actualLoanRequest);
      }
    } else if (whatIs === "totalImportImmobile") {
      if (type === "+") {
        if (actualTotalImport + changer > maxImport) {
          alert(`Total import immobile cannot be more than ${maxImport}`);
          return `Total import immobile cannot be more than ${maxImport}`;
        }
        actualTotalImport += changer;
        dispatch(setTotalImportAction(actualTotalImport));
        console.log("totalImportImmobile del bottone", actualTotalImport);
      } else if (type === "-") {
        if (actualTotalImport - changer < actualLoanRequest) {
          alert("Total import immobile cannot be less than loan request");
          return "Total import immobile cannot be less than loan request";
        } else if (actualTotalImport - changer < 0) {
          alert("Total import immobile be less than 0€");
          return "Total import immobile be less than 0€";
        }
        actualTotalImport -= changer;
        dispatch(setTotalImportAction(actualTotalImport));
        console.log("totalImportImmobile del bottone", actualTotalImport);
      }
    }
  };

  return (
    <div
      onClick={() => {
        /* console.log("click event"); */
        //onClickHandler(whatIs, actualImport, 10000, type); <--- method using lifting state

        reduxImportSetter();
      }}
      className={cssClass}
    >
      <span>{type}</span>
    </div>
  );
};

export default CircleButton;
