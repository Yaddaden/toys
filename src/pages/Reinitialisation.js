import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//----------------Rénitialisation--------------------------------
const Reinitialisation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleResetPassword = () => {
    console.log("Reset password button clicked");
    if (!formData.email) {
      toast.error("Veuillez entrer votre adresse e-mail.");
      return;
    }
    const requestData = { email: formData.email };
    console.log("Request Data:", requestData);

    fetch("http://localhost:3001/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          toast.success(data.message);
          navigate("/connexion");
        } else {
          toast.error(
            "Une erreur s'est produite lors de la réinitialisation du mot de passe."
          );
        }
      })
      .catch((err) => console.log("Fetch error:", err));
  };
  //-------------------------------------------------
  return (
    <>
      <h1>Réinitialisation du mot de passe</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Entrez votre Adresse e-mail :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            className="insButton"
            onClick={handleResetPassword}
          >
            Envoyer
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};
export default Reinitialisation;
