import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

const URL = "http://localhost:8080/api/auth/login";

/* const TOKEN_EXAMPLE =
  "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0aGVib3NzLlVAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODUwMzE1MDcsImV4cCI6MTY4NTYzNjMwN30.6ZGIqUIV1yGWiYuv_7LIgTyFqp312YVTLW_syf6DJ6DWX7e1RMNXkIR41Ls-h2oe";

const BODY_EXAMPLE = {
  username: "AccountAdmin",
  password: "pOtf8r$4Nb!",
}; */

/* const USER_EXAMPLE = {
  firstname: "Antonio",
  lastname: "Vallerga",
  username: "Antonio",
  email: "a.vallerga@gmail.com",
  password: "123stella",
  roles: ["ROLE_USER"]
} */

const Login = () => {
  
  const [username, setUsername] = useState("AccountAdmin");
  const [password, setPassword] = useState("pOtf8r$4Nb!");

  let dispatch = useDispatch();

  const handleSubmit = async (event) => {
    // prevent refresh
    event.preventDefault();
    // loading body for login in
    const bodyLogin = { 
      username: username,
      password: password
    };

    console.debug(`bodyLogin used for fetch: ${JSON.stringify(bodyLogin, null, 2)}`);

    // sent log in credential and receive fresh token
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyLogin),
      });

      // print fetch response
      console.debug(`response.ok: ${response.ok}, response.status: ${response.status}`);

      if (response.ok) {
        const result = await response.json();
        // print fetch response body
        console.debug(`result: ${JSON.stringify(result, null, 2)}`);

        // send token to Redux store
        dispatch({
          type: "CHECK_ADMIN_TOKEN_REDUCER",
          payload: `Bearer ${result.accessToken}`,
        });

        // send username to Redux store
        dispatch({
          type: "SAVE_USERNAME",
          payload: username,
        });
        
      } else {
        alert(`errore durante il login, response status: ${response.status}`);
      }
    } catch (error) {
      alert(`errore durante il login: ${error}`);
    }    
  };

  
  
  // Token stored in Redux Store
  let adminToken = useSelector((state) => state.security.adminToken);
  console.debug(`adminToken Render: ${adminToken && adminToken.slice(20)}`);

  if (adminToken) {
    return <Navigate to="/Home" />;
  }

  return (
    <div className="d-flex loginTest">
      <div className="loginImgComponent d-flex align-items-center justify-content-center">
        <img
          className="loginLogo"
          src={require("../../assets/image/Loan_login.png")}
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
        <p>
          Non riesci a connetterti?
          <Link to={"/Register"}>
            <span className="logIn">Clicca qui</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
