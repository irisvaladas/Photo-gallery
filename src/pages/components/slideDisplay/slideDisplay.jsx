import React from "react";
import background from "../../../files/slideBackground.jpeg";
import backButton from "../../../files/arrowButtonBack.png";
import forwardButton from "../../../files/arrowButtonForward.png";
import "./slideDisplay.css";

const SlideDisplay = () => {
  return (
    <div className="slide-container">
      <img src={background} alt="SlideDisplay" />
      <div className="text">
        <h1>The best way to share your travel experiences with the world.</h1>
      </div>
      <div className='buttonsBF'>
        <button className="backButton"><img  src={backButton} alt="back" /></button>
        <button className="forwardButton"><img  src={forwardButton} alt="forward" /></button>
      </div>
    </div>
  );
};

export default SlideDisplay;
