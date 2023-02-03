import Header from '..//Header/Header.js';
import Card from '..//TvShowCard/TvShowCard.js';
import { series } from '../../series.js';
import Serie from '../../types/Series.js';
import Component from '../Component.js';

export default class App extends Component {
  #header: Header;
  #series: Serie[];

  constructor(series: Serie[], parentElement: HTMLElement | null) {
    super(parentElement, 'main');
    this.#header = new Header('My Series', this.element, 'main-header');
    this.#series = series;
  }

  render() {
    super.render();
    this.#header.render();
    this.element.innerHTML = `
    <section class="series">
        <h2 class="section-title">Series list</h2>
        <section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          <p class="info">You have 4 series pending to watch</p>
          <!--<p class="info">Congrats! You've watched all your series</p>-->
          <ul class="series-list">
          `;
    series.forEach(tvShow => {
      const tvShowCard = new Card(tvShow, this.element, 'serie');
      tvShowCard.render();
    });
    this.element.innerHTML = `</ul>
              <i class="fas fa-times-circle icon--delete"></i>
            </li>
          </ul>
        </section>`;
  }
}

const divContainer = document.querySelector('.container') as HTMLElement;

const app = new App(series, divContainer);
app.render();
