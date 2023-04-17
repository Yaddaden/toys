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
        <button
          className={`hamburger${isOpen && !isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        ></button>

        <nav className={`menu${isOpen ? "open" : ""}`}>
          <div className="containerLink">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              end
              to="/"
            >
              <li> Accueil</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              end
              to="/vendre"
            >
              <li>Vendre</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              end
              to="/bebe"
            >
              <li>Bébé</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              end
              to="/enfant"
            >
              <li>Enfant</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              end
              to="/contact"
            >
              <li>Contact </li>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
