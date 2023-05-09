import React from "react";

const RatingButton = ({ rate, setting, selected, onClick }) => {
  let cssClass = setting;
  
  if (selected) {
    cssClass += " selectedRate";
  }

  return (
    <div
      onClick={onClick}
      className={cssClass}
    >
      <span>{rate}</span>
    </div>
  );
};

export default RatingButton;