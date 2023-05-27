// normalize import
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import EstimationPage from "./Components/estimationpage/EstimationPage";
import NavCustom from "./Components/NavCustom";
import FooterCustom from "./Components/FooterCustom";
import Home from "./Components/homepage/Home";
import Questionary from "./Components/questionaryPage/Questionary";
import Login from "./Components/security/Login";
import ErrorPage from "./Components/ErrorPage";
import Register from "./Components/security/Register";
import Protected from "./Components/security/Protected";
import { useSelector } from "react-redux";
import ReportHistory from "./Components/reportPage/ReportHystory";

function App() {
  const adminToken = useSelector((state) => state.security.adminToken);
  return (
    <>
      <BrowserRouter>
        <NavCustom />
        <Container className="mainContainer">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route
              path="/Home"
              element={
                <Protected isLoggedIn={adminToken}>
                  <Home />
                </Protected>
              }/>
            <Route
              path="/Questionary"
              element={
                <Protected isLoggedIn={adminToken}>
                  <Questionary />
                </Protected>
              }/>
            <Route
              path="/EstimationPage"
              element={
                <Protected isLoggedIn={adminToken}>
                  <EstimationPage />
                </Protected>
              }/>
              <Route
              path="/ReportHistory"
              element={
                <Protected isLoggedIn={adminToken}>
                  <ReportHistory />
                </Protected>
              }/>
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Container>
        <FooterCustom />
      </BrowserRouter>
    </>
  );
}

export default App;
