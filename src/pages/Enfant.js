import React from "react";
import "../style/Enfant.css";

const Enfant = () => {
  return (
    <div className="containerEnfant">
      <h1 className="titleEnfant">
        Conseils de Sécurité des Jouets pour vos Enfants
      </h1>
      <p className="conseilsUl">
        La sécurité des enfants est notre priorité. Dans cette section, nous
        vous fournissons des conseils et des informations essentiels sur la
        sécurité des jouets pour garantir que vos enfants jouent en toute
        sécurité.
      </p>
      <h2>Conseils Importants :</h2>
      <ul className="conseilsUl">
        <li>Choisir des jouets adaptés à l'âge de votre enfant.</li>
        <li>
          Inspecter régulièrement les jouets pour détecter toute usure ou pièce
          détachée.
        </li>
        <li>
          Éviter les jouets contenant de petites pièces qui pourraient être
          avalées.
        </li>
        <li>
          Lire attentivement les avertissements sur les étiquettes des jouets.
        </li>
        <li>
          Nettoyer les jouets régulièrement pour éviter la propagation de
          germes.
        </li>
        <li>Apprendre les premiers secours en cas d'accident avec un jouet.</li>
      </ul>

      <p className="conseilsUl">
        N'oubliez pas que la surveillance parentale est essentielle lorsque vos
        enfants jouent avec des jouets, quelle que soit leur sécurité.
      </p>
    </div>
  );
};

export default Enfant;
