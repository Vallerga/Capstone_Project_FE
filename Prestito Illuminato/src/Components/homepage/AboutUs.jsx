import { Col, Container, Row } from "react-bootstrap";
import { FaHandsHelping } from "react-icons/fa";
import { GiGreekTemple } from "react-icons/gi";
import { FcReading, FcOnlineSupport } from "react-icons/fc";

const AboutUs = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="d-flex">
            <div className="backBox pt-4">
              <h2 className="logoColorDark">Cosa pensano di noi</h2>
              <FcReading className="reader" />{" "}
            </div>
            <div className="marginTop d-flex">
              <div className="d-flex flex-column align-items-center justify-content-evenly squareBox shadow-lg me-3 me-xxl-5 px-3">
                <FaHandsHelping className="mt-3 homeIcon logoColorDark" />
                <div className="logoColorDark smallFont">AFFIDABILE</div>
                <div className="ms-0 ms-xxl-4">
                  Abbiamo più di <strong>100.000 clienti</strong> e più di 2{" "}
                  <strong>miliardi</strong> di euro erogati in prestiti
                </div>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-evenly squareBox shadow-lg me-3 me-xxl-5 px-3">
                <GiGreekTemple className="mt-3 homeIcon logoColorDark" />
                <div className="logoColorDark smallFont">MIGLIOR SERVIZIO</div>
                <div className="ms-0 ms-xxl-4">
                Premiati come <strong>miglior</strong> servizio social lending in italia
                </div>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-evenly squareBox shadow-lg me-3 me-xxl-5 px-3">
                <FcOnlineSupport className="mt-3 homeIcon logoColorDark" />
                <div className="logoColorDark smallFont">100% ONLINE</div>
                <div className="ms-0 ms-xxl-4">
                Puoi ottenere il nostro prestito <strong>comodamente da casa</strong>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
