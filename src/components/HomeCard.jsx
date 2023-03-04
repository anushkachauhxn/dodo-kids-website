import React from "react";
import "./HomeCard.scss";

export const RectCard = ({ image, label, type = "" }) => {
  return (
    <div className="card rect-card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="text">{label}</div>
    </div>
  );
};

export const RoundCard = ({ image, type = "" }) => {
  return (
    <div className="card round-card">
      <div className="image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};
