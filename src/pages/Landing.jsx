import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/Global.css";
import { Frase } from "../components/Frase";
import { Navbar } from "../components/Navbar";
import { Home } from "../container/Home";
import { Productos } from "../container/Productos";

export const Landing = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  function handleScroll() {
    const position = window.scrollY;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);
  return (
    <div className="landing">
      <Navbar isScrolling={scrollHeight} />
      <Home />
      <Frase />
      <section id="productos">
        <Productos />
      </section>
    </div>
  );
};
