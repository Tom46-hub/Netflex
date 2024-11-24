import "../assets/Navbar.css";
import logo from "../assets/logo.png";
import dropdown from "../assets/dropdown.svg";
import notification from "../assets/notification.svg";
import search from "../assets/search.svg";
import avatar from "../assets/avatar.png";
import burger from "../assets/burger.svg";

function Navbar() {
  return (
    <header>
      <div className="header__left">
        <img className="logo" src={logo} alt="Netflix" />
        <nav>
          <a className="navi">Découverte</a>
          <a className="navi">Séries TV</a>
          <a className="navi">Films</a>
          <a className="navi">Programmes originaux</a>
          <a className="navi">Ajouts récents</a>
          <a className="navi">Ma liste</a>
        </nav>
      </div>
      <a className="burger">
        <img className="burger__icon" src={burger} />
      </a>
      <div className="header__right">
        <a>
          <img src={search} />
        </a>
        <a>Jeunesse</a>
        <a>
          <img src={notification} />
        </a>
        <a className="avatar">
          <img src={avatar} />
          <img className="avatar__dropdown" src={dropdown} />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
