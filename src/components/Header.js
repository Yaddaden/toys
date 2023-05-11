import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../style/Header.css";
import logo from "../asset/logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="containerHeder">
      <Link to="/" aria-label="accueil">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="containerButton">
        <div
          className={`hamburger ${isOpen ? "open" : ""} `}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`menu${isOpen ? " open" : ""}`}>
          <ul className="containerLink">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              exact
              to="/"
            >
              <li> Accueil</li>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              exact
              to="/achat"
            >
              <li>Achat</li>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              exact
              to="/bebe"
            >
              <li>Bébé</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              exact
              to="/enfant"
            >
              <li>Enfant</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              exact
              to="/contact"
            >
              <li>Contact </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
//___________________________________________________________________________
