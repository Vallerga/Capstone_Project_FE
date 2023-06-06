import { Button, Col, Container, Row } from "react-bootstrap";
import { CgChart } from "react-icons/cg";
import { FaCoins, FaHandHoldingWater } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const CompareLoan = () => {
  let dispatch = useDispatch();
  let questionary = useSelector((state) => state.questionary.questionary);

  const startQuestionaryHandler = () => {
    // do the fetch
    dispatch({
      type: "GO_QUESTIONARY",
      payload: true,
    });
  };

  if (questionary) {
    return <Navigate to="/EstimationPage" />;
  }

  return (
    <Container className="mainRow container-fluid section homePageBorder rounded-4 mt-4 mb-5">
      <Row className="d-flex flex-column align-items-center px-0 px-lg-5">
        <Col>
          <div>
            <h2>Confronta finanziamenti e prestiti online</h2>
            <div
              onClick={startQuestionaryHandler}
              className="d-md-none middleFont logoColorDark brandButton5 d-flex justify-content-between align-items-center py-2 px-3 m-3"
            >
              <span className="me-2">PRESTITI PERSONALIZZATI</span>{" "}
              <FaCoins className="homeIcon" />
            </div>
            <div
              onClick={startQuestionaryHandler}
              className="d-md-none middleFont logoColorDark brandButton5 d-flex justify-content-between align-items-center py-2 px-3 m-3"
            >
              <span className="me-2">CESSIONE DEL QUINTO</span>{" "}
              <CgChart className="homeIcon" />
            </div>
            <div
              onClick={startQuestionaryHandler}
              className="d-md-none middleFont logoColorDark brandButton5 d-flex justify-content-between align-items-center py-2 px-3 m-3"
            >
              <span className="me-2">PRESTITO LIQUIDITA'</span>{" "}
              <FaHandHoldingWater className="homeIcon" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <img
              className="moneyLogo d-none d-xl-inline-block me-5"
              src={require("../../assets/image/Money.jpg")}
              alt="Money"
            />
            <div className="d-none homeCard d-md-flex flex-column justify-content-between mx-3">
              <h3>Prestiti Personali</h3>
              <p>confronta prestiti personali per ogni finalità e risparmia.</p>
              <FaCoins className="homeIcon mt-3 align-self-center logoColorBright" />
              <Button
                className="brandButton3 mt-3 align-self-stretch"
                variant="primary"
                onClick={startQuestionaryHandler}
              >
                PREVENTIVI
              </Button>
            </div>
            <div className="d-none homeCard d-md-flex flex-column justify-content-between mx-3">
              <h3>Cessione del quinto</h3>
              <p>
                Condizioni vantaggiose: scopri quanto risparmi con la cessione.
              </p>
              <CgChart className="homeIcon mt-3 align-self-center logoColorBright" />
              <Button
                className="brandButton3 mt-3 align-self-stretch"
                variant="primary"
                onClick={startQuestionaryHandler}
              >
                PREVENTIVI
              </Button>
            </div>
            <div className="d-none homeCard d-md-flex flex-column justify-content-between mx-3">
              <h3>prestito Liquidità</h3>
              <p>
                Ottieni un finanziamento non vincolato all'acquisto di un
                determinato bene o servizio.
              </p>
              <FaHandHoldingWater className="homeIcon mt-3 align-self-center logoColorBright" />
              <Button
                className="brandButton3 mt-3 align-self-stretch"
                variant="primary"
                onClick={startQuestionaryHandler}
              >
                PREVENTIVI
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CompareLoan;
