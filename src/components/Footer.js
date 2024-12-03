import React from "react";
import "../components/Footer.css";
import Youtube from "../assets/Youtube.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import X from "../assets/X.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-blocks">
        <div className="footer-block">
          <div className="footer-socials">
            <img className="socials" src={Facebook}  alt="Facebook" />
            <img className="socials" src={Instagram} alt="Instagram" />
            <img className="socials" src={X} alt="X" />
            <img className="socials" src={Youtube} alt="Youtube" />
          </div>
          <ul>
            <li>Audio et sous-titres</li>
            <li>Relations investisseurs</li>
            <li>Confidentialité</li>
            <li>Nous contacter</li>
          </ul> <br></br>
          <div className="footer-code">
            <p>Code de Service</p>
          </div> <br></br>
          <div className="footer-block">
            <p>© 1997-2024 Netflix, Inc. </p>
          </div>
        </div>
        <div className="footer-block">
          <ul>
            <li>Centre d'aide</li>
            <li>Recrutements</li>
            <li>Informations légales</li>
            <li>Choix liées à la pub</li>
          </ul>
        </div>
        <div className="footer-block">
          <ul>
            <li>Cartes Cadeaux</li>
            <li>Boutique Netflix</li>
            <li>Préférences de cookies</li>
          </ul>
        </div>
        <div className="footer-block">
          <ul>
            <li>Presse</li>
            <li>Conditions d’utilisation</li>
            <li>Mentions légales</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
