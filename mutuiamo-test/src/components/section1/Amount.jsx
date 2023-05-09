import React, { useState } from "react";

function Amount() {
  const [importoMutuo, setImportoMutuo] = useState(100000);
  const [tasso, setTasso] = useState(0.036);
  const [TAEG, setTAEG] = useState(0.0387);
  const [durata, setDurata] = useState(25);
  const [importoMensile, setImportoMensile] = useState(0);

  const calculateImportoMensile = () => {
    const r = TAEG / 12;
    const n = durata * 12;
    const ImportoMensile =
      (importoMutuo * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    setImportoMensile(ImportoMensile);
  };

  return (
    <>
      <p className="mb-4">
        <span className="fs-1 fw-bold">538</span>
        <span className="fs-4 fw-bold">,32</span>
        <span className="fs-5 ms-1 Greytext">€/mese</span>
      </p>
      <div>
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
    </>
  );
}

export default Amount;
