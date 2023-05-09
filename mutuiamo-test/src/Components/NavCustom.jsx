import { AiOutlineHeart } from "react-icons/ai";
import { TbPhoneCall } from "react-icons/tb";

const NavCustom = () => {
  return (
    <div className="navBar py-2 mb-3">
      <h1 className="text-dark text-center">
        mutui
        <span className="text-danger">
          am
          <AiOutlineHeart />
        </span>
      </h1>
      <div className="phoneNum">
        <p className="text-center">Serve aiuto?</p>
        <p className="text-dark fs-6">
          <span className="fs-3 me-2"><TbPhoneCall /></span>
          06 4005 0565
        </p>
      </div>
    </div>
  );
};

export default NavCustom;
