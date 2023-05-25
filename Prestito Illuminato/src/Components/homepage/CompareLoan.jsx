import { Button, Container, Row } from "react-bootstrap";
import { CgChart } from "react-icons/cg";
import { FaCoins, FaHandHoldingWater } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const CompareLoan = () => {

  let dispatch = useDispatch();
  let questionary = useSelector((state) => state.questionary.questionary)

  const startQuestionaryHandler = () => {
    // do the fetch
    dispatch({
      type: "GO_QUESTIONARY",
      payload: true,
    });
    // console.log(`fetch eseguita`);
  };

  if(questionary) {
    return <Navigate to="/Authorize/Questionary" />
  }

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
              onClick={startQuestionaryHandler}
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
              onClick={startQuestionaryHandler}
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
              onClick={startQuestionaryHandler}
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
