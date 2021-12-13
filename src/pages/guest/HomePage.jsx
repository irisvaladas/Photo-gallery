import React from "react";
import NavBar from "../components/navBar/navBar.jsx";
import SlideDisplay from "../components/slideDisplay/slideDisplay.jsx";

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <SlideDisplay />
    </div>
  );
};

export default HomePage;