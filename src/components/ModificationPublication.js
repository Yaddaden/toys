import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ModificationPublication = () => {
  const [selectedImageCount, setSelectedImageCount] = useState(0);
  const maxImageCount = 5;
  const navigate = useNavigate();
  const { id } = useParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [publication, setPublication] = useState({
    nom: "",
    marque: "",
    age: "",
    description: "",
    etat: "",
    email: "",
    telephone: "",
    prix: "",
  });

  const [formData, setFormData] = useState({ pictures: [] });

  const getPublication = (id) => {
    fetch("http://localhost:3001/publications/" + id)
      .then((Response) => Response.json())
      .then((data) => {
        setPublication(data);
        const images = JSON.parse(data.image);
        setFormData((prevData) => ({
          ...prevData,
          pictures: images,
        }));
        setSelectedImageCount(images.length);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      getPublication(id);
    } else {
      navigate("/connexion");
    }
  }, [id, navigate]);

  const handleImageChange = (e) => {
    const filesArray = Array.from(e.target.files);
    if (formData.pictures.length + filesArray.length <= maxImageCount) {
      setFormData({
        ...formData,
        pictures: [
          ...formData.pictures,
          ...filesArray.map((file) => file.name),
        ],
      });
      setSelectedImageCount(formData.pictures.length + filesArray.length);
    } else {
      alert(`Limite de ${maxImageCount} images atteinte de 5 photos!`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPublication((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //--Suppression des images
  const handleDeleteImage = (imageName) => {
    console.log("Image Name:", imageName); // Vérifiez le nom de l'image
    const token = localStorage.getItem("token");
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageName }), // Envoyer le nom de l'image à supprimer
    };

    fetch(
      `http://localhost:3001/publications/${id}/delete-image`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete Response:", data); // Vérifiez la réponse du serveur
        // Mettre à jour l'affichage des images après suppression
        const updatedPictures = formData.pictures.filter(
          (picture) => picture !== imageName
        );
        setFormData({
          ...formData,
          pictures: updatedPictures,
        });
        setSelectedImageCount(updatedPictures.length);
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de l'image :", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormData = new FormData();

    formData.pictures.forEach((picture) => {
      newFormData.append("pictures", picture);
    });

    newFormData.append("nom", publication.nom);
    newFormData.append("marque", publication.marque);
    newFormData.append("age", publication.age);
    newFormData.append("description", publication.description);
    newFormData.append("etat", publication.etat);
    newFormData.append("email", publication.email);
    newFormData.append("telephone", publication.telephone);
    newFormData.append("prix", publication.prix);

    const token = localStorage.getItem("token");

    if (isAuthenticated) {
      fetch(`http://localhost:3001/publications/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: newFormData,
      })
        .then((response) => {
          console.log("response", response);
          return response.json(); // Extraire le contenu JSON de la réponse
        })
        .then((data) => {
          console.log("Data:", data); // Afficher le contenu JSON de la réponse
          navigate("/achat");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log(
        "Vous devez être connecté pour effectuer cette modification."
      );
    }
  };

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Vous devez être connecté pour effectuer cette modification.</h1>
      </div>
    );
  }

  return (
    <div>
      <h2>Modification de la publication</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom :</label>
        <input
          type="text"
          name="nom"
          value={publication.nom}
          onChange={handleChange}
        />
        <label>Marque</label>
        <input
          type="text"
          name="marque"
          value={publication.marque}
          onChange={handleChange}
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={publication.age}
          onChange={handleChange}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          value={publication.description}
          onChange={handleChange}
        />

        <div className="etatJouet">
          <label>Etat</label>
          <select
            type="etat"
            name="etat"
            value={publication.etat}
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
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={publication.email}
          placeholder="mail@mail.com"
          onChange={handleChange}
        />

        <label>Téléphone</label>
        <input
          type="number"
          name="telephone"
          value={publication.telephone}
          placeholder="Téléphone"
          onChange={handleChange}
        />

        <label>Prix</label>
        <input
          type="number"
          name="prix"
          value={publication.prix}
          placeholder="Le prix"
          onChange={handleChange}
        />

        <div className="image-container">
          <label>Photo</label>
          <input
            type="file"
            alt="image"
            id="imageFile"
            name="pictures"
            accept="images/*"
            onChange={handleImageChange}
            multiple
          />

          <p>{selectedImageCount} image(s) sélectionnée(s)</p>
          {console.log(formData.pictures)}

          {formData.pictures.map((image, index) => (
            <div key={index} className="existing-image">
              <img
                src={`http://localhost:3001/${image}`}
                alt={`les pubs ${index + 1}`}
              />
              <button onClick={() => handleDeleteImage(image)}>
                Supprimer
              </button>
            </div>
          ))}
        </div>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
};

export default ModificationPublication;
