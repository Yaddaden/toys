import React from "react";
import bannerJouets from "../asset/imgBannerJouets.png";
import "../style/BannerJouet.css";

const BannerJouets = () => {
  return (
    <div className="bannerJouets">
      <img src={bannerJouets} alt="bannière" />
    </div>
  );
};

export default BannerJouets;
