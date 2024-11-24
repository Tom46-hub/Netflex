import React from 'react';
import './assets/Narcos.css'; // Le fichier CSS principal
import Narcos from './components/Narcos';
import SeriesPage from './components/SeriesPage';
import CinemaPage from './components/CinemaPage';

function App() {
  return (
    <div>
      <Narcos />
      <SeriesPage />
      <CinemaPage />
    </div>
  );
}

export default App;
