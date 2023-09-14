import React, { useState, useEffect } from "react";
import PublicationsList from "../components/PublicationsList";
import "../style/Achat.css";

const Achat = () => {
  const [publications, setPublications] = useState([]);
  const [filtreType, setFiltreType] = useState(""); // État du filtre par type
  const [filtrePrixMax, setFiltrePrixMax] = useState(""); // État du filtre par prix maximum

  const [publicationsFiltrees, setPublicationsFiltrees] = useState([]); // État pour les publications filtrées

  useEffect(() => {
    fetch("http://localhost:3001/publications")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching publication data");
        }
        return response.json();
      })
      .then((data) => {
        setPublications(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Fonction pour filtrer les publications en fonction du type de jouet et du prix maximum
  const filtrerPublications = () => {
    let publicationsFiltrees = [...publications];

    // Filtre par type de jouet
    if (filtreType) {
      publicationsFiltrees = publicationsFiltrees.filter(
        (publication) =>
          publication.nom &&
          publication.nom.toLowerCase() === filtreType.toLowerCase()
      );
    }

    // Filtre par prix maximum
    if (filtrePrixMax) {
      publicationsFiltrees = publicationsFiltrees.filter(
        (publication) => publication.prix <= parseInt(filtrePrixMax)
      );
    }

    return publicationsFiltrees;
  };

  // Fonction pour gérer la recherche
  const handleRecherche = () => {
    const publicationsFiltrees = filtrerPublications();
    setPublicationsFiltrees(publicationsFiltrees);
  };

  return (
    <div>
      {/* Filtres de recherche */}
      <div className="containerSerche">
        <p className="serche">Cherchez une annonce sur Kids house </p>
        <div className="containerType">
          <div>
            <label htmlFor="filtreType" className="labelType">
              Type de jouet:
            </label>
            <input
              type="text"
              id="filtreType"
              value={filtreType}
              onChange={(e) => setFiltreType(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="filtrePrixMax" className="labelType">
              Prix maximum:
            </label>
            <input
              type="number"
              id="filtrePrixMax"
              value={filtrePrixMax}
              onChange={(e) => setFiltrePrixMax(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button onClick={handleRecherche} className="buttonSerche">
            Chercher <span className="icon">🔍</span>
          </button>
        </div>
      </div>
      <h1 className="titleAchat">Liste des publications</h1>
      {/* Liste des publications filtrées */}
      {publicationsFiltrees.length > 0 ? (
        <PublicationsList publications={publicationsFiltrees} />
      ) : (
        // <PublicationsList publications={publications} />
        <div>
          {filtreType ? (
            <div className="aucuneAnnonce">
              Aucune publication de type{" "}
              <span className="filtreTypeAnnonce">({filtreType})</span> n'a été
              trouvée.
            </div>
          ) : (
            <>
              {publications.length > 0 ? (
                <PublicationsList publications={publications} />
              ) : (
                <div>Désolé, aucune publication dans vos recherches.</div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default Achat;
