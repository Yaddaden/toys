import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../style/Header.css";
import logo from "../asset/logo.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  //Ouverture du menu hamburger
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //Fermeture automatique du menu hamburger
  const closeMenu = () => {
    setIsOpen(false);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur est déjà connecté
    const token = localStorage.getItem("token") || null;

    console.log("TOKENFRONT:", token);
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Déconnexion de l'utilisateur
    localStorage.removeItem("token");
    console.log("Après suppression du token :", localStorage.getItem("token"));
    setIsLoggedIn(false);
    toast.success("Vous êtes déconnecté.");
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
              to="/publicationOwner"
              onClick={closeMenu}
            >
              <li>Publications</li>
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
            {isLoggedIn && (
              <button
                className="insButtonD"
                onClick={() => {
                  handleLogout();
                  navigate("/Connexion");
                }}
              >
                Déconnexion
              </button>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
