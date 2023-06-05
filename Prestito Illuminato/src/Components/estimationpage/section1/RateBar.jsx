import RateButton from "./button/RateButton";


const RateBar = () => {
    return (
        <div className="fixVariable my-3 d-flex justify-content-between align-items-center">
            <RateButton                
                ButtonType={"Fisso"}
                setting={"brandButton2 text-center "}                
                />
            <RateButton                
                ButtonType={"Variabile"}
                setting={"brandButton2 text-center "}
            />
        </div>
    );
};

export default RateBar;