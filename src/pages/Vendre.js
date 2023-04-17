import React, { useState, useEffect } from "react";
import BannerJouets from "../components/BannerJouets";
import "../style/Jouets.css";

const Vendre = () => {
  document.title = "jouets!";

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../vente.json")
      .then((res) => res.json())
      .then((jeux) => setData(jeux))
      .catch((error) => console.error(error));
    console.log(data);
  }, []);
  return (
    <div className="jouet">
      <BannerJouets />
      <h1 className="jouetTitle">Les articles jouets par tranche d'age</h1>
      <p className="jouetText">Jouets à des petits prix</p>
      {data && data.map(({ prix }, k) => <p key={k}>{prix}</p>)}
      {data &&
        data.map(({ image }, k) => <img key={k} src={image} alt="voiture" />)}
    </div>
  );
};

export default Vendre;
