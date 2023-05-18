import { Col, Row } from "react-bootstrap";
import YearButton from ".//button/YearButton";
import { useState } from "react";

const Years = () => {
  const [checker, setChecker] = useState("5");

  const yearSelector = (param) => {
    setChecker(param);
  };
  return (
    <Row className="">
        <p className="fs-5 mb-3">Durata (anni)</p>
      <Col className="mb-3 d-flex">
        <YearButton
          type={"5"}
          setting={"first duration text-center "}
          checker={checker}
          yearSelector={yearSelector}
        />

        <YearButton
          type={"10"}
          setting={"second duration text-center "}
          checker={checker}
          yearSelector={yearSelector}
        />

        <YearButton
          type={"15"}
          setting={"third duration text-center "}
          checker={checker}
          yearSelector={yearSelector}
        />
        <YearButton
          type={"20"}
          setting={"fourth duration text-center "}
          checker={checker}
          yearSelector={yearSelector}
        />
        <YearButton
          type={"25"}
          setting={"fifth duration text-center "}
          checker={checker}
          yearSelector={yearSelector}
        />
        <YearButton
          type={"30"}
          setting={"sixth duration text-center "}
          checker={checker}
          yearSelector={yearSelector}
        />
      </Col>
    </Row>
  );
};

export default Years;
