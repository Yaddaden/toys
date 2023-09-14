import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style/formulaireModification.css";

const ModificationPublication = () => {
  const [selectedImageCount, setSelectedImageCount] = useState(0);
  const maxImageCount = 5;
  const navigate = useNavigate();
  const { id } = useParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const wilayas = [
    "Adrar",
    "Aïn Defla",
    "Aïn Témouchent",
    "Alger",
    "Annaba",
    "Batna",
    "Béchar",
    "Béjaïa",
    "Biskra",
    "Blida",
    "Bordj Bou Arreridj",
    "Bouira",
    "Boumerdès",
    "Chlef",
    "Constantine",
    "Djelfa",
    "El Bayadh",
    "El Oued",
    "El Tarf",
    "Ghardaïa",
    "Guelma",
    "Illizi",
    "Jijel",
    "Khenchela",
    "Laghouat",
    "M'Sila",
    "Mascara",
    "Médéa",
    "Mila",
    "Mostaganem",
    "Naâma",
    "Oran",
    "Ouargla",
    "Oum El Bouaghi",
    "Relizane",
    "Saïda",
    "Sétif",
    "Sidi Bel Abbès",
    "Skikda",
    "Souk Ahras",
    "Tamanrasset",
    "Tébessa",
    "Tiaret",
    "Tindouf",
    "Tipaza",
    "Tissemsilt",
    "Tizi Ouzou",
    "Tlemcen",
    "Touggourt",
    "Tizi Ouzou",
    "Tlemcen",
    "Tébessa",
    "Tamanrasset",
    "Tébessa",
    "Tiaret",
    "Tindouf",
    "Tipaza",
    "Tissemsilt",
  ];

  const [publication, setPublication] = useState({
    nom: "",
    marque: "",
    age: "",
    description: "",
    etat: "",
    wilaya: "",
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
    // Vérifier le nombre d'images sélectionnées et actuellement affichées
    const totalImages = formData.pictures.length + filesArray.length;
    if (totalImages <= maxImageCount) {
      setFormData({
        ...formData,
        pictures: [...formData.pictures, ...filesArray],
      });
      setSelectedImageCount(totalImages);
    } else {
      alert(`Limite de ${maxImageCount} images atteinte!`);
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
    newFormData.append("wilaya", publication.wilaya);
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
        .then((response) => response.json())
        .then((data) => {
          console.log("Data:", data);
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
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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

        <div className="etatJouet">
          <label htmlFor="wilaya">Wilaya</label>
          <select
            type="wilaya"
            id="wilaya"
            name="wilaya"
            value={publication.wilaya}
            placeholder="wilaya"
            onChange={handleChange}
            className="select-option"
          >
            <option value="">Sélectionnez une wilaya</option>
            {wilayas.map((wilaya, index) => (
              <option key={index} value={wilaya}>
                {wilaya}
              </option>
            ))}
          </select>
        </div>

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

          {formData.pictures.slice(0, maxImageCount).map((image, index) => (
            <div key={index} className="existing-image">
              <img
                src={`http://localhost:3001/${image}`}
                alt={`les pubs ${index + 1}`}
              />
              <button
                className="insButtonSup"
                onClick={() => handleDeleteImage(image)}
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
        <button type="submit" className="insButton">
          Modifier
        </button>
      </form>
    </div>
  );
};

export default ModificationPublication;
