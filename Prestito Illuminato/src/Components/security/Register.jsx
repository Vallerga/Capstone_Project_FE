import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

// const URL = "http://localhost:8080/api/auth/signin"; // <--- TODO: da verificare
const URL = "http://localhost:8080/api/auth/register";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (event) => {
    // prevent refresh
    event.preventDefault();
    // loading body for sign in
    const bodyRegistration = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
      roles: ["ROLE_USER"],
    };
    console.log(
      `bodyLogin used for fetch: ${JSON.stringify(bodyRegistration, null, 2)}`
    );

    // sent sign in credential
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRegistration),
      });

      // print fetch response
      console.debug(
        `response.ok: ${response.ok}, response.status: ${response.status}`
      );

      if (response.ok) {
        setRegistered(true);
        alert(
          `Registrazione avvenuta corretamente, accedi subito all'area utenti ${username}!`
        );
      } else {
        alert(
          `errore durante il la registrazione, response status: ${response.status}`
        );
      }
    } catch (error) {
      alert(
        `Non sta funzionando la registrazione, chiedere assistenza: ${error}`
      );
    }
  };

  if (registered) {
    return <Navigate to="/" />;
  }

  return (
    <Row className="signInBg">
      <Col className="d-flex flex-column flex-lg-row align-items-center">
        <div className="loginImgComponent d-flex align-items-center justify-content-center">
          <img
            className="loginLogo loginLogoSignIn"
            src={require("../../assets/image/Loan_login.png")}
            alt="loginImg"
          />
        </div>
        <form
          className="formComponent formComponentSignIn d-flex flex-column align-items-center align-content-center justify-content-center "
          onSubmit={handleSubmit}
        >
          <div>
            <label className="d-block" htmlFor="firstname">
              Nome:
            </label>
            <input
              className="my-3 p-2"
              type="firstname"
              placeholder="inserisci nome"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            <label className="d-block" htmlFor="lastname">
              Cognome:
            </label>
            <input
              className="my-3 p-2"
              type="lastname"
              placeholder="inserisci cognome"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div>
            <label className="d-block" htmlFor="username">
              Nome Utente:
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
            <label className="d-block" htmlFor="email">
              Email:
            </label>
            <input
              className="my-3 p-2"
              type="text"
              placeholder="inserisci email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <Button type="submit" className="log_reg_Button">
            Registrati
          </Button>
          <p>
            Sei già registrato?
            <Link to={"/"}>
              <span className="logIn">Clicca qui</span>
            </Link>
          </p>
        </form>
      </Col>
    </Row>
  );
};

export default Register;

// probabilmente non faccio la pagina di successo
/* if (null) {
  return <Navigate to="/signup-success" />; // <--- TODO: da fare
} */
