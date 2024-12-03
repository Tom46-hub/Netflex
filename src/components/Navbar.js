import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import dropdown from "../assets/dropdown.svg";
import notification from "../assets/notification.svg";
import search from "../assets/search.svg";
import avatar from "../assets/avatar.png";
import burgerIcon from "../assets/burger.svg";  // Assurez-vous d'importer l'icône burger
import closeIcon from "../assets/close.svg";   // Ajouter une icône de fermeture (croix)
import crayon from "../assets/crayon.png";
import transfert from "../assets/transfert.png";
import compte from "../assets/compte.png";
import aide from "../assets/aide.png";

function Navbar() {
  const [dropdownActif, setDropdownActif] = useState(false);
  const [sidebarActif, setSidebarActif] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Gestion des clics extérieurs
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".dropdown__container")) {
      setDropdownActif(false);
    }
    if (!e.target.closest(".sidebar") && !e.target.closest(".burger")) {
      setSidebarActif(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Détecte si l'écran est en mode mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Modifier ici selon le point de rupture souhaité
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarActif(!sidebarActif);
  };

  return (
    <header>
      <div className="header__left">
        <img className="logo" src={logo} alt="Netflix" />
        {!isMobile && (
          <nav>
            <a>Découverte</a>
            <a>Séries TV</a>
            <a>Films</a>
            <a>Programmes originaux</a>
            <a>Ajouts récents</a>
            <a>Ma liste</a>
          </nav>
        )}
      </div>
      
      {isMobile ? (
        <a className="burger" onClick={toggleSidebar}>
          <img className="burger__icon" src={sidebarActif ? closeIcon : burgerIcon} alt="Menu" />
        </a>
      ) : (
        <div className="header__right">
          <a>
            <img src={search} alt="Rechercher" />
          </a>
          <a>Jeunesse</a>
          <a>
            <img src={notification} alt="Notifications" />
          </a>
          <div className="dropdown__container">
            <a
              className="avatar"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setDropdownActif(!dropdownActif);
              }}
            >
              <img src={avatar} alt="Avatar" />
              <img className="avatar__dropdown" src={dropdown} alt="Menu" />
            </a>
            <div className={`dropdown__menu ${dropdownActif ? "active" : ""}`}>
              <a href="#">
                <img src={crayon} alt="Gérer les profils" />
                Gérer les profils
              </a>
              <a href="#">
                <img src={transfert} alt="Transférer un profil" />
                Transférer un profil
              </a>
              <a href="#">
                <img src={compte} alt="Compte" />
                Compte
              </a>
              <a href="#">
                <img src={aide} alt="Centre d'aide" />
                Centre d'aide
              </a>
              <div className="deco">
                <a href="#">Se déconnecter</a>
              </div>
            </div>
          </div> 
        </div>
      )}
      
      {sidebarActif && <div className="overlay" onClick={() => setSidebarActif(false)}></div>}
      
      <div className={`sidebar ${sidebarActif ? "active" : ""}`}>
        <a href="#">
          <img src={crayon} alt="Gérer les profils" />
          Gérer les profils
        </a>
        <a href="#">
          <img src={transfert} alt="Transférer un profil" />
          Transférer un profil
        </a>
        <a href="#">
          <img src={compte} alt="Compte" />
          Compte
        </a>
        <a href="#">
          <img src={aide} alt="Centre d'aide" />
          Centre d'aide
        </a>
        <div className="deco">
          <a href="#">Se déconnecter</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
