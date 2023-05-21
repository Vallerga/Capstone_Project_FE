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
import Questionary from "./Components/questionary/Questionary";
import Login from "./Components/Login";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavCustom />
        <Container className="mainContainer">          
              <Routes>
                <Route path="/Authorize/Home" element={<Home />} />
                <Route path="/" element={<Login />}/>
                <Route path="/Authorize/Questionary/" element={<Questionary />}/>
                <Route path="/Authorize/EstimationPage/" element={<EstimationPage />} />
                <Route path="/*" element={<ErrorPage />} />
              </Routes>
        </Container>
        <FooterCustom />
      </BrowserRouter>
    </>
  );
}

export default App;
