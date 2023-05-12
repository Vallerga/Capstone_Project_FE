import { useDispatch } from "react-redux";
import { setLoanAction, setTotalImportAction } from "../../redux/actions";

const CircleButton = ({
  whatIs,
  actualImport,
  onClickHandler,
  type,
  setting,
}) => {
  let cssClass = setting;
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        /* console.log("click event"); */
        onClickHandler(whatIs, actualImport, 10000, type);
        if(whatIs === "loanRequest") {
        dispatch(setLoanAction(actualImport))
        } else if (whatIs === "totalImportImmobile") {
          dispatch(setTotalImportAction(actualImport))
        }
      }}
      className={cssClass}
    >
      <span>{type}</span>
    </div>
  );
};

export default CircleButton;
