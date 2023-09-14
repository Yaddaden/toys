import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/PublicationDetails.css";

const PublicationDetails = () => {
  const { id } = useParams();
  const [publication, setPublication] = useState(null);

  useEffect(() => {
    //récupérer les détails de la publication en utilisant l'ID
    fetch(`http://localhost:3001/publications/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Convertir la chaîne JSON en tableau
        data.images = JSON.parse(data.image);
        setPublication(data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des détails de la publication :",
          error
        );
      });
  }, [id]);

  if (!publication) {
    return <div>Publication introuvable</div>;
  }
  console.log(publication);
  return (
    <div className="publication-details-container">
      <div className="publication-details-left">
        <div>
          <div>{publication.created_at}</div>
          <h1 className="titlePublication">Annonce</h1>

          <div className="publication-image">
            {publication.images &&
              publication.images.length > 0 &&
              publication.images.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:3001/${image}`}
                  alt={`Annonce ${index + 1}`}
                  className={`publication-image-item image-${index}`}
                />
              ))}
          </div>

          <div>
            <span className="small-title">Objet à vendre: </span>
            {publication.nom}
          </div>
          <div>
            <span className="small-title">Marque: </span>
            {publication.marque}
          </div>
          <div>
            <span className="small-title">Age d'utilisation: </span>
            {publication.age}ans et +
          </div>
          <div>
            <span className="small-title">État: </span>
            {publication.etat}
          </div>
          <div>
            <span className="small-title">Wilaya: </span>
            {publication.wilaya}
          </div>
          <div>
            <span className="small-title">Téléphone: </span>
            {publication.telephone}
          </div>
          <div>
            <span className="small-title">Prix: </span>
            {publication.prix}DZD
          </div>
          <div>
            <span className="small-title">Description: </span>
            {publication.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationDetails;
