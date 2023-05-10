import React, { useState } from "react";
import InvisibleForm from "./InvisibleForm";

function Amount() {
  const [importoMensile, setImportoMensile] = useState(0);
  const [decimale, setDecimale] = useState("");

  const gestoreMensile = (value) => {
    setImportoMensile(value);
    setDecimale(() => {
      let buffer = value - Math.floor(value);
      return buffer.toString().slice(2,4);
    });
  };

  return (
    <>
      <div className="mb-4">
        <span className="fs-1 fw-bold">{Math.floor(importoMensile)},</span>
        <span className="fs-4 fw-bold">{decimale}</span>
        <span className="fs-5 ms-1 Greytext">€/mese</span>
      </div>
      <InvisibleForm onMensileChange={gestoreMensile} />
    </>
  );
}

export default Amount;
