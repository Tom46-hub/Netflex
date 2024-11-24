import React from "react";
import "../assets/CinemaPage.css";  // Importer le CSS spécifique pour la page cinéma polonais
import fond2 from "../assets/fond2.png"; // Image fond2
import Footer from "../components/Footer";

function CinemaPage() {
  return (
    <section id="cinema-page">
      <div className="bg-container2">
        <img className="fond-bg2" src={fond2} alt="Fondbg2" />
        <div className="text-overlay2">
          <h1 className="or">L'ÂGE D'OR DU CINÉMA</h1>
          <h1 className="polonais">POLONAIS</h1>
          <p className="pave">
            Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… <br />
            Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default CinemaPage;
