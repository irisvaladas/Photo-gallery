import React, { useState, useRef, useEffect} from "react";
import image1 from "../../../files/slideBackground.jpeg";
import image2 from "../../../files/countryBackground.jpeg";
import image3 from "../../../files/northernLights.jpeg";
import backButton from "../../../files/arrowButtonBack.png";
import forwardButton from "../../../files/arrowButtonForward.png";
import "./slideDisplay.css";


const colors = [image1, image2, image3];
const delay = 6000;

function SlideDisplay() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);


return (
<div className="slideshow">
    <div
      className="slideshowSlider"
      style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
    >
      {colors.map((backgroundColor, index) => (
        <img
          src={backgroundColor}
          className="slide"
          key={index}
          style={{ backgroundColor }}
        ></img>
      ))}
    </div>

    <div className="slideshowDots">
      {colors.map((_, idx) => (
        <div
          key={idx}
          className={`slideshowDot${index === idx ? " active" : ""}`}
          onClick={() => {
            setIndex(idx);
          }}
        ></div>
      ))}
    </div>
      <div className="text">
        <h1>The best way to share your travel experiences with the world.</h1>
      </div>
      <div className="buttonsBF">
        <button className="backButton">
          <img src={backButton} alt="back" />
        </button>
        <button className="forwardButton">
          <img src={forwardButton} alt="forward" />
        </button>
      </div>
    </div>
  );
}

export default SlideDisplay;
