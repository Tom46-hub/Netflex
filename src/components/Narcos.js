import React, { useState, useEffect } from "react";
import "../components/Narcos.css"; // Assurez-vous d'avoir votre fichier CSS associé
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TrendingShow() {
  const [trendingShow, setTrendingShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const defaultImage =
    "https://via.placeholder.com/1920x1080?text=Image+Not+Available"; // Image par défaut

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer 98fe391303153d3f1fe5ae4b9862769e",
      },
    };

    fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Vérifier la structure des données

        if (data.results && data.results.length > 0) {
          setTrendingShow(data.results[0]); // Récupère la première série
        } else {
          setError("Aucune série trouvée");
        }
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des données :", err);
        setError("Une erreur est survenue. Veuillez réessayer.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Chargement...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const backdropPath = trendingShow?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${trendingShow.backdrop_path}`
    : defaultImage;

  return (
    <div>
      <Navbar />
      <div className="bg-container">
        {/* Test avec l'URL dynamique de l'image */}
        <div
          className="fond-bg"
          style={{
            backgroundImage: `url(${backdropPath})`,
          }}
        ></div>
        <div className="text-overlay">
          <h1 className="Netflix">Netflix Originals:</h1>
          <h1 className="TrendingShow">{trendingShow.name}</h1>
          <p className="pave2">{trendingShow.overview || "Aucune description disponible."}</p>
          <div className="button">
            <button>▶ Play</button>
            <button>Add to List</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TrendingShow;
