import React from "react";
import "../components/Color.css";
import Footer from "../components/Footer";
import Action from "../assets/Action.png";
import ScienFi from "../assets/Scienfi.png";
import Thriller from "../assets/Thriller.png";
import Comedie from "../assets/Comédie.png";
import Romance from "../assets/Romance.png";
import Drame from "../assets/Drame.png";
import EmissionTV from "../assets/EmissionTV.png";

function Color() {
    const categories = [
        { src: EmissionTV, alt: "EmissionTV", text: "Émission TV" },
        { src: Drame, alt: "Drame", text: "Drame" },
        { src: Comedie, alt: "Comédie", text: "Comédie" },
        { src: Romance, alt: "Romance", text: "Romance" },
        { src: Thriller, alt: "Thriller", text: "Thriller" },
        { src: ScienFi, alt: "Science-fiction", text: "Science-fiction" },
        { src: Action, alt: "Action", text: "Action" },
    ];

    return (
        <section>
            <label className="color">
                <div>
                    <h3>Catégories</h3>
                </div>
            </label>
            <div className="carousel4">
                {categories.map((category, index) => (
                    <div key={index} className="carousel-item">
                        <img className={category.alt.toLowerCase()} src={category.src} alt={category.alt} />
                        <div className="overlay-text">{category.text}</div>
                    </div>
                ))}
            </div>
            <Footer />
        </section>
    );
}

export default Color;
