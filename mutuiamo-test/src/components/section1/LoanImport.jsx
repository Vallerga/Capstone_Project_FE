import { Col, Row } from "react-bootstrap";
import CircleButton from ".//button/CircleButton";
import { useSelector } from "react-redux";

const LoanImport = ({ loan, total, onClickHandler }) => {
  const actualLoanRequest = useSelector((state) => state.LoanRequest.actualLoanRequest);
  return (
    <Row className="text-center text-xxl-start py-3">
      <Col xs={12}>
        <p>Importo mutuo</p>
      </Col>
      <Col
        xs={12}
        className="fs-4 d-flex flex-column flex-xxl-row justify-content-between align-items-center"
      >
        <div className="d-flex align-items-center pb-3 pb-xxl-0">
          <p>
            <strong>
              {actualLoanRequest}
              <span className="ms-1">€</span>
            </strong>
          </p>
        </div>
        <div className="d-flex">
          <CircleButton
            whatIs={"loanRequest"}
            actualImport={loan}            
            onClickHandler={onClickHandler}
            type={"+"}
            setting={"circleButton text-center"}
          />
          <CircleButton
            whatIs={"loanRequest"}
            actualImport={loan}
            onClickHandler={onClickHandler}
            type={"-"}
            setting={"ms-3 me-xxl-5 circleButton text-center"}
          />
        </div>
      </Col>
    </Row>
  );
};

export default LoanImport;
