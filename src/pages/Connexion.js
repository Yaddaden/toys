import React, { useState } from "react";
import "../style/Connexion.css";

const Connexion = () => {
  const [formData, setFormData] = useState({
    login: "",
    motDePasse: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données de connexion :", formData);
  };
  return (
    <>
      <h1 className="titleConnexion">Connectez-vous au Kids House</h1>
      <form className="connexion" onSubmit={handleSubmit}>
        <div className="logpass">
          <label htmlFor="login">Login: </label>

          <input
            type="text"
            id="login"
            name="login"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="logpass">
          <label htmlFor="motDePasse">Mot de passe : </label>

          <input
            type="password"
            id="motDePasse"
            name="motDePasse"
            value={formData.motDePasse}
            onChange={handleChange}
          />
        </div>
        <button className="insButton" type="submit">
          Connexion
        </button>
      </form>
    </>
  );
};

export default Connexion;
