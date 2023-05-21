import { Button, Col, Container, Row } from "react-bootstrap";
import RateBar from "./section1/RateBar";
import Amount from "./section1/Amount";
import SustainabilityBar from "./section1/SustainabilityBar";
import Years from "./section1/Years";
import LoanImport from "./section1/LoanImport";
import TotalImport from "./section1/TotalImport";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineCheck } from "react-icons/ai";
import AsideProfile from "./AsideProfile";

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
  console.log("LoanRequest from home is:", LoanRequest);

  // METHOD USING LIFTING STATE UP (you need to active the props in the child button)
  const [loanRequest, setLoanRequest] = useState(100000);
  const [totalImportImmobile, setTotalImportImmobile] = useState(200000);
  const circleButtonModifier = (whatIs, actualImport, changer, type) => {
    //console.log("start circleButtonModifier")
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
    // console.log("LoanRequest from home is:", LoanRequest)
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
          {/* SECTION 2 */}
          <Container className="container-fluid p-5 section rounded-4 mb-5">
            <Row className="d-flex flex-column align-items-center p-0 px-lg-5">
              <h2 className="section2Title">
                Antonio, ora che hai una stima, vai al dettaglio dei mutui.
              </h2>
              <div className="py-2 section2Card text-center">
                <h2 className="pt-4 pb-1 section2CardTitle">
                  Visualizza i mutui nell'app{" "}
                  <span className="text-danger">(5)</span>
                </h2>
                <p className="section2Text">
                  Scopri le banche che offrono questi tassi e ottieni supporto
                  gratuito fino all'ottenimento del mutuo.
                </p>
                <Button
                  className="brandButton3 align-self-stretch"
                  variant="primary"
                >
                  VISUALIZZA STORICO MUTUI
                </Button>
                <p className="fs-6 Greytext">
                  Accesso diretto. Nessun vincolo.
                </p>
                <div className="d-flex flex-column align-items-center py-3">
                  <div className="creditCard d-flex flex-column align-items-start">
                    <h3 className="creditCardTitle  px-4 pt-2 mb-0 d-flex text-center text-xl-start flex-column flex-xl-row align-items-center">
                      INTESA{" "}
                      <img
                        className="cardLogo1 d-none d-xl-inline-block"
                        src={require("../assets/image/Intesa.png")}
                        alt="Intesa Logo"
                      />{" "}
                      &nbsp;SANPAOLO
                    </h3>
                    <p className="px-4 d-none d-md-inline-block">
                      Mutuo in tasca
                    </p>
                    <p className="blur d-none d-lg-inline-block ps-4 py-4">
                      <span className="bigFont">538</span>
                      <span className="middleFont">,60</span>
                      <span className="smallFont">€/mese</span>
                    </p>
                    <p className="blur d-none d-lg-inline-block ps-4 pb-2">
                      <span>tasso 3.60%</span>
                      <span>TEAG 3.87%</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center py-3">
                  <div className="creditCard pt-3 d-flex flex-column align-items-start">
                    <h3 className="creditCardTitle fs-5 px-4 pt-0 pt-xl-2 mb-0 d-flex align-items-center justify-content-around">
                      <img
                        className="cardLogo3 d-none d-xl-inline-block"
                        src={require("../assets/image/credit_agricole.png")}
                        alt="Intesa Logo"
                      />
                      <strong>CREDIT AGRICOLE</strong>
                    </h3>
                    <p className="px-4 d-none d-md-inline-block">
                      Mutui Giovani{" "}
                      <span className="d-none d-xl-inline-block">
                        Credit Agricole con CPI Vita
                      </span>
                    </p>
                    <p className="blur ps-4 py-4 d-none d-lg-inline-block">
                      <span className="bigFont">765</span>
                      <span className="middleFont">,00</span>
                      <span className="smallFont">€/mese</span>
                    </p>
                    <p className="blur ps-4 pb-2 d-none d-lg-inline-block">
                      <span>tasso 3.60%</span>
                      <span>TEAG 3.87%</span>
                    </p>
                  </div>
                </div>
                <div className="gradientDiv d-flex flex-column">
                  <div className="d-flex flex-column align-items-center py-3">
                    <div className="creditCard1 pt-3 d-flex flex-column align-items-start">
                      <h3 className="fs-5 text-center text-xl-start px-4 pt-2 mb-0 d-flex align-items-center justify-content-around">
                        <img
                          className="cardLogo3 d-none d-xl-inline-block"
                          src={require("../assets/image/BNL.jpg")}
                          alt="Intesa Logo"
                        />
                        <strong>BNL</strong>
                      </h3>
                      <p className="px-4 d-none d-xl-inline-block">
                        BNL Giovani Home
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  className="brandButton3 align-self-stretch"
                  variant="primary"
                >
                  VISUALIZZA STORICO MUTUI
                </Button>
              </div>
            </Row>
          </Container>
          {/* SECTION 3 */}
          <Container className="container-fluid p-5 section rounded-4 my-4">
            <Row className="d-flex flex-column align-items-center">
              <p className="greenText fs-5 text-center">Ricapitolando</p>
              <h2 className="section3Title">
                Come trovare il mutuo perfetto con Prestito illuminato
                <img
                  className="logo3 py-3 ms-3"
                  src={require("../assets/image/Prestito illuminato logo.png")}
                  alt="a"
                />
              </h2>
              <div className="d-flex justify-content-center py-4">
                <div className="smallBarCheck"></div>
                <div className="smallBarCheck"></div>
                <div className="smallBar"></div>
                <div className="smallBar"></div>
              </div>
              <div className="section3">
                <div className="d-flex flex-column flex-lg-row align-items-center">
                  <div className="tickBoxChecked me-lg-4 align-self-center align-self-lg-start d-flex align-items-center justify-content-center fs-4">
                    <AiOutlineCheck />
                  </div>
                  <div className="tickBoxText">
                    Fai il questionario in 2 minuti
                  </div>
                </div>
                <hr className="hrSection3" />
                <div className="d-flex flex-column flex-lg-row align-items-center">
                  <div className="tickBoxChecked1 align-self-center align-self-lg-start me-lg-4 d-flex align-items-center justify-content-center fs-4">
                    <AiOutlineCheck />
                  </div>
                  <div className="tickBoxText">Visualizza la tua stima</div>
                </div>
                <hr className="hrSection3" />
                <div className="d-flex flex-column flex-lg-row align-items-center">
                  <div className="tickBoxNotChecked align-self-center align-self-lg-start mb-3 mb-lg-0 me-lg-4 fs-4"></div>
                  <div>
                    <div className="tickBoxText">
                      Invia la tua richiesta al nostro centralino
                    </div>
                    <p className="d-none d-sm-inline-block fs-6 Greytext">
                      Visualizza i dettagli dei mutui e richiedi supporto
                      gratuito fino all'ottenimento.
                    </p>
                    <Button className="brandButton3" variant="primary">
                      FINALIZZA LA RICHIESTA
                    </Button>
                    <p className="text-center fs-6 Greytext">
                      Consultabile tutte le volte che vorrai.
                    </p>
                  </div>
                </div>
                <hr className="hrSection3" />
                <div className="d-flex flex-column flex-lg-row align-items-center">
                  <div className="tickBoxNotChecked1 align-self-center align-self-lg-start mb-3 mb-lg-0 me-lg-4 fs-4"></div>
                  <div>
                    <div className="tickBoxText">Parla con il tuo advisor</div>
                    <p className="d-none d-sm-inline-block fs-6 Greytext">
                      Fissa una consulenza telefonica senza vincoli per parlare
                      del mutuo e ricevere consigli e dritte.
                    </p>
                    <Button
                      className="brandButton4 align-self-stretch"
                      variant="outline-primary"
                    >
                      RICHIEDI CONSULENZA GRATUITA
                    </Button>
                    <p className="text-center fs-6 Greytext">
                      Zero vincoli. Zero costi di intermediazione.
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
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
