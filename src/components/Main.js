import "../assets/main.css";
import Narcos from "../assets/bg.png";
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

function Body() {
  return (
    <div>
      <div className="bg-container">
        <img className="fond-bg" src={Narcos} alt="Narcos" />
        <div className="text-overlay">
          <h1>Netflix Originals: <br /> Narcos </h1>
          <p>
            Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs d’Escobar
            passent à l’action et déclarent la guerre au gouvernement.
          </p>
          <div className="button">
            <button>+</button>
            <button>▶</button>
          </div>
        </div>
      </div>
      <div className="Revoir">
        <p>A Revoir</p>
      </div>
      <div className="serie-container">
        <img className="serie" src={serie1} alt="Serie 1" />
        <img className="serie" src={serie2} alt="Serie 2" />
        <img className="serie" src={serie3} alt="Serie 3" />
        <img className="serie" src={serie4} alt="Serie 4" />
        <img className="serie" src={serie5} alt="Serie 5" />
        <img className="serie" src={serie6} alt="Serie 6" />
        <img className="serie" src={serie7} alt="Serie 7" />
      </div>
      <br /><br /><br /><br />
      <div className="Revoir">
        <p>Tendances Actuelles</p>
      </div>
      <div className="serie-container">
        <img className="serie" src={serie9} alt="Serie 9" />
        <img className="serie" src={serie10} alt="Serie 10" />
        <img className="serie" src={serie11} alt="Serie 11" />
        <img className="serie" src={serie12} alt="Serie 12" />
        <img className="serie" src={serie13} alt="Serie 13" />
        <img className="serie" src={serie14} alt="Serie 14" />
        <img className="serie" src={serie8} alt="Serie 8" />
      </div>
    </div>
  );
}

export default Body;
