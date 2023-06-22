import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <p className="textFooter">
        KIDS HOUSE décline toute responsabilité concernant l'utilisation de ce
        site web. Nous ne sommes pas responsables des transactions entre les
        utilisateurs, de la qualité, de la sécurité ou de la conformité des
        produits annoncés sur ce site. Les informations fournies sur ce site
        sont uniquement à titre indicatif et ne doivent pas être considérées
        comme des conseils professionnels. Nous ne garantissons pas
        l'exactitude, l'exhaustivité ou la fiabilité des informations présentes
        sur ce site. Les utilisateurs sont invités à exercer leur propre
        jugement et à prendre les précautions nécessaires lors de l'utilisation
        de ce site et lors des transactions avec d'autres utilisateurs.
      </p>
      <p className="Copyright">
        Copyright © 2023 Kids-house. Tous droits réservés.{" "}
      </p>
    </footer>
  );
};

export default Footer;
