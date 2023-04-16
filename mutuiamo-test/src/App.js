// normalize import
import "normalize.css/normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./Components/Home";
import NavCustom from "./Components/NavCustom";
import FooterCustom from "./Components/FooterCustom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavCustom />
        <Container>
          <Row className="dflex">
            <Col xs={3} lg={2}></Col>
            <Col xs={9} lg={10}>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Col>
          </Row>
        </Container>
        <FooterCustom />
      </BrowserRouter>
    </>
  );
}

export default App;
