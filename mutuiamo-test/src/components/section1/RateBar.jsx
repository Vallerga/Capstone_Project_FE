import { useState } from "react";
import RatingButton from "./RatingButton";


const RateBar = () => {
    const [selectedRate, setSelectedRate] = useState("Fisso");

    const handleButtonClick = (rate) => {
        setSelectedRate(rate);
    };
  
    return (
        <div className="fixVariable my-3 d-flex justify-content-between align-items-center">
            <RatingButton
                rate={"Fisso"}
                setting={"fix text-center "}
                selected={selectedRate === "Fisso"}
                onClick={() => handleButtonClick("Fisso")}
            />
            <RatingButton
                rate={"Variabile"}
                setting={"variable text-center "}
                selected={selectedRate === "Variabile"}
                onClick={() => handleButtonClick("Variabile")}
            />
        </div>
    );
};

export default RateBar;