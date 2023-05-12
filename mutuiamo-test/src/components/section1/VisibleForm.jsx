import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { AiFillInfoCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const VisibleForm = ({ tasso, TAEG }) => {
  const [decimaletasso, setDecimaleTasso] = useState("");
  const [decimaleTAEG, setDecimaleTAEG] = useState("");
  const rateStore = useSelector((state) => state.LoanRequest.rate);
  const TAEGStore = useSelector((state) => state.LoanRequest.TAEG);
  const sustainabilityStore = useSelector((state) => state.LoanRequest.sustainability);

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
      <Row className="fs-6">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            Miglior Tasso <AiFillInfoCircle className="infoIcon fs-4 ms-2" />
          </div>
          <div className="fs-5 me-5">
            <strong>
              <span>{Math.floor(tasso)},</span>
              {decimaletasso}%
            </strong>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            TAEG <AiFillInfoCircle className="infoIcon fs-4 ms-2" />
          </div>
          <div className="me-5">
            <span>{Math.floor(TAEG)},</span>
            {decimaleTAEG}%
          </div>
        </div>
        <div className="align-self-start mb-3">
          Sostenibilità della rata
          <AiFillInfoCircle className="infoIcon fs-4 ms-2" />
        </div>
      </Row>    
  );
};

export default VisibleForm;
