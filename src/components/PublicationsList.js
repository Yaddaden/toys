import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/PublicationsList.css";

const PublicationsList = ({ publications, userId }) => {
  const navigate = useNavigate();
  // Trier les publications en comparant les dates de création
  const sortedPublications = publications.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  const handlePublicationClick = (publicationId) => {
    // Naviguer vers la page correspondante en utilisant navigate
    navigate(`/publicationdetails/${publicationId}`);
  };

  return (
    <div className="table">
      <div className="publication-container">
        {sortedPublications.map((publication) => (
          <div
            key={publication.id}
            className="publication-card"
            onClick={() => handlePublicationClick(publication.id)}
          >
            <div className="publication-image">
              <img
                src={`http://localhost:3001/images/${publication.image}`}
                alt="annonce"
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
        ))}
      </div>
    </div>
  );
};

export default PublicationsList;
