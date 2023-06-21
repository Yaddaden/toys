import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Vendre from "./pages/Vendre";
import Achat from "./pages/Achat";
import Error from "./pages/Error";

import Enfant from "./pages/Enfant";
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import ModificationPublication from "./components/ModificationPublication";
import PublicationOwner from "./pages/PublicationOwner";

const AppRoutes = () => {
  // État d'authentification
  const isAuthenticated = true;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/vendre" element={<Vendre />} />
      <Route path="/achat" element={<Achat />} />
      <Route path="/publicationOwner" element={<PublicationOwner />} />
      <Route path="/enfant" element={<Enfant />} />
      <Route path="/contact" element={<Contact />} />

      {/* Utiliser la modification a la connexion sinon allez se connecter */}
      {isAuthenticated ? (
        <>
          <Route
            path="/ModificationPublication/:id"
            element={<ModificationPublication />}
          />
          ,
          <Route path="/PublicationOwner/:id" element={<PublicationOwner />} />
        </>
      ) : (
        <Navigate to="/connexion" />
      )}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
