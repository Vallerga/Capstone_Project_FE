import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { Navigate } from "react-router-dom";

const AskNow = () => {
    const [startQuestionary, setStartQuestionary] = useState(false);
    const startQuestion = () => {
        setStartQuestionary(true);
    }

    if(startQuestionary) {
        return<Navigate to="/Questionary" />
    }

  return (
    <Container className="mainRow container-fluid section homePageBorder rounded-4 mt-4">
      <Row className="d-flex flex-column align-items-center px-5 marginBottom">
        <h1 className="text-center pt-5">COSA STAI ASPETTANDO?</h1>
        <div className="d-flex justify-content-center align-items-center">
          <BsFillPatchQuestionFill className="homeIcon logoColorBright" />
        <h2 className="pb-0">Unisciti ad oltre 100.000 utenti già supportati</h2>
            <BsFillPatchQuestionFill className="homeIcon logoColorBright" />
            </div>
          <Button
            onClick={startQuestion}
            className="ErrorButton pb-5 mb-5"
            variant="primary"
          >
            INIZIA SUBITO!
          </Button>
      </Row>
    </Container>
  );
};

export default AskNow;
