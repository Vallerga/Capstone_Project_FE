import { AiFillStar } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AsideProfile = () => {
  const [buttonState, setButtonState] = useState("false");
  let userName = useSelector((state) => state.security.userName);
  const dispatch = useDispatch();
  const handleHistory = () => {
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
  if (buttonState === "true") {
    return <Navigate to="/Home" />;
  }

  return (
    <>
      <div className="rounded-4 section d-flex flex-column align-items-center pt-5 my-4 me-3">
        <div className="d-flex flex-column align-items-center px-xl-5">
          <div>
            <img
              className="portrait"
              src={require("../../../assets/image/Portrait.jpeg")}
              alt="profile portrait"
            />
          </div>
          <h2>
            Ciao {userName}! Sono Antonio, il tuo Credit Advisor di Prestito illuminato
          </h2>
          <div className="d-flex align-items-center justify-content-center">
            <p className="lightGreytext text-center">
              <span className="star">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
              5.0 | 54 recensioni
            </p>
          </div>
          <p className="normalDarkText text-center p-4">
            In base alle informazione che hai fornito, ecco la tua stima:
          </p>
        </div>
        <hr className="align-self-stretch" />
        <Button
          onClick={handleHistory}
          className="brandButton1 align-self-stretch"
          variant="primary"
        >
          TORNA ALLA HOMEPAGE
        </Button>
      </div>
      <div className="d-flex justify-content-center mt-4 mb-4"></div>
      <div className="d-flex justify-content-center align-items-center trustPilotText">
        Eccezionale 4.7 su 5{" "}
        <span className="greenStar">
          <AiFillStar />
        </span>
        <span className="trustPilotBold">TrustPilot</span>
      </div>
    </>
  );
};

export default AsideProfile;
