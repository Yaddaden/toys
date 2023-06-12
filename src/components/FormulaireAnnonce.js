import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/FormulaireAnnonce.css";

const FormulaireAnnonce = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    marque: "",
    age: "",
    description: "",
    etat: "",
    email: "",
    telephone: "",
    prix: "",
    imageFile: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "imageFile") {
      setFormData({ ...formData, imageFile: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    console.log("Données du formulaire :", formDataToSend);

    // Code pour envoyer les données du formulaire au serveur
    console.log(localStorage.getItem("token"));
    const token = localStorage.getItem("token") || null;

    // Inclure le token dans l'en-tête Authorization de la requête
    console.log(token);
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formDataToSend,
    };
    fetch("http://localhost:3001/publications", requestOptions)
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/achat"); // Redirection vers la page "Achat"
      })
      .catch((error) => {
        if (error.message === "401") {
          console.error(
            "Erreur 401: Vérifiez vos identifiants et l'état de votre jeton."
          );
        } else {
          console.error(error);
        }
      });
  };
  const { nom, marque, age, description, etat, email, telephone, prix } =
    formData;

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="titlePublication">Publier une annonce</h1>
      <label htmlFor="nom">Nom du jouet</label>
      <input
        type="text"
        id="nom"
        name="nom"
        value={nom}
        placeholder="Genre de jouet"
        onChange={handleChange}
      />

      <label htmlFor="Marque">Marque</label>
      <input
        type="text"
        id="marque"
        name="marque"
        value={marque}
        placeholder="La marque du jouet"
        onChange={handleChange}
      />

      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        name="age"
        value={age}
        placeholder="L'age recommandé pour utiliser ce jouet"
        onChange={handleChange}
      />

      <label htmlFor="description">Description </label>
      <input
        type="text"
        id="description"
        name="description"
        value={description}
        placeholder="Décrire les caractéristiques de votre jouet "
        onChange={handleChange}
      />

      <div className="etatJouet">
        <label htmlFor="etat">Etat</label>
        <select
          id="etat"
          type="etat"
          name="etat"
          value={etat}
          placeholder="Etat du jouet"
          onChange={handleChange}
          className="select-option"
        >
          <option value="">---</option>
          <option value="neuf">Neuf-jamais utilisé</option>
          <option value="excellent">Excellent</option>
          <option value="bon">Bon</option>
          <option value="moyen">Moyen</option>
          <option value="mauvais">Mauvais</option>
        </select>
      </div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        placeholder="mail@mail.com"
        onChange={handleChange}
      />

      <label htmlFor="telephone">Téléphone</label>
      <input
        type="number"
        id="telephone"
        name="telephone"
        value={telephone}
        placeholder="Téléphone"
        onChange={handleChange}
      />

      <label htmlFor="prix">Prix</label>
      <input
        type="number"
        id="prix"
        name="prix"
        value={prix}
        placeholder="Le prix"
        onChange={handleChange}
      />

      <div className="image-container">
        <label htmlFor="imageFile">Photo</label>
        <input
          type="file"
          alt="image"
          id="imageFile"
          name="imageFile"
          accept="images/*"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="insButton">
        Envoyer
      </button>
    </form>
  );
};

export default FormulaireAnnonce;

//-----------------------------------------------------------------
//-------------------------essaie----------------------------------
