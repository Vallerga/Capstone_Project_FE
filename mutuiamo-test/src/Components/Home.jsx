import { Container, Row } from "react-bootstrap";
import RateBar from "./section1/RateBar";
import Amount from "./section1/Amount";
import SustainabilityBar from "./section1/SustainabilityBar";
import Years from "./section1/Years";
import LoanImport from "./section1/LoanImport";
import TotalImport from "./section1/TotalImport";
import { useState } from "react";
import { useSelector } from 'react-redux'

const Home = () => {
  const [loanRequest, setLoanRequest] = useState(100000);
  const [totalImportImmobile, setTotalImportImmobile] = useState(200000);

  const LoanRequest = useSelector((state) => state.LoanRequest);
  console.log("LoanRequest is:", LoanRequest)

  // METHOD SECTION 1
  const circleButtonModifier = (whatIs, actualImport, changer, type ) => {
    /* console.log("start circleButtonModifier") */
    if (whatIs === "loanRequest") {
      if (type === "+") {
        if(loanRequest + changer > totalImportImmobile){
          alert("Loan request cannot be greater than total import immobile");
          return "Loan request cannot be greater than total import immobile";
        }
        setLoanRequest(actualImport + changer);
      } else if (type === "-") {
        if(loanRequest - changer < 0){
          alert("Loan request cannot be less than 0€");
          return "Loan request cannot be less than 0€";
        }
        setLoanRequest(actualImport - changer);
      } else {
        console.log("loanRequest function doesn't work");
      }
    } else if (whatIs === "totalImportImmobile") {
      if (type === "+") {
        setTotalImportImmobile(actualImport + changer);
      } else if (type === "-") {
        if(totalImportImmobile - changer < loanRequest){
          alert("Total import immobile cannot be less than loan request");
          return "Total import immobile cannot be less than loan request";
        } else if (totalImportImmobile - changer < 0) {
          alert("Total import immobile be less than 0€");
          return "Total import immobile be less than 0€";
        }
        setTotalImportImmobile(actualImport - changer);
      } else {
        console.log("totalImportImmobile function doesn't work");
      }
    } else {
      console.log("CircleButtonModificator function doesn't work");
    }
  };

  return (
    // SECTION 1
    <Container className="container-fluid p-0 sectionContainer section rounded-4 section my-4">
      <Row className="d-flex flex-column align-items-center px-5">
        <p className="fs-5 mt-5 text-center">
          <strong>Tipologia Tasso</strong>
        </p>
        <RateBar />
        <Amount />
        <SustainabilityBar />
        <hr className="hrSection1 px-5 me-5" />
        <Years />
        <hr className="hrSection1 px-5 me-5" />
        <LoanImport
          loan={loanRequest}
          total={totalImportImmobile}
          onClickHandler={circleButtonModifier}
        />
        <hr className="hrSection1 px-5 me-5" />
        <TotalImport
          loan={loanRequest}
          total={totalImportImmobile}
          onClickHandler={circleButtonModifier}
        />
        <hr className="hrSection1 px-5 me-5" />
        <p className="text-center pb-4">
          Le condizioni potrebbero variare in base al tuo ISEE
        </p>
      </Row>
    </Container>
  );
};

export default Home;
