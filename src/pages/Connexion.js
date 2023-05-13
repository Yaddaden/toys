import React, { useState, useEffect } from "react";
import "../style/Connexion.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Vendre from "./Vendre";

const Connexion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [vendreVisible, setVendreVisible] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur est déjà connecté
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const vendreVisible = localStorage.getItem("vendreVisible");
      if (vendreVisible === "true") {
        setVendreVisible(true);
      }
    }
  }, []);
  useEffect(() => {
    // Enregistre la valeur actuelle de vendreVisible dans localStorage
    localStorage.setItem("vendreVisible", vendreVisible.toString());
  }, [vendreVisible]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    // Réinitialiser les champs de formulaire
    setFormData({
      email: "",
      password: "",
    });
    // Déconnexion de l'utilisateur
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    toast.success("Vous êtes déconnecté.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          toast.error(data.error);
          return;
        }
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        setVendreVisible(true);
        toast.success("Vous êtes connecté.");
      })

      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* Le bouton déconnexion */}
      {isLoggedIn && (
        <button className="insButtonD" onClick={handleLogout}>
          Déconnexion
        </button>
      )}
      {/* Cette partie de isLoggedIn seras invisile pendant la connexion. */}
      {!isLoggedIn ? (
        <>
          <h1 className="titleConnexion">Se connecter</h1>
          <form className="containerConnexion" onSubmit={handleSubmit}>
            <div className="connexionLabel">
              <div className="blockConnexion">
                <label htmlFor="email">Email : </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="mail@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="connexionLabel">
              <div className="blockConnexion">
                <label htmlFor="password">Mot de passe : </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="***********"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button className="insButton" type="submit">
              Connexion
            </button>
          </form>

          {!isLoggedIn ? (
            <div className="inscriptionLink">
              <p>
                Vous n'avez pas de compte ?{" "}
                <span
                  className="navigInscription"
                  onClick={() => navigate("/inscription")}
                >
                  Cliquez ici
                </span>
              </p>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <h1 className="msgBienvenue">Bienvenue!! vous êtes connectés </h1>
          {vendreVisible && <Vendre />}
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default Connexion;
