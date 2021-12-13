import React from "react";
import NavBar from "../components/navBar/navBar.jsx";
import SlideDisplay from "../components/slideDisplay/slideDisplay.jsx";
import FilterBar from  "../components/filterBar/filterBar.jsx";

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <SlideDisplay />
      <FilterBar />
    </div>
  );
};

export default HomePage;