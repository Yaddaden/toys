// import { createContext, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext({
//   isAuthenticated: false,
//   user: null,

//   login: () => {},
//   logout: () => {},
//   setSellerPage: () => {},
// });

// export const AuthProvider = (props) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   const [sellerPage, setSellerPage] = useState(false);
//   const login = (token, user) => {
//     localStorage.setItem("token", token);
//     setUser(user);
//     setIsAuthenticated(true);
//     setSellerPage(true);
//     navigate("/vendre"); // rediriger vers la page Vendre après la connexion
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//     setUser(null);
//     navigate("/"); // rediriger vers la page d'accueil après la déconnexion
//   };

//   return (
//     <AuthContext.Provider
//       value={{ isAuthenticated, user, login, logout, setSellerPage }}
//       {...props}
//     />
//   );
// };
// export const useAuth = () => useContext(AuthContext);
