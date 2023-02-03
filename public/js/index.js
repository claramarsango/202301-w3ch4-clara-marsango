import Header from './components/Header/Header.js';
import Card from './components/TvShowCard/TvShowCard.js';
import { series } from './series.js';
const divContainer = document.querySelector('.container');
const exampleHeader = new Header('My Series', divContainer, 'main-header');
exampleHeader.render();
series.forEach(tvShow => {
  const tvShowCard = new Card(tvShow, divContainer, 'serie');
  tvShowCard.render();
});
