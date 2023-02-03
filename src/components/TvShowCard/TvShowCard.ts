import Component from '../Component.js';
import TVShow from '../../types/Series.js';

export default class Card extends Component {
  #tvShow: TVShow;

  constructor(
    tvShow: TVShow,
    parentElement: HTMLElement | null,
    _cssClass: string = '',
  ) {
    super(parentElement, 'li', 'serie');
    this.#tvShow = tvShow;
  }

  render(): void {
    super.render();
    this.element.innerHTML = `
    <img class="serie__poster" 
      src="${this.#tvShow.poster}"
      alt="${this.#tvShow.name} poster" />
    <h4 class="serie__title">${this.#tvShow.name}</h4>
    <p class="serie__info">${this.#tvShow.creator}</p>
    <ul class="score">
      <li class="score__star">
        <i class="icon--score fas fa-star" title="1/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="2/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="3/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="4/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="5/5"></i>
        </li>
      </ul>
      <i class="fas fa-times-circle icon--delete"></i>
    `;
  }
}
