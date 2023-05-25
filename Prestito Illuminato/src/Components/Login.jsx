import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Button, Col } from "react-bootstrap";

const URL = "http://localhost:8080/api/auth/login";

const TOKEN =
  "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0aGVib3NzLlVAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODUwMzE1MDcsImV4cCI6MTY4NTYzNjMwN30.6ZGIqUIV1yGWiYuv_7LIgTyFqp312YVTLW_syf6DJ6DWX7e1RMNXkIR41Ls-h2oe";

const BODY = {
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
    // console.log(`fetch eseguita`);
  };

  const fetchLogin = async (URL, TOKEN, BODY) => {
    let result = null;
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(BODY),
      });
      console.log(`response.ok: ${response.ok}, response.status: ${response.status}`);
      if (response.ok) {
        result = await response.json();
        console.log(`result: ${result}`);
        /* dispatch({
          type:"CHECK_ADMIN_TOKEN_REDUCER",
          payload:result
        }); */
      } else {
      }
    } catch (error) {
      alert("login non avvenuto! ", error);
    }
    loginHandler();
    return await result;
  };

  let adminToken = useSelector((state) => state.security.adminToken);
  console.log(`adminToken: ${adminToken}`);
  if (adminToken) {
    return <Navigate to="/Authorize/Home" />;
  }

  return (
    <div className="d-flex loginTest formComponent">
      <div className="loginImgComponent d-flex align-items-center justify-content-center">
        <img
          className="loginLogo"
          src={require("../assets/image/Loan_login.png")}
          alt="loginImg"
        />
      </div>
      <div className="ms-5 d-flex flex-column align-content-center justify-content-center ">
        <Col xs={12} className="ms-5 mb-4">
          <input type="text" placeholder="inserisci username" />
        </Col>
        <Col xs={12} className="ms-5">
          <input type="password" placeholder="inserisci password" />
        </Col>
        <Button
          className="ms-5 brandButton4"
          onClick={() => fetchLogin(URL, TOKEN, BODY)}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};
/* onClick={loginHandler} */
export default Login;
