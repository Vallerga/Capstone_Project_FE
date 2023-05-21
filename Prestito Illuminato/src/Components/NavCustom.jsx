/* import { AiOutlineHeart } from "react-icons/ai"; */
import { TbPhoneCall } from "react-icons/tb";

const NavCustom = () => {
  return (
    <div className="navBar py-2 mb-3">
      <h1
        className="text-center logoColorBright" >
        <img
          className="logo3 pb-3 me-3"
          src={require("../assets/image/Prestito illuminato logo.png")}
          alt="a"
        />
        Prestito
        <span className="ms-2 logoColorDark" >
          illuminato
          {/* <AiOutlineHeart /> */}
        </span>
      </h1>
      <div className="phoneNum">
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
