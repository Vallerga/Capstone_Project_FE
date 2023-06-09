import { useCallback, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "./TableComponent";
import { Navigate } from "react-router-dom";

const ReportHistory = () => {
  const dispatch = useDispatch(); 

  const LinkHomePage = () => {
    setButtonState("true");
    dispatch({
      type: "NEXT_QUESTION_REDUCER",
      payload: 0,
    });
    dispatch({
      type: "GO_QUESTIONARY",
      payload: false,
    });
  };

  const URL = "http://localhost:8080/api/reports";
  
  const [buttonState, setButtonState] = useState("false");
  const [reports, setReports] = useState(null);

  const username = useSelector((state) => state.security.userName);
  const userToken = useSelector((state) => state.security.userToken);

  const reportFetch = useCallback(async () => {
    try {
      const response = await fetch(URL, {
        headers: {
          Authorization: userToken,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const results = await response.json();
        let userResults = results.filter(
          (report, i) => {
            return report.user.username === username
          }
        );
        
        setReports(userResults);

      } else {
        alert(
          `errore durante download reports, response status: ${response.status}`
        );
      }

    } catch (error) {
      alert(`errore durante download reports: ${error}`);
    }
  }, [userToken, username]);

  useEffect(() => {
    reportFetch();
  }, [reportFetch]);

  if (buttonState === "true") {
    return <Navigate to="/Home" />;
  }

  return (
    <Container className="container-fluid section rounded-4 mt-4 mb-5">
      <Row className="d-flex flex-column align-items-center">
        <Col
          xs={12}
          className="d-flex flex-column align-items-center px-5 py-3"
        >
          <h1 className="d-none d-lg-block">STORICO MUTUI</h1>
          <h2 className="d-lg-none">STORICO MUTUI</h2>
          <TableComponent tableValue={reports} />
          <Button
            onClick={LinkHomePage}
            className="brandButton5"
            variant="primary"
          >
            RITORNA ALLA HOMEPAGE
          </Button>
        </Col>        
      </Row>
    </Container>
  );
};

export default ReportHistory;
