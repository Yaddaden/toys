import React, { useState, useEffect } from "react";
import "../style/Inscription.css";

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
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
    console.log("Données du formulaire :", formData);
  };
  const [form, setForm] = React.useState();

  useEffect(() => {
    fetch("/inscription")
      .then((res) => res.json())
      .then((form) => setForm(form.message));
  }, []);

  return (
    <>
      <h1 className="titleIncription">Créerz votre compte</h1>
      <form className="containerInscription" onSubmit={handleSubmit}>
        <div className="inscripLabel">
          <div className="blockA">
            <label htmlFor="nom">Nom : </label>

            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="inscripLabel">
          <div className="blockB">
            <label htmlFor="prenom">Prénom : </label>

            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="inscripLabel">
          <div className="blockE">
            <label htmlFor="telephone">Téléphone : </label>

            <input
              type="number"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="inscripLabel">
          <div className="blockC">
            <label htmlFor="email">Email : </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="inscripLabel">
          <div className="blockD">
            <label htmlFor="motDePasse">Mot de passe : </label>

            <input
              type="password"
              id="motDePasse"
              name="motDePasse"
              value={formData.motDePasse}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="insButton" type="submit">
          Valider
        </button>
        <p>{!form ? "Chargement..." : form}</p>
      </form>
    </>
  );
};

export default Inscription;
