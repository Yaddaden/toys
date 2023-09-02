import React, { useState, useEffect } from "react";
import "../style/Connexion.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Vendre from "./Vendre";
// import { Link } from "react-router-dom";

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
    const token = localStorage.getItem("token") || null;

    console.log("TOKENFRONT:", token);
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
    console.log("Après suppression du token :", localStorage.getItem("token"));
    setIsLoggedIn(false);
    toast.success("Vous êtes déconnecté.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("isLoggedIn:", isLoggedIn);
    console.log("vendreVisible:", vendreVisible);

    fetch("http://localhost:3001/users/login", {
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
        const token = data.token;
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
        setVendreVisible(true);
        toast.success("Vous êtes connecté.");
      })

      .catch((err) => console.log(err));
  };

  return (
    <>
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

          {!isLoggedIn && (
            <div className="inscriptionLink">
              <p>
                Vous n'avez pas de compte ?{" "}
                <span
                  className="navigInscription"
                  onClick={() => {
                    handleLogout();
                    navigate("/inscription");
                  }}
                >
                  Cliquez ici
                </span>
              </p>
            </div>
          )}
        </>
      ) : (
        <>
          <h1 className="msgBienvenue">Bienvenue!! vous êtes connectés </h1>
          {vendreVisible && <Vendre />}
        </>
      )}
      {/* le lien vers la réinitialisation de mot de passe */}
      {!isLoggedIn && (
        <>
          <div>
            <p>
              Vous avez oublié votre code secret?
              <span
                className="resetPasswordButton"
                onClick={() => {
                  navigate("/Reinitialisation");
                }}
              >
                Cliquez ici pour réinitialiser votre mot de passe
              </span>
            </p>
          </div>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default Connexion;
