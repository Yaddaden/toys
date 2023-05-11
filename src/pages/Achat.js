import React from "react";

function Achat() {
  return (
    <div>
      <h1>Acheter des joutes pour enfants</h1>
      <p>Sur cette page, vous pouvez découvrir nos produits à vendre.</p>
      <ul>
        <li>
          <img src="image1.jpg" alt="joute1" />
          <h2>Joute pour enfant de 5 ans</h2>
          <p>Prix : 20 €</p>
          <button>Ajouter au panier</button>
        </li>
        <li>
          <img src="image2.jpg" alt="joute2" />
          <h2>Joute pour enfant de 8 ans</h2>
          <p>Prix : 30 €</p>
          <button>Ajouter au panier</button>
        </li>
        <li>
          <img src="image3.jpg" alt="joute3" />
          <h2>Joute pour enfant de 10 ans</h2>
          <p>Prix : 40 €</p>
          <button>Ajouter au panier</button>
        </li>
      </ul>
    </div>
  );
}

export default Achat;
