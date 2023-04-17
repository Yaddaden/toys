import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vendre from "./pages/Vendre";
import Error from "./pages/Error";
import Bebe from "./pages/Bebe";
import Enfant from "./pages/Enfant";
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/vendre" element={<Vendre />} />
      <Route path="/bebe" element={<Bebe />} />
      <Route path="/enfant" element={<Enfant />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
