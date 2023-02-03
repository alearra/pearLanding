import React from "react";
import "../assets/styles/Home.css";
import backVideo from "../assets/media/soldador.mp4";

export const Home = () => {
  return (
    <div className="home-container">
      <video className="backvideo" src={backVideo} autoPlay loop muted />
    </div>
  );
};