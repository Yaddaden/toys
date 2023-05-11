import BannerJouets from "../components/BannerJouets";
import "../style/Jouets.css";

const Vendre = () => {
  document.title = "jouets!";

  return (
    <div className="jouet">
      <BannerJouets />
      <h1 className="jouetTitle">Les jouets par tranche d'age</h1>
      <p className="jouetText">Jouets à des petits prix</p>
    </div>
  );
};

export default Vendre;
