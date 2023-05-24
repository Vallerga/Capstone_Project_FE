import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const url = "http://localhost:8080/api/auth/login";

const TOKEN =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0aGVib3NzLlVAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODQ5NTk4OTgsImV4cCI6MTY4NTU2NDY5OH0.QJf49fjOf0TXL5w4KX_4b0VroSdfzbEMc5nQAwVH9IPM9TrSvBlpQtiwTmdBmspT";

const body = {
  username: "AccountAdmin",
  password: "pOtf8r$4Nb!",
};

const Login = () => {
  let dispatch = useDispatch();
    
  const loginHandler = () => {
    // do the fetch
    dispatch({
      type: "CHECK_ADMIN_TOKEN_REDUCER",
      payload: TOKEN,
    });
    console.log(`fetch eseguita`);
  };

  let adminToken = useSelector((state) => state.questionary.adminToken)
  console.log(`adminToken: ${adminToken}`)
  if(adminToken) {
    return <Navigate to="/Authorize/Home" />
  }

  console.log("porca madonna")

  return (
    <div className="d-flex loginTest formComponent pt-5">
      <div className="loginImgComponent d-flex align-items-center justify-content-center">
        <img
          className="loginLogo"
          src={require("../assets/image/Loan_login.png")}
          alt="loginImg"
        />
      </div>
      <div onClick={loginHandler} className="aaaaa">
        cliccami
      </div>
    </div>
  );
};

export default Login;
