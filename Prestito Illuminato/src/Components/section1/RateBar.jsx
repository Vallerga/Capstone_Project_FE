import { useState } from "react";
import RateButton from "./button/RateButton";


const RateBar = () => {
    const [checker, setChecker] = useState("Fisso");

    const handleButtonClick = (param) => {
        setChecker(param);
    };
  
    return (
        <div className="fixVariable my-3 d-flex justify-content-between align-items-center">
            <RateButton                
                ButtonType={"Fisso"}
                setting={"rateButton text-center "}
                selected={checker === "Fisso"}
                handleButtonClick={handleButtonClick}
            />
            <RateButton                
                ButtonType={"Variabile"}
                setting={"rateButton text-center "}
                selected={checker === "Variabile"}
                handleButtonClick={handleButtonClick}
            />
        </div>
    );
};

export default RateBar;