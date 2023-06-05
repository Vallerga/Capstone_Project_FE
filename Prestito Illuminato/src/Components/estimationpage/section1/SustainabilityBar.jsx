import SustainabilityButton from "./button/SustainabilityButton";
import { Col, Row } from "react-bootstrap";

const SustainabilityBar = () => {
  return (
    <Row>
      <Col className="sustainabilityBar mb-3 d-flex">
        <SustainabilityButton type={"Bassa"} setting={"bassa text-center"} />
        <SustainabilityButton type={"Media"} setting={"media text-center"} />
        <SustainabilityButton type={"Alta"} setting={"alta text-center"} />
      </Col>
    </Row>
  );
};

export default SustainabilityBar;
