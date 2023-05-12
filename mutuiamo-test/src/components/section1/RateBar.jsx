import { useState } from "react";
import RateButton from "./RateButton";


const RateBar = () => {
    const [checker, setChecker] = useState("Fisso");

    const handleButtonClick = (param) => {
        setChecker(param);
    };
  
    return (
        <div className="fixVariable my-3 d-flex justify-content-between align-items-center">
            <RateButton
                rate={"Fisso"}
                setting={"rateButton text-center "}
                selected={checker === "Fisso"}
                handleButtonClick={handleButtonClick}
            />
            <RateButton
                rate={"Variabile"}
                setting={"rateButton text-center "}
                selected={checker === "Variabile"}
                handleButtonClick={handleButtonClick}
            />
        </div>
    );
};

export default RateBar;