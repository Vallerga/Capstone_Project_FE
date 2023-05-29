import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const ErrorPage = () => {
  const [condition, setCondition] = useState(false);

  const handleErrorPage = () => {
    setCondition(true);
  };

  if (condition) {
    return <Navigate to="/" />;
  }
  return (
    <Container className="section homePageBorder rounded-4 mt-4 mb-5">
      <Row className="d-flex flex-column justify-content-center align-items-center">
        <h2>URL NON SUPPORTATO! RITORNA ALLA HOMEPAGE O CHIAMA L'ASSISTENZA</h2>
        <Button
          onClick={handleErrorPage}
          className="ErrorButton mb-5"
          variant="primary"
        >
          ACCEDI AL SITO
        </Button>
      </Row>
    </Container>
  );
};

export default ErrorPage;
