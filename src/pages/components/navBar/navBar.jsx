import React from "react";
import logo from "../../../files/logo.png";
import searchButton from "../../../files/searchButton.png";
import './navBar.css'
import {Link } from "react-router-dom";

const NavBar = () => {
 
 
 //test branch develop
 
 
  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className='search'>
        <div className="search__input">
        <input
          type="text"
          placeholder="Suggested: relaxing, snowflake, marble, christmas, family, film, shiva and more."
        />
        <button type='summit'><img src={searchButton}/></button>
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
