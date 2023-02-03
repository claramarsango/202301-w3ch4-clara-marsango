var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Card_tvShow;
import Component from '../Component.js';
export default class Card extends Component {
    constructor(tvShow, parentElement, _cssClass = '') {
        super(parentElement, 'li', 'serie');
        _Card_tvShow.set(this, void 0);
        __classPrivateFieldSet(this, _Card_tvShow, tvShow, "f");
    }
    render() {
        super.render();
        this.element.innerHTML = `
    <img class="serie__poster" 
      src="${__classPrivateFieldGet(this, _Card_tvShow, "f").poster}"
      alt="${__classPrivateFieldGet(this, _Card_tvShow, "f").name} poster" />
    <h4 class="serie__title">${__classPrivateFieldGet(this, _Card_tvShow, "f").name}</h4>
    <p class="serie__info">${__classPrivateFieldGet(this, _Card_tvShow, "f").creator}</p>
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
_Card_tvShow = new WeakMap();
