import React, { useState } from "react";
import logo from "../../../files/logo.png";
import searchButton from "../../../files/searchButton.png";
import './navBar.css'
import {Link } from "react-router-dom";
import InfScrImg from "../infniteScrollImageGallery/infScrImg.jsx";

const NavBar = (props) => {
  
  const [photo, setPhoto] = useState("")

  function handleChange(event) {

  }
  
  function handleSubmit(event) {
    
  }

  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className='search'>
        <div className="search__input">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Suggested: city, beach, country site, Paris, London..."
          name = "photo"
        />
        <button onClick={handleSubmit} type='summit'><img src={searchButton}/></button>
        </div>
      </div>
      <div className='authentication'>
          <Link to="../../guest/RegistrationPage.jsx"><button type='button'>Register</button></Link>
          <Link to="../../guest/LoginPage.jsx"><button type='button'>Sign in</button></Link>
      </div>
    </div>
  );
};

export default NavBar;
