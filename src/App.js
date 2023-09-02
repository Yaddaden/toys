import React from "react";
import AppRoutes from "./AppRoutes";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      {/* <Header /> */}

      <main className="theMain">
        <AppRoutes />
      </main>

      <Footer />
    </>
  );
};

export default App;
