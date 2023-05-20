import React, { useState, useEffect } from "react";
import PublicationsList from "../components/PublicationsList";

const Achat = () => {
  const [publications, setPublications] = useState([]);

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

  return (
    <div>
      <h1>Liste des publications</h1>
      <PublicationsList publications={publications} />
    </div>
  );
};
export default Achat;
