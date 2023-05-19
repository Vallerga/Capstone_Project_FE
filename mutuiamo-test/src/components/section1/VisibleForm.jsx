import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { AiFillInfoCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const VisibleForm = ({ tasso, TAEG }) => {
  const [decimaletasso, setDecimaleTasso] = useState("");
  const [decimaleTAEG, setDecimaleTAEG] = useState("");
  const rateStore = useSelector((state) => state.LoanRequest.rate);
  const TAEGStore = useSelector((state) => state.LoanRequest.TAEG);

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
  // use tasso and TAEG props if you want to use props
  useEffect(() => {
    gestoreTasso(rateStore);
    gestoreTAEG(TAEGStore);    
  }, [rateStore, TAEGStore]);

  return (    
      <Row className="fs-6">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            Miglior Tasso <AiFillInfoCircle className="infoIcon fs-4 ms-2 d-none d-md-inline-block" />
          </div>
          <div className="middleFont me-5">
            <strong>
              <span>{Math.floor(rateStore)},</span> {/* use tasso props if you want to use props */}
              {decimaletasso}%
            </strong>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            TAEG <AiFillInfoCircle className="infoIcon fs-4 ms-2 d-none d-md-inline-block" />
          </div>
          <div className="smallFont me-5">
            <span>{Math.floor(TAEG)},</span> {/* use TAEG props if you want to use props */}
            {decimaleTAEG}%
          </div>
        </div>
        <div className="align-self-start mb-3">
          Sostenibilità della rata
          <AiFillInfoCircle className="infoIcon fs-4 ms-2 d-none d-md-inline-block" />
        </div>
      </Row>    
  );
};

export default VisibleForm;
