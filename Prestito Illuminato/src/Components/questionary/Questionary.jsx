import { Button, Col, Container, Row } from "react-bootstrap";

const Questionary = () => {
  const questionArray = [
    {
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
      type: "multiple",
      question: "Fra quanti mesi vuoi comprare casa?",
      answers: ["0-3 mesi", "3-6 mesi", "6-12 mesi", "oltre 12 mesi"],
    },
    {
      type: "multiple",
      question: "Da quante persone sarà composto il tuo nucleo famigliare?",
      answers: ["1", "2", "3", "4", "5", "6"],
    },
    {
      type: "multiple",
      question: "quante sono le persone con reddito?",
      answers: ["0-3 mesi", "3-6 mesi", "6-12 mesi", "oltre 12 mesi"],
    },
    {
      type: "multiple",
      question: "quante sono le persone con reddito?",
      answers: ["1", "2", "3", "4", "5", "6"],
    },
    {
      type: "multiple",
      question: "In quale comune vuoi comprare casa?",
      answers: ["Roma", "Milano", "Napoli", "Palermo", "Genova", "altro"],
    },
    {
      type: "module",
      question: "Per ogni intestatario indicare",
      answers: [
        "Data di nascita (giorno, mese, anno)",
        "Tipo di reddito (determinato, indeterminato, partita iva, pensionato)",
        "Numero mensilità",
        "Ammontare mensilità",
      ],
    },
    {
      type: "multiple",
      question: "Quanti saranno gli intestatari del mutuo?",
      answers: ["1", "2", "3", "4", "5", "6"],
    },
    {
      type: "multiple",
      question: "Quale finalità avrà il tuo mutuo?",
      answers: ["Prima Casa", "Seconda Casa", "Surroga"],
    },
  ];
  /* let questionCounter = 0;
  let questionBuffer; */
  return (
    <Container className="mainRow container-fluid gradientContainer homePageBorder rounded-4 mt-4 mb-5">
      <Row className="d-flex flex-column align-items-center px-5 logoColorDark">
        <Col>
          <h1 className="title-questionary">QUESTIONARIO</h1>
          {questionArray &&
            questionArray.map((schedule) => {              
              return (
                <>
                  <h2>{schedule.question}</h2>
                  {schedule.answers.map((answer) => {
                    return (
                      <Button className="questionButton mt-4" variant="primary">
                        {answer}
                      </Button>
                    );
                  })}
                </>
              );
            })}
          {/* <Button className="questionButton mt-4" variant="primary">
            Ho già fatto una proposta proposta
          </Button>
          <Button className="questionButton mt-4" variant="primary">
            risposta 1
          </Button>
          <Button className="questionButton mt-4" variant="primary">
            risposta 1
          </Button>
          <Button className="questionButton mt-4" variant="primary">
            risposta 1
          </Button>
          <Button className="questionButton mt-4" variant="primary">
            risposta 1
          </Button>
          <Button className="questionButton mt-4" variant="primary">
            risposta 1
          </Button> */}
          <div className="py-5">Domanda numero 3</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Questionary;
