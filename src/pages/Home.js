import React from "react";
import BannerHome from "../components/BannerHome";
import { Link } from "react-router-dom";
import "../style/Home.css";
import cub from "../asset/imgCub.jpg";
import car from "../asset/imgVoiture.jpg";

const Home = () => {
  document.title = "home";
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <div className="home">
        <nav>
          <div className="homeUl">
            <Link to="/connexion">
              <button className="connexion">Connexion</button>
            </Link>
            <Link to="/Inscription">
              <button className="inscription">Inscription</button>
            </Link>
          </div>
        </nav>
        <BannerHome>
          <h1 className="homeTitle">The kids house</h1>
        </BannerHome>
        <p>{!data ? "Chargement..." : data}</p>
        <div className="containerText">
          <p className="homeTexte">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            necessitatibus, repellendus animi nulla est sunt nostrum eveniet
            fugit aspernatur velit perferendis ullam consectetur ab itaque
            corrupti maiores nobis aut ratione quos voluptas tempore vitae
            corporis. Aut beatae enim consequuntur distinctio voluptas
            voluptates amet ducimus, vero illum dolorem animi iusto sequi!
            Aliquid reiciendis veniam veritatis excepturi hic dicta! Sint, esse
            nulla culpa adipisci aliquid quo natus, quos eum vel hic laudantium
            nostrum tenetur ducimus consectetur quibusdam? Deleniti, quaerat
            veniam libero ducimus at maxime, doloremque odit suscipit saepe
            consequatur, ipsum provident laborum quisquam possimus consectetur
            dignissimos ipsa totam nisi tempore esse? Adipisci autem assumenda
            cumque suscipit molestiae quas .
          </p>

          <div className="homeImg">
            <img src={cub} alt="les cubes" />
            <img src={car} alt="voiture" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
