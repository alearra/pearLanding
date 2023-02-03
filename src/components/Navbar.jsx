import React from "react";
import "../assets/styles/Header.css"
import logoPear from "../assets/static/logoPear.png"


export const Navbar = ({ isScrolling }) => {
    function toTheTop() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
  return (
      <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className="navbar-logo" onClick={toTheTop}>
          <img src={logoPear} />
        </div>
        <div className="navbar-menu">
          <h5>PRODUCTOS</h5>
          <h5>SERVICIOS</h5>
          <h5>CONTACTO</h5>
        </div>
      </nav>
  );
};
