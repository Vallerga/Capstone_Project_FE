import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import AboutUs from "./AboutUs";
import AskNow from "./AskNow";
import CompareLoan from "./CompareLoan";
import { dispatchUserId } from "../../redux/actions";


const EstimationPage = () => {
  
  const URLUSER = "http://localhost:8080/api/reports/users";

  let userToken = useSelector((state) => state.security.userToken);
  let userName = useSelector((state) => state.security.userName);

  const dispatch = useDispatch();

  const getAllUser = useCallback(async () => {
    try {
      const response = await fetch(URLUSER, {
        headers: {
          token: userToken,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        let users = await response.json();
        let loggedUser = await users.find((user) => user.username === userName);

        dispatch(dispatchUserId(loggedUser.id));        

      } else {
        alert(
          `errore durante il caricamento del profilo, risposta del server: ${response.status}`
        );
      }

    } catch (error) {
      alert(
        `recupero profilo avvenuta non correttamente, chiedere assistenza: ${error}`
      );
    }
  },[dispatch, userToken, userName])

  useEffect(() => {
    getAllUser()
  },[getAllUser]);

  return (
    <>
      <CompareLoan />
      <AboutUs />
      <AskNow />
    </>
  );
};

export default EstimationPage;
