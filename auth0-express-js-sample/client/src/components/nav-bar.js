// src/components/nav-bar.js
import './nav-bar.scss'

import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";
import BootstrapNavbar from "./BootstrapNavbar"
const NavBar = () => {
  return (
    <div className="navigationbar" >
{/* 
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" /> */}
          {/* <MainNav /> */}
          <BootstrapNavbar/>
          {/* <AuthNav /> */}
      </div>

    // </div>
  );
};

export default NavBar;