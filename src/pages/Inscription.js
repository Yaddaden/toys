// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Inscription = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     telephone: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     // const { name, value } = e.target;
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Données du formulaire :", formData);

//     // vérifier la validité de l'e-mail
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       toast.error("L'adresse e-mail n'est pas valide.");
//       return;
//     }

//     // vérifier la longueur minimale du mot de passe
//     if (formData.password.length < 8) {
//       toast.error("Le mot de passe doit contenir au moins 8 caractères.");
//       return;
//     }

//     // Ajouter une validation pour vérifier si les champs sont vides
//     const { first_name, last_name, telephone, email, password } = formData;
//     if (!first_name || !last_name || !telephone || !email || !password) {
//       toast.error(
//         "Veuillez remplir tous les champs du formulaire pour s'inscrire sur votre site."
//       );
//       return;
//     }

//     fetch("http://localhost:3001/users/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => {
//         console.log("cest bien enregistré ");

//         navigate("/");
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <>
//       <h1 className="titleConnexion">Créer votre compte</h1>
//       <form className="containerInscription" onSubmit={handleSubmit}>
//         <div className="inscripLabel">
//           <div className="blockA">
//             <label htmlFor="first_name">Nom : </label>

//             <input
//               type="text"
//               id="first_name"
//               name="first_name"
//               placeholder="Votre Nom"
//               value={formData.first_name}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="inscripLabel">
//           <div className="blockB">
//             <label htmlFor="last_name">Prénom : </label>

//             <input
//               type="text"
//               id="last_name"
//               name="last_name"
//               placeholder="Votre Prénom"
//               value={formData.last_name}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="inscripLabel">
//           <div className="blockE">
//             <label htmlFor="telephone">Téléphone : </label>

//             <input
//               type="number"
//               id="telephone"
//               name="telephone"
//               placeholder="Téléphone: 00.00.00.00.00"
//               value={formData.telephone}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="inscripLabel">
//           <div className="blockC">
//             <label htmlFor="email">Email : </label>

//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="mail@mail.com"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="inscripLabel">
//           <div className="blockD">
//             <label htmlFor="password">Mot de passe : </label>

//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="***********"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <button className="insButton" type="submit">
//           Valider
//         </button>
//       </form>
//       <ToastContainer />
//     </>
//   );
// };

// export default Inscription;

//---------------------------------------Essaie----------------------------------------
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Inscription = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",

    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);

    // Ajouter une validation pour vérifier si les champs sont vides
    const { first_name, last_name, email, password } = formData;
    if (!first_name || !last_name || !email || !password) {
      toast.error(
        "Veuillez remplir tous les champs du formulaire pour s'inscrire sur votre site."
      );
      return;
    }

    // vérifier la validité de l'e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("L'adresse e-mail n'est pas valide.");
      return;
    }

    // vérifier la longueur minimale du mot de passe
    if (formData.password.length < 8) {
      toast.error("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }

    fetch("http://localhost:3001/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log("cest bien enregistré ");

        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="titleConnexion">Créer votre compte</h1>
      <form className="containerInscription" onSubmit={handleSubmit}>
        <div className="inscripLabel">
          <div className="blockA">
            <label htmlFor="first_name">Nom : </label>

            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Votre Nom"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="inscripLabel">
          <div className="blockB">
            <label htmlFor="last_name">Prénom : </label>

            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Votre Prénom"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="inscripLabel">
          <div className="blockC">
            <label htmlFor="email">Email : </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="mail@mail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="inscripLabel">
          <div className="blockD">
            <label htmlFor="password">Mot de passe : </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="***********"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="insButton" type="submit">
          Valider
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Inscription;
