import React from "react";
import "../style/PublicationsList.css";
import { useNavigate } from "react-router-dom";

const PublicationsList = ({ publications }) => {
  const navigate = useNavigate();

  const handleModifier = (id) => {
    navigate(`/ModificationPublication/${id}`);
  };

  const handleSupprimer = (id) => {
    const token = localStorage.getItem("token");
    if (token) {
      const confirmDelete = window.confirm(
        "Êtes-vous sûr de vouloir supprimer cet article ?"
      );
      if (confirmDelete) {
        fetch(`http://localhost:3001/publications/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);

            // Actualiser la page
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      console.log(
        "Vous devez être connecté et en être le propriétaire de l'annonce pour effectuer cette suppression."
      );
    }
  };
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
            <div className="bEditeDelete">
              <button
                className="bEdit"
                onClick={() => handleModifier(publication.id)}
              >
                Modifier
              </button>

              <button
                className="bDelete"
                onClick={() => handleSupprimer(publication.id)}
              >
                Supprimer
              </button>
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
