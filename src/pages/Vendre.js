import BannerJouets from "../components/BannerJouets";
import "../style/Jouets.css";
import FormulaireAnnonce from "../components/FormulaireAnnonce";

const Vendre = () => {
  document.title = "jouets!";

  return (
    <div className="jouet">
      <BannerJouets />

      <FormulaireAnnonce />
    </div>
  );
};

export default Vendre;
