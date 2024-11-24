import React, { useRef, useEffect } from "react";
import "../assets/SeriesPage.css"; // Importer le CSS spécifique pour la page des séries
import serie1 from "../assets/serie1.png";
import serie2 from "../assets/serie2.png";
import serie3 from "../assets/serie3.png";
import serie4 from "../assets/serie4.png";
import serie5 from "../assets/serie5.png";
import serie6 from "../assets/serie6.png";
import serie7 from "../assets/serie7.png";
import serie8 from "../assets/serie8.png";
import serie9 from "../assets/serie9.png";
import serie10 from "../assets/serie10.png";
import serie11 from "../assets/serie11.png";
import serie12 from "../assets/serie12.png";
import serie13 from "../assets/serie13.png";
import serie14 from "../assets/serie14.png";
import serie15 from "../assets/serie15.png";

function SeriesPage() {
  const containerRefRevoir = useRef(null);
  const containerRefTendances = useRef(null);

  // Fonction pour faire défiler à gauche
  const scrollLeft = (ref) => {
    ref.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  // Fonction pour faire défiler à droite
  const scrollRight = (ref) => {
    ref.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  // Gérer les touches fléchées pour chaque section de manière distincte
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Défilement pour la section "A Revoir"
      if (event.key === "ArrowLeft" && containerRefRevoir.current === document.activeElement) {
        scrollLeft(containerRefRevoir);
      } else if (event.key === "ArrowRight" && containerRefRevoir.current === document.activeElement) {
        scrollRight(containerRefRevoir);
      }

      // Défilement pour la section "Tendances actuelles"
      if (event.key === "ArrowLeft" && containerRefTendances.current === document.activeElement) {
        scrollLeft(containerRefTendances);
      } else if (event.key === "ArrowRight" && containerRefTendances.current === document.activeElement) {
        scrollRight(containerRefTendances);
      }
    };

    // Ajouter l'événement pour les touches fléchées
    window.addEventListener("keydown", handleKeyDown);

    // Nettoyer l'événement quand le composant est démonté
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section id="series-page">
      {/* A Revoir Section */}
      <div className="Revoir" tabIndex="0" ref={containerRefRevoir}>
        <p>A Revoir</p>
      </div>
      <div className="serie-container" ref={containerRefRevoir}>
        <img className="serie" src={serie1} alt="Serie 1" />
        <img className="serie" src={serie2} alt="Serie 2" />
        <img className="serie" src={serie3} alt="Serie 3" />
        <img className="serie" src={serie4} alt="Serie 4" />
        <img className="serie" src={serie5} alt="Serie 5" />
        <img className="serie" src={serie6} alt="Serie 6" />
        <img className="serie" src={serie7} alt="Serie 7" />
        <img className="serie" src={serie8} alt="Serie 8" />
        <img className="serie" src={serie9} alt="Serie 9" />
        <img className="serie" src={serie10} alt="Serie 10" />
        <img className="serie" src={serie11} alt="Serie 11" />
        <img className="serie" src={serie12} alt="Serie 12" />
        <img className="serie" src={serie13} alt="Serie 13" />
        <img className="serie" src={serie14} alt="Serie 14" />
        <img className="serie" src={serie15} alt="Serie 15" />
      </div>

      {/* Tendances actuelles Section */}
      <div className="Tendances" tabIndex="0" ref={containerRefTendances}>
        <p>Tendances actuelles</p>
      </div>
      <div className="serie-container" ref={containerRefTendances}>
        <img className="serie" src={serie1} alt="Serie 1" />
        <img className="serie" src={serie2} alt="Serie 2" />
        <img className="serie" src={serie3} alt="Serie 3" />
        <img className="serie" src={serie4} alt="Serie 4" />
        <img className="serie" src={serie5} alt="Serie 5" />
        <img className="serie" src={serie6} alt="Serie 6" />
        <img className="serie" src={serie7} alt="Serie 7" />
        <img className="serie" src={serie8} alt="Serie 8" />
        <img className="serie" src={serie9} alt="Serie 9" />
        <img className="serie" src={serie10} alt="Serie 10" />
        <img className="serie" src={serie11} alt="Serie 11" />
        <img className="serie" src={serie12} alt="Serie 12" />
        <img className="serie" src={serie13} alt="Serie 13" />
        <img className="serie" src={serie14} alt="Serie 14" />
        <img className="serie" src={serie15} alt="Serie 15" />
      </div>
    </section>
  );
}

export default SeriesPage;
