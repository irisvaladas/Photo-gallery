import React from "react";
import NavBar from "../components/navBar/navBar.jsx";
import SlideDisplay from "../components/slideDisplay/slideDisplay.jsx";
import FilterBar from "../components/filterBar/filterBar.jsx";
import InfScrImg from "../components/infniteScrollImageGallery/infScrImg.jsx";
import {InputProvider} from "../components/SearchContext";

export const HomePage = () => {
  return (
    <InputProvider>
      <div>
        <NavBar />
        <SlideDisplay />
        <FilterBar />
        <InfScrImg />
      </div>
    </InputProvider>
  );
};

export default HomePage;
