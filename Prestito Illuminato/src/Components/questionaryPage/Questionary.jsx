import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Questionary = () => {
  const questionArray = [
    {
      id: 1,
      type: "multiple",
      question: "A che punto sei nella ricerca dell'immobile",
      answers: [
        "Ho appena iniziato a cercare",
        "Ne ho visitati alcuni",
        "Sto per fare un'offerta",
        "Ho già fatto una proposta",
        "Ho firmato il compromesso",
      ],
    },
    {
      id: 2,
      type: "multiple",
      question: "Fra quanti mesi vuoi comprare casa?",
      answers: ["0-3 mesi", "3-6 mesi", "6-12 mesi", "oltre 12 mesi"],
    },
    {
      id: 3,
      type: "multiple",
      question: "Da quante persone sarà composto il tuo nucleo famigliare?",
      answers: ["1", "2", "3", "4", "5", "6"],
    },
    {
      id: 4,
      type: "multiple",
      question: "quante sono le persone con reddito?",
      answers: ["0-3 mesi", "3-6 mesi", "6-12 mesi", "oltre 12 mesi"],
    },
    {
      id: 5,
      type: "multiple",
      question: "quante sono le persone con reddito?",
      answers: ["1", "2", "3", "4", "5", "6"],
    },
    {
      id: 6,
      type: "multiple",
      question: "In quale comune vuoi comprare casa?",
      answers: ["Roma", "Milano", "Napoli", "Palermo", "Genova", "altro"],
    },
    {
      id: 7,
      type: "multiple",
      question: "Qual'è la tipologia di reddito?",
      answers: [
        "determinato",
        "indeterminato",
        "partita iva",
        "pensionato",
        "invalidità",
        "vitalizio",
      ],
    },
    {
      id: 8,
      type: "multiple",
      question: "Quanti saranno gli intestatari del mutuo?",
      answers: ["1", "2", "3", "4", "5", "6"],
    },
    {
      id: 9,
      type: "multiple",
      question: "Quale finalità avrà il tuo mutuo?",
      answers: ["Prima Casa", "Seconda Casa", "Surroga"],
    },
  ];
  let dispatch = useDispatch();
  let index = useSelector((state) => state.questionary.index);
  const questionHandler = () => {
    // change question
    dispatch({
      type: "NEXT_QUESTION_REDUCER",
      payload: index + 1,
    });
  };

  if (index >= 9) {
    return <Navigate to="/EstimationPage" />;
  }

  return (
    <Container className="mainRow gradientContainer homePageBorder rounded-4 mt-5">
      <Row className="py-5 px-5 logoColorDark">
        <Col>
          <h1 className="titleQuestionary">QUESTIONARIO</h1>
          <h2 className="subtitleQuestionary">{questionArray[index].question}</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {questionArray[index].answers.map((answer, i) => {
              return (
                <Button
                  key={i}
                  onClick={questionHandler}
                  className="questionButton mt-4"
                  variant="primary"
                >
                  {answer}
                </Button>
              );
            })}
          </div>
          <div className="fs-2 pt-5">Domanda numero {index + 1}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Questionary;
