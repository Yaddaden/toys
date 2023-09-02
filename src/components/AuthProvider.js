// import React, { useState, useEffect, createContext } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   const login = (token, user) => {
//     localStorage.setItem("token", token);
//     setUser(user);
//     setIsAuthenticated(true);
//     navigate("/vendre"); // rediriger vers la page Vendre après la connexion
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//     setUser(null);
//     navigate("/"); // rediriger vers la page d'accueil après la déconnexion
//   };

//   useEffect(() => {
//     // Vérifier si l'utilisateur est connecté en vérifiant la présence d'un token dans localStorage
//     const token = localStorage.getItem("token");
//     if (token) {
//       // TODO: envoyer une requête API pour vérifier le token
//       setIsAuthenticated(true);
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };
