// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const ModificationPublication = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // Récupère l'ID de la publication depuis l'URL.
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const [publication, setPublication] = useState({
//     nom: "",
//     marque: "",
//     age: "",
//     description: "",
//     etat: "",
//     email: "",
//     telephone: "",
//     prix: "",
//   });

//   const getPublication = (id) => {
//     fetch("http://localhost:3001/publications/" + id)
//       .then((Response) => Response.json())
//       .then((data) => setPublication(data))
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     // Vérifie si l'utilisateur est authentifié
//     const token = localStorage.getItem("token");

//     if (token) {
//       setIsAuthenticated(true);
//       getPublication(id);
//     } else {
//       navigate("/connexion"); // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
//     }
//   }, [id, navigate]);

//   const handleImageChange = (e) => {
//     setPublication((prevState) => ({
//       ...prevState,
//       imageFile: e.target.files[0],
//       image: e.target.files[0].name,
//     }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPublication((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();

//     formData.append("imageFile", e.target.imageFile.files[0]);
//     formData.append("nom", publication.nom);
//     formData.append("marque", publication.marque);
//     formData.append("age", publication.age);
//     formData.append("description", publication.description);
//     formData.append("etat", publication.etat);
//     formData.append("email", publication.email);
//     formData.append("telephone", publication.telephone);
//     formData.append("prix", publication.prix);

//     const token = localStorage.getItem("token");
//     console.log("messageTT:", token);
//     if (isAuthenticated) {
//       fetch(`http://localhost:3001/publications/${id}`, {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       })
//         .then((response) => {
//           console.log(response);
//         })

//         .catch((error) => {
//           console.log(error);
//         });
//     } else {
//       console.log(
//         "Vous devez être connecté pour effectuer cette modification."
//       );
//     }
//   };

//   if (!isAuthenticated) {
//     return (
//       <div>
//         <h1>Vous devez être connecté pour effectuer cette modification.</h1>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <h2>Modification de la publication</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Nom :</label>
//         <input
//           type="text"
//           name="nom"
//           value={publication.nom}
//           onChange={handleChange}
//         />
//         <label>Marque</label>
//         <input
//           type="text"
//           name="marque"
//           value={publication.marque}
//           onChange={handleChange}
//         />

//         <label>Age</label>
//         <input
//           type="number"
//           name="age"
//           value={publication.age}
//           onChange={handleChange}
//         />

//         <label>Description</label>
//         <input
//           type="text"
//           name="description"
//           value={publication.description}
//           onChange={handleChange}
//         />

//         <div className="etatJouet">
//           <label>Etat</label>
//           <select
//             type="etat"
//             name="etat"
//             value={publication.etat}
//             onChange={handleChange}
//             className="select-option"
//           >
//             <option value="">---</option>
//             <option value="neuf">Neuf-jamais utilisé</option>
//             <option value="excellent">Excellent</option>
//             <option value="bon">Bon</option>
//             <option value="moyen">Moyen</option>
//             <option value="mauvais">Mauvais</option>
//           </select>
//         </div>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={publication.email}
//           placeholder="mail@mail.com"
//           onChange={handleChange}
//         />

//         <label>Téléphone</label>
//         <input
//           type="number"
//           name="telephone"
//           value={publication.telephone}
//           placeholder="Téléphone"
//           onChange={handleChange}
//         />

//         <label>Prix</label>
//         <input
//           type="number"
//           name="prix"
//           value={publication.prix}
//           placeholder="Le prix"
//           onChange={handleChange}
//         />

//         <div className="image-container">
//           <label>Photo</label>
//           <input
//             type="file"
//             alt="image"
//             name="imageFile"
//             accept="images/*"
//             onChange={handleImageChange}
//           />
//         </div>
//         <button type="submit">Modifier</button>
//       </form>
//     </div>
//   );
// };

// export default ModificationPublication;

//------------------Essaye-----------------------------------
//--------------------------------------------------------------------
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style/formulaireModification.css";

const ModificationPublication = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Récupère l'ID de la publication depuis l'URL.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [publication, setPublication] = useState({
    nom: "",
    marque: "",
    age: "",
    description: "",
    etat: "",
    email: "",
    telephone: "",
    prix: "",
  });

  const getPublication = (id) => {
    fetch("http://localhost:3001/publications/" + id)
      .then((Response) => Response.json())
      .then((data) => setPublication(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // Vérifie si l'utilisateur est authentifié
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
      getPublication(id);
    } else {
      navigate("/connexion"); // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
    }
  }, [id, navigate]);

  const handleImageChange = (e) => {
    setPublication((prevState) => ({
      ...prevState,
      imageFile: e.target.files[0],
      image: e.target.files[0].name,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPublication((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("imageFile", e.target.imageFile.files[0]);
    formData.append("nom", publication.nom);
    formData.append("marque", publication.marque);
    formData.append("age", publication.age);
    formData.append("description", publication.description);
    formData.append("etat", publication.etat);
    formData.append("email", publication.email);
    formData.append("telephone", publication.telephone);
    formData.append("prix", publication.prix);

    const token = localStorage.getItem("token");
    console.log("messageTT:", token);
    if (isAuthenticated) {
      fetch(`http://localhost:3001/publications/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
        .then((response) => {
          console.log(response);
          navigate("/achat");
        })

        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log(
        "Vous devez être connecté pour effectuer cette modification."
      );
    }
  };

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Vous devez être connecté pour effectuer cette modification.</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="titleModification">
        <h2>Modification</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Nom :</label>
        <input
          type="text"
          name="nom"
          value={publication.nom}
          onChange={handleChange}
        />
        <label>Marque</label>
        <input
          type="text"
          name="marque"
          value={publication.marque}
          onChange={handleChange}
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={publication.age}
          onChange={handleChange}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          value={publication.description}
          onChange={handleChange}
        />

        <div className="etatJouet">
          <label>Etat</label>
          <select
            type="etat"
            name="etat"
            value={publication.etat}
            onChange={handleChange}
            className="select-option"
          >
            <option value="">---</option>
            <option value="neuf">Neuf-jamais utilisé</option>
            <option value="excellent">Excellent</option>
            <option value="bon">Bon</option>
            <option value="moyen">Moyen</option>
            <option value="mauvais">Mauvais</option>
          </select>
        </div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={publication.email}
          placeholder="mail@mail.com"
          onChange={handleChange}
        />

        <label>Téléphone</label>
        <input
          type="number"
          name="telephone"
          value={publication.telephone}
          placeholder="Téléphone"
          onChange={handleChange}
        />

        <label>Prix</label>
        <input
          type="number"
          name="prix"
          value={publication.prix}
          placeholder="Le prix"
          onChange={handleChange}
        />

        <div className="image-container">
          <label>Photo</label>
          <input
            type="file"
            alt="image"
            name="imageFile"
            accept="images/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="insButton">
          Modifier
        </button>
      </form>
    </div>
  );
};

export default ModificationPublication;
