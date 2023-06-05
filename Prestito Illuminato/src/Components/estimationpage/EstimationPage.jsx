import { Col, Container, Row } from "react-bootstrap";
import RateBar from "./section1/RateBar";
import Amount from "./section1/Amount";
import SustainabilityBar from "./section1/SustainabilityBar";
import Years from "./section1/Years";
import LoanImport from "./section1/LoanImport";
import TotalImport from "./section1/TotalImport";
import AsideProfile from "./section1/AsideProfile";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";

const EstimationPage = () => {
  return (
    <>
      {/* SECTION 1 */}
      <Row className="mainRow dflex">
        <Col xs={12} lg={5}>
          <AsideProfile />
        </Col>
        <Col xs={12} lg={7}>
          <Container className="container-fluid section rounded-4 mt-4 mb-5">
            <Row className="d-flex flex-column align-items-center px-5">
              <p className="fs-5 mt-5 text-center">
                <strong>Tipologia Tasso</strong>
              </p>
              <RateBar />
              <Amount />
              <SustainabilityBar />
              <hr className="hrSection1 px-5 me-5" />
              <Years />
              <hr className="hrSection1 px-5 me-5" />
              <LoanImport/>
              <hr className="hrSection1 px-5 me-5" />
              <TotalImport/>
              <hr className="hrSection1 px-5 me-5" />
              <p className="text-center pb-4">
                Le condizioni potrebbero variare in base al tuo ISEE
              </p>
            </Row>
          </Container>
          <Section2 />
          <Section3 />
          <p className="text-center fs-6 Greytext credit">
            Il risultato della stima è indicativo. Il tasso indicato corrisponde
            al tasso più basso tra i prodotti di mutuo delle banche
            convenzionate di Prestito illuminato s.r.l. I dati finanziari
            effettivi saranno confermati dai singoli istituti di credito al
            momento della stipula. Questa stima non ha nessun valore ai fini
            della concessione del mutuo.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default EstimationPage;
