import { Col, Row } from "react-bootstrap";
import YearButton from ".//button/YearButton";

const Years = () => {
  return (
    <Row>
        <p className="text-center text-xxl-start fs-5 mb-3">Durata (anni)</p>
      <Col className="mb-3 d-flex">
        <YearButton
          type={"5"}
          setting={"first duration text-center "}
        />

        <YearButton
          type={"10"}
          setting={"second duration text-center "}
        />

        <YearButton
          type={"15"}
          setting={"third duration text-center "}
        />
        <YearButton
          type={"20"}
          setting={"fourth duration text-center "}
        />
        <YearButton
          type={"25"}
          setting={"fifth duration text-center "}
        />
        <YearButton
          type={"30"}
          setting={"sixth duration text-center "}
        />
      </Col>
    </Row>
  );
};

export default Years;
