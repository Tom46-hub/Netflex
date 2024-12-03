import React from 'react';
import './components/Narcos.css'; // Le fichier CSS principal
import Narcos from './components/Narcos';
import SeriesPage from './components/SeriesPage';
import CinemaPage from './components/CinemaPage';
import List from './components/List';
import Color from './components/Color';

function App() {
  return (
    <div>
      <Narcos />
      <SeriesPage />
      <CinemaPage />
      <List/>
      <Color/>
    </div>
  );
}

export default App;
