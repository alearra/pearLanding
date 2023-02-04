import React from "react";
import "../assets/styles/Productos.css";
import goCat1 from "../assets/static/gocat1.jpg";
import goCat2 from "../assets/static/gocat2.jpg";
import goCat3 from "../assets/static/gocat3.jpg";
export const Productos = () => {
  return (
    <section className="productos">
      <div className="about-text">
        <h3>
          MINI CARGADORA <b>SERIE 300</b>
        </h3>
      </div>
      <div className="images">
       <div className="image-item">
       <img src={goCat1} />
       </div>
       <div className="image-item">
       <img src={goCat2} />
       </div>
       <div className="image-item">
       <img src={goCat3} />
       </div>
      </div>
      <div className="producto-options">
        <button><h5>Caracteristicas</h5></button>
        <button><h5>Consultar</h5></button>
      </div>
    </section>
  );
};
