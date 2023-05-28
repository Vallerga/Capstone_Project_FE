import { Col, Container, Row } from "react-bootstrap";
import RateBar from "./section1/RateBar";
import Amount from "./section1/Amount";
import SustainabilityBar from "./section1/SustainabilityBar";
import Years from "./section1/Years";
import LoanImport from "./section1/LoanImport";
import TotalImport from "./section1/TotalImport";
import { useState } from "react";
import { useSelector } from "react-redux";
import AsideProfile from "./section1/AsideProfile";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";

const EstimationPage = () => {
  // METHOD SECTION 1
  // SELECTOR FOR ALL THE PROPERTY STORED WITH REDUX
  /* const actualLoanRequest = useSelector((state) => state.estimation.LoanRequest.actualLoanRequest);
  const actualTotalImport = useSelector((state) => state.estimation.LoanRequest.actualTotalImport);
  const rateFixOrVar = useSelector((state) => state.estimation.LoanRequest.rateFixOrVar);
  const rate = useSelector((state) => state.estimation.LoanRequest.rate);
  const TAEG = useSelector((state) => state.estimation.LoanRequest.TAEG);
  const year = useSelector((state) => state.estimation.LoanRequest.year);
  const sustainability = useSelector((state) => state.estimation.LoanRequest.sustainability);
  const monthlyRate = useSelector((state) => state.estimation.LoanRequest.monthlyRate); */
  const LoanRequest = useSelector((state) => state.estimation.LoanRequest);
  console.debug("LoanRequest from home is:", LoanRequest);

  // METHOD USING LIFTING STATE UP (you need to active the props in the child button)
  const [loanRequest, setLoanRequest] = useState(100000);
  const [totalImportImmobile, setTotalImportImmobile] = useState(200000);
  const circleButtonModifier = (whatIs, actualImport, changer, type) => {
    console.debug("circleButtonModifier started")
    if (whatIs === "loanRequest") {
      if (type === "+") {
        if (loanRequest + changer > totalImportImmobile) {
          alert("Loan request cannot be greater than total import immobile");
          return "Loan request cannot be greater than total import immobile";
        }
        setLoanRequest(actualImport + changer);
      } else if (type === "-") {
        if (loanRequest - changer < 0) {
          alert("Loan request cannot be less than 0€");
          return "Loan request cannot be less than 0€";
        }
        setLoanRequest(actualImport - changer);
      } else {
        console.log("loanRequest function doesn't work");
      }
    } else if (whatIs === "totalImportImmobile") {
      if (type === "+") {
        setTotalImportImmobile(actualImport + changer);
      } else if (type === "-") {
        if (totalImportImmobile - changer < loanRequest) {
          alert("Total import immobile cannot be less than loan request");
          return "Total import immobile cannot be less than loan request";
        } else if (totalImportImmobile - changer < 0) {
          alert("Total import immobile be less than 0€");
          return "Total import immobile be less than 0€";
        }
        setTotalImportImmobile(actualImport - changer);
      } else {
        console.log("totalImportImmobile function doesn't work");
      }
    } else {
      console.log("CircleButtonModificator function doesn't work");
    }    
  };
  
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
              <LoanImport
                loan={loanRequest}
                total={totalImportImmobile}
                onClickHandler={circleButtonModifier}
              />
              <hr className="hrSection1 px-5 me-5" />
              <TotalImport
                loan={loanRequest}
                total={totalImportImmobile}
                onClickHandler={circleButtonModifier}
              />
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
