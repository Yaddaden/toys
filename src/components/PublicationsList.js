import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/PublicationsList.css";

const PublicationsList = ({ publications, userId }) => {
  const navigate = useNavigate();
  const sortedPublications = publications.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  const handlePublicationClick = (publicationId) => {
    navigate(`/publicationdetails/${publicationId}`);
  };

  return (
    <div className="table">
      <div className="publication-container">
        {sortedPublications.map((publication) => {
          let images = publication.image ? JSON.parse(publication.image) : [];

          // Afficher seulement la première image
          let firstImage = images.length > 0 ? images[0] : "default.jpg";
          return (
            <div
              key={publication.id}
              className="publication-card"
              onClick={() => handlePublicationClick(publication.id)}
            >
              <div className="publication-image">
                <img
                  src={`http://localhost:3001/${firstImage}`}
                  alt={`Annonce ${publication.id}`}
                />
              </div>
              <div>{publication.created_at}</div>
              <div>
                <span className="small-title">Objet à vendre: </span>
                {publication.nom}
              </div>
              <div>
                <span className="small-title">Prix: </span>
                {publication.prix}€
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PublicationsList;
