// normalize import
import "normalize.css/normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./Components/Home";
import NavCustom from "./Components/NavCustom";
import FooterCustom from "./Components/FooterCustom";
import AsideProfile from "./Components/AsideProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavCustom />
        <Container className="mainContainer">
          <Row className="mainRow dflex">
            <Col xs={12} lg={5}>
              <AsideProfile />
            </Col>
            <Col xs={12} lg={7}>
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
