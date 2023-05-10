import { useEffect, useState } from "react";
import VisibleForm from "./VisibleForm";

const InvisibleForm = ({ onMensileChange }) => {
  const [importoMutuo, setImportoMutuo] = useState(100000);
  const [tasso, setTasso] = useState(0.036);
  const [TAEG, setTAEG] = useState(0.0387);
  const [durata, setDurata] = useState(25);
  const [importoMensile, setImportoMensile] = useState(0);
  const [tassoPercentuale, setTassoPercentuale] = useState(2);
  const [TAEGPercentuale, setTAEGPercentuale] = useState(3);
  const [sostenibilità, setSostenibilità] = useState(3);

  const calculateImportoMensile = () => {
    const r = TAEG / 12;
    const n = durata * 12;
    const ImportoMensile =
      (importoMutuo * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    setImportoMensile(ImportoMensile);
    onMensileChange(ImportoMensile);
    settingVisibleForm(tasso, TAEG, sostenibilità);
  };

  const settingVisibleForm = (param1, param2, param3) => {
    let param = param1 * 100;    
    setTassoPercentuale(param);
    param = param2 * 100;    
    setTAEGPercentuale(param)    
    setSostenibilità(param3);
  }

  const calcolaImportoMensileAutomatico = () => {
    const r = TAEG / 12;
    const n = durata * 12;
    const ImportoMensile =
      (importoMutuo * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    setImportoMensile(ImportoMensile);
    onMensileChange(ImportoMensile);
    settingVisibleForm(tasso, TAEG, sostenibilità);
  };

  useEffect(() => {
    calcolaImportoMensileAutomatico();
  });
  
  return (
    <>
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
        <button onClick={calculateImportoMensile}>
          Calcola import mensile
        </button>
        <div>Importo mensile: {importoMensile.toFixed(2)}€</div>
      </div>
      <VisibleForm tasso={tassoPercentuale} TAEG={TAEGPercentuale} sostenibilità={sostenibilità} />
    </>
  );
};

export default InvisibleForm;
