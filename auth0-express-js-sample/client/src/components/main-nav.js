import {NavLink,} from "react-router-dom";
import React from "react";
import { HashLink } from 'react-router-hash-link';
import Interactive from 'react-interactive';




const MainNav = () => (
  <div className="navbar-nav mr-auto" >
    
    <Interactive as={HashLink} smooth className="nav-link"
      activeClassName="router-link-exact-active" to={`/#section-two`}>הצוות</Interactive>
   
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      
      Profile
    </NavLink>
    <NavLink
      to="/external-api"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      External API
    </NavLink>
  </div>
);

export default MainNav;
