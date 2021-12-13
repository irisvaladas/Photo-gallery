import React from "react";
import NavBar from "../components/navBar/navBar.jsx";
import SlideDisplay from "../components/slideDisplay/slideDisplay.jsx";
import FilterBar from  "../components/filterBar/filterBar.jsx";
import InfScrImg from  "../components/infniteScrollImageGallery/infScrImg.jsx";

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <SlideDisplay />
      <FilterBar />
      <InfScrImg />
    </div>
  );
};

export default HomePage;