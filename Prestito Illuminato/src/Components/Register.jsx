import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Button, Col } from "react-bootstrap";

const URL = "http://localhost:8080/api/auth/signin"; // <--- TODO: da verificare

const Register = () => {
  let dispatch = useDispatch();  

  
  if (null) {
    return <Navigate to="/signup-success" />; // <--- TODO: da fare
  }

  return (
    <div className="d-flex loginTest windowComponent">
      <div className="loginImgComponent d-flex align-items-center justify-content-center">
        <img
          className="loginLogo"
          src={require("../assets/image/Loan_login.png")}
          alt="loginImg"
        />
      </div>
      <div className="formComponent d-flex flex-column align-content-center justify-content-center ">
        <Col xs={12} className="mb-4">
          <input type="text" placeholder="inserisci username" />
        </Col>
        <Col xs={12}>
          <input type="password" placeholder="inserisci password" />
        </Col>
        <Button
          className="brandButton4" 
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};
/* onClick={loginHandler} */
export default Register;
