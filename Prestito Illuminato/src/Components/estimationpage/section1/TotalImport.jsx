import { Col, Row } from "react-bootstrap";
import CircleButton from "./button/CircleButton";
import { useSelector } from "react-redux";

const TotalImport = ({ loan, total, onClickHandler }) => {
  let actualLoanRequest = useSelector((state) => state.estimation.LoanRequest.actualLoanRequest);
  let actualTotalImport = useSelector((state) => state.estimation.LoanRequest.actualTotalImport);
  return (
    <Row className="text-center text-xxl-start py-3">
      <Col xs={12}>
        <p>Valore Immobile</p>
      </Col>
      <Col
        xs={12}
        className="fs-4 d-flex flex-column flex-xxl-row justify-content-between align-items-center"
      >
        <div className="d-flex align-items-center pb-3 pb-xxl-0">
          <p>
            <strong>
              {actualTotalImport}
              <span className="ms-1">€</span>
            </strong>
          </p>
          <p className="ms-4 p-2 fs-6 percentBox">
            {Math.floor((actualLoanRequest / actualTotalImport) * 100)}{/* {Math.floor((loan / total) * 100)} props implementation */}
            <span className="">%</span>
          </p>
        </div>
        <div className="d-flex">
          <CircleButton
            whatIs={"totalImportImmobile"}
            actualImport={total}
            onClickHandler={onClickHandler}
            type={"+"}
            setting={"circleButton text-center"}
          />
          <CircleButton
            whatIs={"totalImportImmobile"}
            actualImport={total}
            onClickHandler={onClickHandler}
            type={"-"}
            setting={"ms-3 me-xxl-5 circleButton text-center"}
          />
        </div>
      </Col>
    </Row>
  );
};

export default TotalImport;
