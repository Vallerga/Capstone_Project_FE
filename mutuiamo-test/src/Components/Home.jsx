import { Button, Container, Row } from "react-bootstrap";
import RateBar from "./section1/RateBar";
import Amount from "./section1/Amount";
import SustainabilityBar from "./section1/SustainabilityBar";
import Years from "./section1/Years";
import LoanImport from "./section1/LoanImport";
import TotalImport from "./section1/TotalImport";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineCheck } from "react-icons/ai";

const Home = () => {
  // METHOD SECTION 1
  // SELECTOR FOR ALL THE PROPERTY STORED WITH REDUX
  /* const actualLoanRequest = useSelector((state) => state.LoanRequest.actualLoanRequest);
  const actualTotalImport = useSelector((state) => state.LoanRequest.actualTotalImport);
  const rateFixOrVar = useSelector((state) => state.LoanRequest.rateFixOrVar);
  const rate = useSelector((state) => state.LoanRequest.rate);
  const TAEG = useSelector((state) => state.LoanRequest.TAEG);
  const year = useSelector((state) => state.LoanRequest.year);
  const sustainability = useSelector((state) => state.LoanRequest.sustainability);
  const monthlyRate = useSelector((state) => state.LoanRequest.monthlyRate); */
  const LoanRequest = useSelector((state) => state.LoanRequest);
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
      <Container className="container-fluid p-0 sectionContainer section rounded-4 mt-4 mb-5">
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
      <Container className="container-fluid p-5 sectionContainer section rounded-4 mb-5">
        <Row className="d-flex flex-column align-items-center px-5">
          <h2 className="section2Title">
            Antonio, ora che hai una stima, vai al dettaglio dei mutui.
          </h2>
          <div className="py-2 section2Card text-center">
            <h2 className="pt-4 pb-1 fs-4">
              Visualizza i mutui nell'app{" "}
              <span className="text-danger">(5)</span>
            </h2>
            <p className="section2Text">
              Scopri le banche che offrono questi tassi e ottieni supporto
              gratuito fino all'ottenimento del mutuo.
            </p>
            <Button className="redButton2 align-self-stretch" variant="danger">
              SCARICA L'APP GRATUITA
            </Button>
            <p className="fs-6 Greytext">Accesso diretto. Nessun vincolo.</p>
            <div className="d-flex flex-column align-items-center py-3">
              <div className="creditCard d-flex flex-column align-items-start">
                <h3 className="creditCardTitle  px-4 pt-2 mb-0 d-flex align-items-center">
                  INTESA{" "}
                  <img
                    className="cardLogo1"
                    src={require("../assets/image/Intesa.png")}
                    alt="Intesa Logo"
                  />{" "}
                  SANPAOLO
                </h3>
                <p className="px-4">Mutuo in tasca</p>
                <p className="blur ps-4 py-4">
                  <span className="fs-1">538</span>
                  <span className="fs-3">,60</span>
                  <span className="fs-5">€/mese</span>
                </p>
                <p className="blur ps-4 pb-2">
                  <span>tasso 3.60%</span>
                  <span>TEAG 3.87%</span>
                </p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center py-3">
              <div className="creditCard pt-3 d-flex flex-column align-items-start">
                <h3 className="creditCardTitle fs-5 px-4 pt-2 mb-0 d-flex align-items-center justify-content-around">
                  <img
                    className="cardLogo3"
                    src={require("../assets/image/credit_agricole.png")}
                    alt="Intesa Logo"
                  />
                  <strong>CREDIT AGRICOLE</strong>
                </h3>
                <p className="px-4">
                  Mutio Giovani Credit Agricole con CPI Vita
                </p>
                <p className="blur ps-4 py-4">
                  <span className="fs-1">765</span>
                  <span className="fs-3">,00</span>
                  <span className="fs-5">€/mese</span>
                </p>
                <p className="blur ps-4 pb-2">
                  <span>tasso 3.60%</span>
                  <span>TEAG 3.87%</span>
                </p>
              </div>
            </div>
            <div className="gradientDiv d-flex flex-column">
              <div className="d-flex flex-column align-items-center py-3">
                <div className="creditCard1 pt-3 d-flex flex-column align-items-start">
                  <h3 className="fs-5 px-4 pt-2 mb-0 d-flex align-items-center justify-content-around">
                    <img
                      className="cardLogo3"
                      src={require("../assets/image/BNL.jpg")}
                      alt="Intesa Logo"
                    />
                    <strong>BNL</strong>
                  </h3>
                  <p className="px-4">BNL Giovani Home</p>
                </div>
              </div>
            </div>
            <Button className="redButton2 align-self-stretch" variant="danger">
              VISUALIZZA MUTUI IN APP
            </Button>
          </div>
        </Row>
      </Container>
      {/* SECTION 3 */}
      <Container className="container-fluid p-5 sectionContainer section rounded-4 my-4">
        <Row className="d-flex flex-column align-items-center">
          <p className="greenText fs-5 text-center">Ricapitolando</p>
          <h2 className="section3Title">
            Come trovare il mutuo perfetto con Mutuiamo
          </h2>
          <div className="d-flex justify-content-center py-4">
            <div className="smallBarCheck"></div>
            <div className="smallBarCheck"></div>
            <div className="smallBar"></div>
            <div className="smallBar"></div>
          </div>
          <div className="section3">
            <div className="d-flex align-items-center">
              <div className="tickBoxChecked me-4 d-flex align-items-center justify-content-center fs-4">
                <AiOutlineCheck />
              </div>
              <div className="tickBoxText">Fai il questionario in 2 minuti</div>
            </div>
            <hr className="hrSection3" />
            <div className="d-flex align-items-center">
              <div className="tickBoxChecked me-4 d-flex align-items-center justify-content-center fs-4">
                <AiOutlineCheck />
              </div>
              <div className="tickBoxText">Visualizza la tua stima</div>
            </div>
            <hr className="hrSection3" />
            <div className="d-flex align-items-center">
              <div className="tickBoxNotChecked align-self-start me-4 fs-4"></div>
              <div>
                <div className="tickBoxText">Scarica l'app di Mutuiamo</div>
                <p className="fs-6 Greytext">
                  Visualizza i dettagli dei mutui e richiedi supporto gratuito
                  fino all'ottenimento.
                </p>
                <Button className="redButton2" variant="danger">
                  SCARICA L'APP GRATUITA
                </Button>
                <p className="text-center fs-6 Greytext">Accesso diretto. Nessun vincolo.</p>
              </div>
            </div>
            <hr className="hrSection3" />
            <div className="d-flex align-items-center">
              <div className="tickBoxNotChecked1 align-self-start me-4 fs-4"></div>
              <div>
                <div className="tickBoxText">Parla con il tuo advisor</div>
                <p className="fs-6 Greytext">
                  Fissa una consulenza telefonica senza vincoli per parlare del
                  mutuo e ricevere consigli e dritte.
                </p>
                <Button
                  className="outlineButtonBlack align-self-stretch"
                  variant="outline-danger"
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
      <p className="text-center fs-6 Greytext credit">Il risultato della stima è indicativo. Il tasso indicato corrisponde al tasso più bassi tra i prodotti di mutuo delle banche convenzionate di Mutuiamo s.r.l. I dati finanziari effettivi saranno confermati dai singoli istituti di credito al momento della stipula. questa stima non ha nessun valore ai fini della concessione del mutuo.</p>
    </>
  );
};

export default Home;
