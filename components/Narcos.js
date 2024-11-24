import React from "react";
import "../assets/Narcos.css";
import NarcosImage from "../assets/bg.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Narcos() {
  return (
    <div>
      <Navbar />
      <div className="bg-container">
        <img className="fond-bg" src={NarcosImage} alt="Narcos" />
        <div className="text-overlay">
          <h1 className="Netflix">Netflix Originals: <br /></h1>
          <h1 className="Narcos">Narcos</h1>
          <p className="pave2">
            Le cartel de Cali reprend le pouvoir en Colombie. <br /> Les successeurs d’Escobar passent à l’action et déclarent la guerre au gouvernement.
          </p>
          <div className="button">
            <button>+</button>
            <button>▶</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Narcos;
