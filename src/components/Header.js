import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => (
  <nav>
    <div className="main">
      <img src={logo} alt="logo" />
      <h1 className="header">Space Traveler&apos;s Hub</h1>
    </div>
    <div>
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="missions">Missions</NavLink>
      <NavLink to="profile">My Profile</NavLink>
    </div>
  </nav>
);

export default Header;
