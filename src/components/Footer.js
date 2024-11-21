import "../assets/Footer.css";
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
            <img className="socials" src={Facebook} alt="Facebook" />
            <img className="socials" src={Instagram} alt="Instagram" />
            <img className="socials" src={X} alt="X" />
            <img className="socials" src={Youtube} alt="Youtube" />
          </div>
          <ul>
            <li>Audio et sous-titres</li>
            <li>Presse</li>
            <li>Confidentialité</li>
            <li>Nous contacter</li>
          </ul>
          <div className="footer-code">
            <p>Service Code</p>
          </div>
          <div className="footer-block">
            <p>© 1997-2024 Netflix, Inc. </p>
          </div>
        </div>
        <div className="footer-block">
          <ul>
            <li>Audiodescription</li>
            <li>Relations investisseurs</li>
            <li>Informations légales</li>
          </ul>
        </div>
        <div className="footer-block">
          <ul>
            <li>Centre d'aide</li>
            <li>Recrutements</li>
            <li>Préférences de cookies</li>
          </ul>
        </div>
        <div className="footer-block">
          <ul>
            <li>Cartes cadeaux</li>
            <li>Conditions d’utilisation</li>
            <li>Mentions légales</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
