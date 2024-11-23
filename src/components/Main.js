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
import fond2 from "../assets/fond2.png";
import vid1 from "../assets/vid1.png";
import vid2 from "../assets/vid2.png";
import vid3 from "../assets/vid3.png";
import vid4 from "../assets/vid4.png";



function Body() {
  return (
    <div>
      <div className="bg-container">
        <img className="fond-bg" src={Narcos} alt="Narcos" />
        <div className="text-overlay">
          <h1 className="Netflix">Netflix Originals: <br /></h1>
          <h1 className="Narcos">Narcos
            
          </h1>
          <p className="pave2">
            Le cartel de Cali reprend le pouvoir en Colombie. <br></br> Les successeurs d’Escobar
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

      <div className="bg-container2">
      <img className="fond-bg2" src={fond2} alt="Fondbg2" />
      <div className="text-overlay2">
        <h1 className="or">L'ÂGE D'OR DU CINÉMA</h1>
        <h1 className="polonais">POLONAIS</h1>
        <p className="pave">Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… <br></br>
        Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale.</p>
      </div>
      </div>

      <div className="video">
        <img className="vid1" src={vid1}/>
        <img className="vid2" src={vid2}/>
        <img className="vid3" src={vid3}/>
        <img className="vid4" src={vid4}/>
      </div>

    </div>

    
  );
}

export default Body;