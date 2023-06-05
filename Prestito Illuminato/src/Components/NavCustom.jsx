/* import { AiOutlineHeart } from "react-icons/ai"; */
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { TbPhoneCall } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const NavCustom = () => {
  const userName = useSelector((state) => state.security.userName);
  const userToken = useSelector((state) => state.security.userToken);
  let dispatch = useDispatch();

  let cssClassUser = "userLogNav me-3 "; //"userLogNav "
  let cssClassButton = "navButton me-3 "; //"navButton "
  let cssClassPhone = "phoneNum ";
  if (userToken === null) {
    cssClassUser += " d-none";
    cssClassButton += " d-none";
  } else {
    cssClassPhone += " d-none";
  }

  const handleLogout = () => {
    localStorage.clear();
    dispatch({
      type: "CHECK_TOKEN_REDUCER",
      payload: null,
    });
  };

  useEffect(() => {
    if (userName === null) {
      goHome();
    }
  }, [userName]);
  const goHome = () => {
    return <Navigate to="/" />;
  };
  return (
    <div className="navBar py-2 mb-3 d-flex align-items-center justify-content-between">
      <div className="webTitle">
        <h1 className="text-center fontWebTitle logoColorBright">
          <img
            className="logo3 pb-3 me-3"
            src={require("../assets/image/Prestito illuminato logo.png")}
            alt="myLogo"
          />
          Prestito
          <span className="ms-2 logoColorDark">
            illuminato
            {/* <AiOutlineHeart /> */}
          </span>
        </h1>
      </div>
      <div>
        <span className={cssClassUser}>Benvenuto {userName}</span>
        <Button className={cssClassButton} onClick={handleLogout}>
          Scollegati
        </Button>
      </div>
      <div className={cssClassPhone}>
        <p className="text-center">Serve aiuto?</p>
        <p className="text-dark fs-6">
          <span className="fs-3 me-2">
            <TbPhoneCall />
          </span>
          CONTATTACI
        </p>
      </div>
    </div>
  );
};

export default NavCustom;
