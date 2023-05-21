// normalize import
import "normalize.css/normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container} from "react-bootstrap";
import EstimationPage from "./Components/EstimationPage";
import NavCustom from "./Components/NavCustom";
import FooterCustom from "./Components/FooterCustom";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavCustom />
        <Container className="mainContainer">          
              <Routes>
                <Route path="/" element={<Home />} />  
                <Route path="/EstimationPage/" element={<EstimationPage />} />
              </Routes>
        </Container>
        <FooterCustom />
      </BrowserRouter>
    </>
  );
}

export default App;
