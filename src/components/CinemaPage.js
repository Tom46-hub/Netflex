import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/CinemaPage.css";  // Importer le CSS spécifique pour la page cinéma polonais
import fond2 from "../assets/long2.png"; // Image fond2
import fond3 from "../assets/long3.png"; // Image fond3
import fond11 from "../assets/long11.png";
import fond10 from "../assets/long10.png";
import fond13 from "../assets/long13.png";

function CinemaPage() {
  const API_KEY = "98fe391303153d3f1fe5ae4b9862769e"; // Ta clé API

  const [movies, setMovies] = useState([]); // État pour stocker les films récupérés
  const [loading, setLoading] = useState(true); // État pour gérer le chargement des films
  const [error, setError] = useState(null); // État pour gérer les erreurs éventuelles

  useEffect(() => {
    // Effectue une requête API avec Axios pour récupérer les films
    axios
      .get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: API_KEY, // Utilisation de la constante API_KEY
          language: 'fr', // Langue des résultats
        },
      })
      .then((response) => {
        setMovies(response.data.results); // Mise à jour de l'état avec les films récupérés
        setLoading(false); // On indique que le chargement est terminé
      })
      .catch((error) => {
        setError(error.message); // On capture l'erreur si la requête échoue
        setLoading(false); // On indique que le chargement est terminé même en cas d'erreur
      });
  }, []); // Le tableau vide [] signifie que cet effet est exécuté une seule fois, au montage du composant

  if (loading) {
    return <div>Loading...</div>; // Affiche un message pendant le chargement
  }

  if (error) {
    return <div>Error: {error}</div>; // Affiche une erreur en cas de problème avec la requête
  }

  return (
    <section>
      <label className="Tpos">
        <div>
          <h3>My List</h3>
        </div>
      </label>
      <div className="carousel">
        <div className="carousel-track">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="carousel-item"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Affiche l'image du film
              alt={movie.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CinemaPage;
