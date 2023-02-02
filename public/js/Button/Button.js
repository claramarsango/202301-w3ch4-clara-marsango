import Component from '../Component.js';
export class Button extends Component {
    constructor(parentElement, tag, cssClass = '', text, type) {
        super(parentElement, 'button', (cssClass = ''));
        this.parentElement = parentElement;
        this.text = text;
        this.type = type;
        this.element.className = cssClass;
    }
    render() {
        super.render();
        this.element.textContent = this.text;
    }
}
