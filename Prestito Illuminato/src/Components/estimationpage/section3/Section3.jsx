import { Button, Container, Row } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";

const Section3 = () => {
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
  );
};

export default Section3;
