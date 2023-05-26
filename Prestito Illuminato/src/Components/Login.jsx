import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

const URL = "http://localhost:8080/api/auth/login";

const TOKEN =
  "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0aGVib3NzLlVAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODUwMzE1MDcsImV4cCI6MTY4NTYzNjMwN30.6ZGIqUIV1yGWiYuv_7LIgTyFqp312YVTLW_syf6DJ6DWX7e1RMNXkIR41Ls-h2oe";

const BODY = {
  username: "AccountAdmin",
  password: "pOtf8r$4Nb!",
};

const Login = () => {
  //form section
  const [username, setUsername] = useState("AccountAdmin");
  const [password, setPassword] = useState("pOtf8r$4Nb!");
  let dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const bodyLogin = { 
      username: username,
      password: password
    };

    console.log(JSON.stringify(bodyLogin, null, 2));
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyLogin),
      });
      console.debug(`response.ok: ${response.ok}, response.status: ${response.status}`);
      if (response.ok) {
        const result = await response.json();
        console.debug(`result: ${JSON.stringify(result, null, 2)}`);
        dispatch({
          type: "CHECK_ADMIN_TOKEN_REDUCER",
          payload: `Bearer ${result.accessToken}`,
        });
      } else {
        alert(`errore durante il login, response status: ${response.status}`);
      }
    } catch (error) {
      alert(`errore durante il login: ${error}`);
    }    
  };

  let adminToken = useSelector((state) => state.security.adminToken);
  console.debug(`adminToken Render: ${adminToken && adminToken.slice(20)}`);

  if (adminToken) {
    return <Navigate to="/ReportHistory" />;
  }

  return (
    <div className="d-flex loginTest">
      <div className="loginImgComponent d-flex align-items-center justify-content-center">
        <img
          className="loginLogo"
          src={require("../assets/image/Loan_login.png")}
          alt="loginImg"
        />
      </div>
      <form
        className="formComponent d-flex flex-column align-items-center align-content-center justify-content-center "
        onSubmit={handleSubmit}
      >
        <div>
          <label className="d-block" htmlFor="username">
            Username:
          </label>
          <input
            className="my-3 p-2"
            type="text"
            placeholder="inserisci username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="d-block" htmlFor="password">
            Password:
          </label>
          <input
            className="my-3 p-2"
            type="password"
            placeholder="inserisci password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="log_reg_Button"          
        >
          Accedi
        </Button>
      </form>
    </div>
  );
};
/* onClick={loginHandler} */
export default Login;

{
  /* <div className="formComponent d-flex flex-column align-items-center align-content-center justify-content-center ">
        <input
          className="my-3 p-2"
          type="text"
          placeholder="inserisci username"
        />

        <input
          className="my-3 p-2"
          type="password"
          placeholder="inserisci password"
        />

        <Button
          className="log_reg_Button"
          onClick={() => fetchLogin(URL, TOKEN, BODY)}
        >
          Accedi
        </Button>
        <p>
          Non riesci a connetterti?
          <Link to={"/Register"}>
            <span className="logIn">Clicca qui</span>
          </Link>
        </p>
      </div> */
}
