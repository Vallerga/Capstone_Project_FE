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
        <h1 className="d-none d-sm-block text-center pt-5">COSA STAI ASPETTANDO?</h1>
        <h2 className="d-sm-none text-center pt-5">COSA STAI ASPETTANDO?</h2>
        <div className="d-flex justify-content-center align-items-center">
          <BsFillPatchQuestionFill className="d-none d-lg-inline-block homeIcon logoColorBright" />
        <h2 className="d-none logoColorDark d-sm-block pb-0">Unisciti ad oltre 100.000 utenti già supportati</h2>
        <h3 className="d-sm-none text-center">Unisciti ad oltre 100.000 utenti già supportati</h3>
            <BsFillPatchQuestionFill className="d-none d-lg-inline-block homeIcon logoColorBright" />
            </div>
            <Button
            onClick={startQuestion}
            className="d-lg-none brandButton5 pb-5 mb-5"
            variant="primary"
          >
            INIZIA SUBITO!
          </Button>
          <Button
            onClick={startQuestion}
            className="d-none d-lg-inline-block ErrorButton pb-5 mb-5"
            variant="primary"
          >
            INIZIA SUBITO!
          </Button>
      </Row>
    </Container>
  );
};

export default AskNow;
