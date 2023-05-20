import React from "react";
import "../style/PublicationsList.css";

const PublicationsList = ({ publications }) => {
  console.log(publications); // Vérifier les données récupérées

  return (
    <div className="table">
      <div className="publication-container">
        {publications.map((publication) => (
          <div key={publication.id} className="publication-card">
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

            <div className="publication-image">
              <img
                src={`http://localhost:3001/images/${publication.image}`}
                alt="annonce"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsList;
