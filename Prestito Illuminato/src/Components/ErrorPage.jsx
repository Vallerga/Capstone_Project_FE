import { Button, Container, Row } from "react-bootstrap";

const ErrorPage = () => {
  return (
    <Container className="mainRow container-fluid section homePageBorder rounded-4 mt-4 mb-5">
      <Row className="d-flex flex-column justify-content-center align-items-center px-5 errorPage">
        <h2>URL NON SUPPORTATO! RITORNA ALLA HOMEPAGE O CHIAMA L'ASSISTENZA</h2>
        <Button
              className="brandButton3 mt-5 align-self-stretch"
              variant="primary"
            >TORNA ALL'HOMEPAGE
        </Button>
        </Row>
    </Container>
  );
};

export default ErrorPage;
