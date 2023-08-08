import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/FormulaireAnnonce.css";

const FormulaireAnnonce = () => {
  const [selectedImageCount, setSelectedImageCount] = useState(0);
  const maxImageCount = 5;
  const token = localStorage.getItem("token") || null;
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
    pictures: [],
  });

  const handleChange = (e) => {
    if (e.target.name === "pictures") {
      const filesArray = Array.from(e.target.files); // Convertir FileList en tableau
      if (formData.pictures.length + filesArray.length <= maxImageCount) {
        setFormData({
          ...formData,
          pictures: [...formData.pictures, ...filesArray],
        });
      } else {
        alert(`Limite de ${maxImageCount} images atteinte de 5 photos!`);
      }

      // console.log(formData.pictures);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    if (formData.pictures.length === 0)
      console.log("Veuillez sélectionner au moins une image.");
    // console.log(formData.pictures);
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "pictures") {
        // Gérer les fichiers d'images individuellement
        value.forEach((file) => {
          formDataToSend.append("pictures", file, file.name);
        });
      } else {
        formDataToSend.append(key, value);
      }
    });

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

  useEffect(() => {
    setSelectedImageCount(formData.pictures.length);
  }, [formData.pictures]);

  return (
    <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
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
          name="pictures"
          accept="images/*"
          onChange={handleChange}
          multiple
        />
        <p>{selectedImageCount} image(s) sélectionnée(s)</p>
      </div>

      <button type="submit" className="insButton">
        Envoyer
      </button>
    </form>
  );
};

export default FormulaireAnnonce;
