import { Button, Col, Container, Row } from "react-bootstrap";
import { CgChart } from "react-icons/cg";
import { FaCoins, FaHandHoldingWater } from "react-icons/fa";

const CompareLoan = () => {
  return (
    <Container className="mainRow container-fluid section homePageBorder rounded-4 mt-4 mb-5">
      <Row className="d-flex flex-column align-items-center px-5">
        <h2>Confronta finanziamenti e prestiti online</h2>
        <div className="d-flex align-items-center">
          <img
            className="moneyLogo d-none d-xl-inline-block me-5"
            src={require("../../assets/image/Money.jpg")}
            alt="Money"
          />
          <div className="homeCard d-flex flex-column justify-content-between mx-3">
            <h3>Prestiti Personali</h3>
            <p>confronta prestiti personali per ogni finalità e risparmia.</p>
            <FaCoins className="homeIcon mt-3 align-self-center logoColorBright" />
            <Button
              className="brandButton3 mt-3 align-self-stretch"
              variant="primary"
            >
              PREVENTIVI
            </Button>
          </div>
          <div className="homeCard d-flex flex-column justify-content-between mx-3">
            <h3>Cessione del quinto</h3>
            <p>
              Condizioni vantaggiose: scopri quanto risparmi con la cessione.
            </p>
            <CgChart className="homeIcon mt-3 align-self-center logoColorBright" />
            <Button
              className="brandButton3 mt-3 align-self-stretch"
              variant="primary"
            >
              PREVENTIVI
            </Button>
          </div>
          <div className="homeCard d-flex flex-column justify-content-between mx-3">
            <h3>prestito Liquidità</h3>
            <p>
              Ottieni un finanziamento non vincolato all'acquisto di un
              determinato bene o servizio.
            </p>
            <FaHandHoldingWater className="homeIcon mt-3 align-self-center logoColorBright" />
            <Button
              className="brandButton3 mt-3 align-self-stretch"
              variant="primary"
            >
              PREVENTIVI
            </Button>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default CompareLoan;
