import React from "react";
import "../style/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <p>
        Contactez-nous sur cette adresse mail:
        <strong> rabah@gmail.com </strong>
      </p>
      <h1>Politique de confidentialité :</h1>
      <p>
        Nous nous engageons à protéger la confidentialité de vos informations
        personnelles. Lorsque vous utilisez notre site web, nous collectons des
        informations telles que votre nom, votre adresse e-mail et votre N de
        téléphone uniquement dans le but de traiter votre commande et de vous
        fournir un service de qualité. Nous ne vendons, ne louons ni ne
        partageons vos informations personnelles avec des tiers non autorisés.
        Toutes les informations que vous nous fournissez sont stockées en toute
        sécurité et utilisées conformément aux lois applicables sur la
        protection des données.
      </p>
    </div>
  );
};

export default Contact;
