import { useEffect, useState } from "react";
import VisibleForm from "./VisibleForm";
import { useDispatch } from "react-redux";
import { setLoanAction, setMonthlyRateAction, setRateAction, setTAEGAction, setYearAction } from "../../redux/actions";

const InvisibleForm = ({ onMensileChange }) => {
  const dispatch = useDispatch();
  const [importoMutuo, setImportoMutuo] = useState(100000);
  const [tasso, setTasso] = useState(0.036);
  const [TAEG, setTAEG] = useState(0.0387);
  const [durata, setDurata] = useState(25);
  const [importoMensile, setImportoMensile] = useState(0);
  const [tassoPercentuale, setTassoPercentuale] = useState(2);
  const [TAEGPercentuale, setTAEGPercentuale] = useState(3);

  // function for dev purpose and testing
  const calculateImportoMensile = () => {
    const r = TAEG / 12;
    const n = durata * 12;
    const ImportoMensile =
      (importoMutuo * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    setImportoMensile(ImportoMensile);
    onMensileChange(ImportoMensile);
    settingVisibleForm(tasso, TAEG);
  };

  // convert value in percentage
  const settingVisibleForm = (param1, param2) => {
    let param = param1 * 100;
    setTassoPercentuale(param);
    param = param2 * 100;
    setTAEGPercentuale(param);
  };

  // function automatically call at the 1st render
  const calcolaImportoMensileAutomatico = () => {
    const r = TAEG / 12;
    const n = durata * 12;
    const ImportoMensile =
      (importoMutuo * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    setImportoMensile(ImportoMensile);
    onMensileChange(ImportoMensile);
    settingVisibleForm(tasso, TAEG);
  };

  /* useEffect(() => { // <--- activate for standard page setting
    calcolaImportoMensileAutomatico();
  }); */

  return (
    <>
      <VisibleForm
        tasso={tassoPercentuale}
        TAEG={TAEGPercentuale}        
      />
      <div className="d-none">
        Importo mutuo:
        <input
          type="number"
          value={importoMutuo}
          onChange={(e) => setImportoMutuo(e.target.value)}
        />
        Miglior tasso:
        <input
          type="number"
          step="0.01"
          value={tasso}
          onChange={(e) => setTasso(e.target.value)}
        />
        TAEG:
        <input
          type="number"
          step="0.01"
          value={TAEG}
          onChange={(e) => setTAEG(e.target.value)}
        />
        Durata (anni):
        <input
          type="number"
          value={durata}
          onChange={(e) => setDurata(e.target.value)}
        />
        <button
          onClick={() => {
            /* console.log("click event"); */
            // calculateImportoMensile(); // <--- activate for props version
            dispatch(setLoanAction(importoMutuo))
            dispatch(setRateAction(tasso))
            dispatch(setTAEGAction(TAEG))
            dispatch(setMonthlyRateAction(importoMensile))
            dispatch(setYearAction(durata))
          }}
        >
          Calcola import mensile
        </button>
        <div>Importo mensile: {importoMensile.toFixed(2)}€</div>
      </div>
    </>
  );
};

export default InvisibleForm;
