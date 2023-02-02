import Component from '../Component.js';

export class Button extends Component {
  parentElement: HTMLElement | null;
  text: string;
  type: HTMLButtonElement['type'];

  constructor(
    parentElement: HTMLElement,
    tag: string,
    cssClass: string = '',
    text: string,
    type: HTMLButtonElement['type'],
  ) {
    super(parentElement, 'button', (cssClass = ''));
    this.parentElement = parentElement;
    this.text = text;
    this.type = type;
    this.element.className = cssClass;
  }

  render(): void {
    super.render();
    this.element.textContent = this.text;
  }
}
