import { useState } from "react";
import RatingButton from "./RatingButton";


const RateBar = () => {
    const [checker, setChecker] = useState("Fisso");

    const handleButtonClick = (param) => {
        setChecker(param);
    };
  
    return (
        <div className="fixVariable my-3 d-flex justify-content-between align-items-center">
            <RatingButton
                rate={"Fisso"}
                setting={"fix text-center "}
                selected={checker === "Fisso"}
                onClick={() => handleButtonClick("Fisso")}
            />
            <RatingButton
                rate={"Variabile"}
                setting={"variable text-center "}
                selected={checker === "Variabile"}
                onClick={() => handleButtonClick("Variabile")}
            />
        </div>
    );
};

export default RateBar;