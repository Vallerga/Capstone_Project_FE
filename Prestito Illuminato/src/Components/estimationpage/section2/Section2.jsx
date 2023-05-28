import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Section2 = () => {
  // Go to ReportHistory page
  const [buttonState, setButtonState] = useState("false");
  let userName = useSelector((state) => state.security.userName);

  const handleHistory = () => {
    setButtonState("true");
  };

  if (buttonState === "true") {
    return <Navigate to="/ReportHistory" />;
  }

  return (
    <Container className="container-fluid p-5 section rounded-4 mb-5">
      <Row className="d-flex flex-column align-items-center p-0 px-lg-5">
        <h2 className="section2Title">
          {userName}, ora che hai una stima, vai al dettaglio dei mutui.
        </h2>
        <div className="py-2 section2Card text-center">
          <p className="pt-4 section2Text">
            Scopri le banche che offrono questi tassi e ottieni supporto
            gratuito fino all'ottenimento del mutuo.
          </p>
          <Button
            className="brandButton3 align-self-stretch"
            variant="primary"
            onClick={handleHistory}
          >
            VISUALIZZA STORICO MUTUI
          </Button>
          <p className="fs-6 Greytext">Accesso diretto. Nessun vincolo.</p>
          <div className="d-flex flex-column align-items-center py-3">
            <div className="creditCard d-flex flex-column align-items-start">
              <h3 className="creditCardTitle  px-4 pt-2 mb-0 d-flex text-center text-xl-start flex-column flex-xl-row align-items-center">
                INTESA{" "}
                <img
                  className="cardLogo1 d-none d-xl-inline-block"
                  src={require("../../../assets/image/Intesa.png")}
                  alt="Intesa Logo"
                />{" "}
                &nbsp;SANPAOLO
              </h3>
              <p className="px-4 d-none d-md-inline-block">Mutuo in tasca</p>
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
                  src={require("../../../assets/image/credit_agricole.png")}
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
                    src={require("../../../assets/image/BNL.jpg")}
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
            onClick={handleHistory}
          >
            VISUALIZZA STORICO MUTUI
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default Section2;
