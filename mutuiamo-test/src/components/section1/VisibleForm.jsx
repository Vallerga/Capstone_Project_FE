import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { AiFillInfoCircle } from "react-icons/ai";

const VisibleForm = ({ tasso, TAEG, sostenibilità }) => {
  const [decimaletasso, setDecimaleTasso] = useState("");
  const [decimaleTAEG, setDecimaleTAEG] = useState("");

  const gestoreTasso = (value) => {
    setDecimaleTasso(() => {
      let buffer = value - Math.floor(value);
      return buffer.toString().slice(2, 4);
    });
  };

  const gestoreTAEG = (value) => {
    setDecimaleTAEG(() => {
      let buffer = value - Math.floor(value);
      return buffer.toString().slice(2, 4);
    });
  };

  useEffect(() => {
    gestoreTasso(tasso);
    gestoreTAEG(TAEG);
  }, [tasso, TAEG]);

  return (
    <>
      <Row className="fs-6">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            Miglior Tasso <AiFillInfoCircle className="infoIcon fs-5 ms-2" />
          </div>
          <div className="fs-5">
            <strong>
              <span>{Math.floor(tasso)},</span>
              {decimaletasso}%
            </strong>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            TAEG <AiFillInfoCircle className="infoIcon fs-5 ms-2" />
          </div>
          <div>
            <span>{Math.floor(TAEG)},</span>
            {decimaleTAEG}%
          </div>
        </div>
        <div className="align-self-start mb-3">
          Sostenibilità della rata
          <AiFillInfoCircle className="infoIcon fs-5 ms-2" />
        </div>
      </Row>
    </>
  );
};

export default VisibleForm;
