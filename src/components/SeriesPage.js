import React, { useRef, useEffect, useState } from "react";
import "../components/SeriesPage.css";
import axios from "axios";

const API_KEY = "98fe391303153d3f1fe5ae4b9862769e";

function SeriesPage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTvShows, setTrendingTvShows] = useState([]);

  const containerRefRevoir = useRef(null);
  const containerRefTendances = useRef(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error("Erreur lors de la récupération des films tendances :", error);
      }
    };

    const fetchTrendingTvShows = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
        );
        setTrendingTvShows(response.data.results);
      } catch (error) {
        console.error("Erreur lors de la récupération des séries tendances :", error);
      }
    };

    fetchTrendingMovies();
    fetchTrendingTvShows();
  }, []);

  return (
    <section id="series-page">
      {/* A Revoir Section */}
      <div className="series-section">
        <div className="section-title">
          <p>À Revoir</p>
        </div>
        <div className="serie-container" ref={containerRefRevoir}>
          {trendingMovies.map((movie) =>
            movie.poster_path ? (
              <img
                key={movie.id}
                className="serie"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            ) : null
          )}
        </div>
      </div>

      {/* Tendances Section */}
      <div className="series-section">
        <div className="section-title">
          <p>Tendances actuelles</p>
        </div>
        <div className="serie-container" ref={containerRefTendances}>
          {trendingTvShows.map((show) =>
            show.poster_path ? (
              <img
                key={show.id}
                className="serie"
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
              />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}

export default SeriesPage;
