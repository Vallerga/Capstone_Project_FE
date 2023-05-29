import { useCallback, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "./TableComponent";
import { Navigate } from "react-router-dom";

const ReportHistory = () => {
  const username = useSelector((state) => state.security.userName);
  const [buttonState, setButtonState] = useState("false");
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
  const [reports, setReports] = useState(null);
  const adminToken = useSelector((state) => state.security.adminToken);
  const reportFetch = useCallback(async () => {
    try {
      const response = await fetch(URL, {
        headers: {
          Authorization: adminToken,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const results = await response.json();
        let userResults = results.filter(
          (reports) => reports.user.username === username
        );
        console.debug(`userResults: ${JSON.stringify(userResults, null, 2)}`);
        setReports(userResults);
      } else {
        alert(
          `errore durante download reports, response status: ${response.status}`
        );
      }
    } catch (error) {
      alert(`errore durante download reports: ${error}`);
    }
  }, [adminToken, username]);

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
          <h1>STORICO MUTUI</h1>
          <TableComponent tableValue={reports} />
          <Button
            onClick={LinkHomePage}
            className="brandButton5"
            variant="primary"
          >
            RITORNA ALLA HOMEPAGE
          </Button>
        </Col>
        {/* <div onClick={reportFetch}>CLICCAMI PER I REPORT</div>
        <div>{JSON.stringify(reports, null, 2)}</div> */}
      </Row>
    </Container>
  );
};

export default ReportHistory;
