import React from "react";
import BannerHome from "../components/BannerHome";
import "../style/Home.css";
import JeuxSociete from "../asset/Jeux-de-societe.png";
import jouets from "../asset/Jouets.jpg";
import Connexion from "./Connexion";

const Home = () => {
  document.title = "home";

  return (
    <>
      <div className="home">
        <BannerHome>
          <h1 className="homeTitle">The kids house</h1>
        </BannerHome>
        <Connexion />

        <div className="containerText">
          <p className="homeTexte">
            Bienvenue sur KIDS-HOUSE, la plateforme en ligne dédiée à l'achat et
            à la vente de jouets pour enfants entre particuliers ! Découvrez un
            univers ludique et économique où les familles peuvent se connecter
            pour trouver et offrir de merveilleux jouets à leurs petits bouts.
            <br />
            Notre plateforme facilite les échanges entre parents, grands-parents
            et toute personne souhaitant offrir une seconde vie aux jouets. Ici,
            vous trouverez une vaste sélection de jouets de qualité, allant des
            peluches aux jeux de société, en passant par les puzzles, les
            véhicules miniatures et bien plus encore. <br /> Rejoignez dès
            maintenant notre communauté passionnée de parents soucieux de
            préserver l'environnement tout en offrant de la joie à leurs
            enfants. Ensemble, créons une nouvelle façon de partager les trésors
            de l'enfance ! <br /> Prêt à faire le bonheur de vos petits
            explorateurs ? Parcourez notre sélection de jouets uniques et
            trouvez celui qui illuminera leurs yeux. Bienvenue sur KIDS-HOUSE !
          </p>
          <div className="homeImg">
            <img src={jouets} alt="Jouets" />
            <img src={JeuxSociete} alt="Jeux-de-societé" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
