/* import { useCallback, useEffect, useState } from "react"; */
import { Button, Container, Row } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";
import { useSelector } from "react-redux";

const URLREPORT = "http://localhost:8080/api/reports";

const Section2 = () => {
  const LoanRequest = useSelector((state) => state.estimation.LoanRequest);
  const userToken = useSelector((state) => state.security.userToken);
  let userIdFromStore = useSelector((state) => state.security.userId);
  console.log("userIdFromStore: ", userIdFromStore)
  
  const bodyReport = {
    year: LoanRequest.year,
    actualLoanRequest: LoanRequest.actualLoanRequest,
    actualTotalImport: LoanRequest.actualTotalImport,
    rateFixOrVar: LoanRequest.rateFixOrVar,
    sustainability: LoanRequest.sustainability,
    rate: LoanRequest.rate,
    taeg: LoanRequest.TAEG,
    monthlyRate: LoanRequest.monthlyRate,
    user: {
      id: userIdFromStore,
    },
  };

  const handlePostReport = async () => {    
    console.log("userId: ", userIdFromStore)

    // create report
    try {
      const response = await fetch(URLREPORT, {
        method: "POST",
        headers: {
          token: userToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyReport),
      });      
      if (response.ok) {
        alert(`Salvataggio stima mutuo avvenuta corretamente!`);
      } else {
        alert(
          `errore durante il salvataggio stima mutuo, risposta del server: ${response.status}`
        );
      }
    } catch (error) {
      alert(
        `Salvataggio stima muotuo non avvenuta, chiedere assistenza: ${error}`
      );
    }
  };

  const handleAdvisor = () => {
    alert("Prenotazione completata! Un nostro consulente ti contatterà a breve!")
  }
  return (
    <Container className="container-fluid p-5 section rounded-4 my-4">
      <Row className="d-flex flex-column align-items-center">
        <p className="greenText fs-5 text-center">Ricapitolando</p>
        <h2 className="section3Title">
          Come trovare il mutuo perfetto con Prestito illuminato
          <img
            className="logo3 py-3 ms-3"
            src={require("../../../assets/image/Prestito illuminato logo.png")}
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
            <div className="tickBoxText">Fai il questionario in 2 minuti</div>
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
                Visualizza i dettagli dei mutui e richiedi supporto gratuito
                fino all'ottenimento.
              </p>
              <Button
                onClick={handlePostReport}
                className="brandButton3"
                variant="primary"
              >
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
                Fissa una consulenza telefonica senza vincoli per parlare del
                mutuo e ricevere consigli e dritte.
              </p>
              <Button
              onClick={handleAdvisor}
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
  );
};

export default Section2;
