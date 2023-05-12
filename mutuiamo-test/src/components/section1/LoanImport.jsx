import { Col, Row } from "react-bootstrap";
import CircleButton from "./CircleButton";

const LoanImport = ({ loan, total, onClickHandler }) => {
  return (
    <Row className="py-3">
      <Col xs={12}>
        <p>Importo mutuo</p>
      </Col>
      <Col
        xs={12}
        className="fs-4 d-flex justify-content-between align-items-center"
      >
        <div className="d-flex align-items-center">
          <p>
            <strong>
              {loan}
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
            setting={"ms-3 me-5 circleButton text-center"}
          />
        </div>
      </Col>
    </Row>
  );
};

export default LoanImport;
