import React from "react";
import "../style/PublicationsList.css";

const PublicationsList = ({ publications, userId }) => {
  // Trier les publications en comparant les dates de création
  const sortedPublications = publications.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <div className="table">
      <div className="publication-container">
        {sortedPublications.map((publication) => (
          <div key={publication.id} className="publication-card">
            <div className="publication-image">
              <img
                src={`http://localhost:3001/images/${publication.image}`}
                alt="annonce"
              />
            </div>

            <div>{publication.title}</div>
            <div>{publication.created_at}</div>
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
              <span className="small-title">Email: </span>
              {publication.email}
            </div>
            <div>
              <span className="small-title">Téléphone: </span>
              {publication.telephone}
            </div>
            <div>
              <span className="small-title">Prix: </span>
              {publication.prix}€
            </div>
            <div>
              <span className="small-title">Description: </span>
              {publication.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsList;
