import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => (
  <header className="navbar">
    <NavLink className="logo" to="/">
      <img src={logo} className="logoImage" alt="spacehub logo" />
      <h1 className="logoText">Space Travellers&apos; Hub</h1>
    </NavLink>
    <nav />
  </header>
);

export default Header;
