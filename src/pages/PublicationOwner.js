import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "../style/PublicationOwner.css";

const PublicationOwner = () => {
  const navigate = useNavigate();
  const [publications, setPublications] = useState([]);
  const token = localStorage.getItem("token");
  const userId = decodeToken(token)?.userId; // Récupérer l'ID du propriétaire depuis le token

  useEffect(() => {
    // Récupérer les publications du propriétaire actuellement connecté
    const token = localStorage.getItem("token");

    // Vérifier si l'utilisateur est connecté
    if (!token) {
      return;
    }

    fetch(`http://localhost:3001/publications?userId=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setPublications(data))
      .catch((error) => console.log(error));
  }, [userId]);

  const handleModifier = (id) => {
    navigate(`/ModificationPublication/${id}`);
  };

  const handleSupprimer = (id) => {
    const confirmDelete = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cette publication ?"
    );
    if (confirmDelete) {
      const token = localStorage.getItem("token");
      fetch(`http://localhost:3001/publications/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Actualiser la liste des publications après la suppression
          setPublications((prevState) =>
            prevState.filter((publication) => publication.id !== id)
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // Fonction pour décoder le token JWT et récupérer les informations qu'il contient
  function decodeToken(token) {
    try {
      const decoded = jwt_decode(token);
      return decoded;
    } catch (error) {
      console.log("Erreur lors du décodage du token :", error);
      return null;
    }
  }

  return (
    <div className="table">
      <h1 className="titlePublication">Mes Publications</h1>
      {publications.length > 0 ? (
        <div className="publication-container">
          {publications.map((publication) => {
            if (publication.userId === userId) {
              return (
                <div key={publication.id} className="publication-card-owner">
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

                  <div className="publication-image">
                    {publication.image && publication.image.length > 0 && (
                      <img
                        src={`http://localhost:3001/${
                          JSON.parse(publication.image)[0]
                        }`}
                        alt={`Annonce ${publication.id}`}
                      />
                    )}
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
              );
            } else {
              return null;
            }
          })}
        </div>
      ) : (
        <div className="pageVide">
          Vous n'avez pas de publication sur cette page, connectez-vous et
          postez une annonce.
        </div>
      )}
    </div>
  );
};

export default PublicationOwner;
