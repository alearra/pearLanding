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
          <b>PRODUCTOS</b>
        </h3>
      </div>
      <div className="images">
       <div className="image-item">
       <img src={goCat1} />
       <h3>SERIE 300</h3>
       <p>Descargar Folleto</p>
       </div>
       <div className="image-item">
       <img src={goCat2} />
       <h3>SERIE 315</h3>
       <p><b>Descargar Folleto</b></p>
       </div>
       <div className="image-item">
       <img src={goCat3} />
       <h3>SERIE 350</h3>
       <p><b>Descargar Folleto</b></p>
       </div>
      </div>
    </section>
  );
};
