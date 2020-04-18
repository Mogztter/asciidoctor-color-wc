import { LitElement, html } from './web_modules/lit-element.js';

class SimpleGreeting extends LitElement {
  static get properties() {
    return { 
      target: { type: String }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`<p>Hello, ${this.target}!</p>`;
  }
}

customElements.define('simple-greeting', SimpleGreeting);
