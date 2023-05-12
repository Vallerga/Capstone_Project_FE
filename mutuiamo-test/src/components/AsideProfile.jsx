import { AiFillStar, AiFillApple } from "react-icons/ai";
import { Button } from "react-bootstrap";

const AsideProfile = () => {
  return (
    <>
      <div className="rounded-4 section d-flex flex-column align-items-center pt-5 my-4 me-3">
        <div className="d-flex flex-column align-items-center px-xl-5">
          <div>
            <img
              className="portrait"
              src={require("../assets/image/Portrait.jpeg")}
              alt="profile portrait"
            />
          </div>
          <h2>Ciao Antonio! Sono Gabriele, il tuo Credit Advisor Mutuiamo</h2>
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
        <Button className="redButton align-self-stretch" variant="danger">
          MOSTRAMI I MUTUI
        </Button>
      </div>
      <div className="d-flex justify-content-center mt-4 mb-4">
        <div className="appleLogo d-flex align-items-center me-3">
          <div className="appleIcon">
            <AiFillApple />
          </div>
          <div>
            <p>scarica su</p>
            <p className="bigText">App Store</p>
          </div>
        </div>
        <div className="GoogleLogo d-flex align-items-center">
          <div className="">
            <img
              className="googleIcon"
              src="https://cdn-icons-png.flaticon.com/512/732/732208.png"
              alt="google logo"
            />
          </div>
          <div>
            <p>DISPONIBILE SU</p>
            <p className="bigText">Google Play</p>
          </div>
        </div>
      </div>
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
