import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../style/Header.css";
import logo from "../asset/logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  //Ouverture du menu hamburger
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //Fermeture automatique du menu hamburger
  const closeMenu = () => {
    setIsOpen(false);
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
              to="/"
              onClick={closeMenu}
            >
              <li> Accueil</li>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              to="/achat"
              onClick={closeMenu}
            >
              <li>Achat</li>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              to="/bebe"
              onClick={closeMenu}
            >
              <li>Bébé</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              to="/enfant"
              onClick={closeMenu}
            >
              <li>Enfant</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              to="/contact"
              onClick={closeMenu}
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
