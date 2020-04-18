import {css, html, LitElement} from './web_modules/lit-element.js';

class ColorElement extends LitElement {
  static get properties () {
    return { target: { type: String } }
  }

  static get styles () {
    return css`
.color-chip {
  display: inline-block;
  line-height: 1;
  margin: 0 0 2px 4px;
  vertical-align: middle;
  border-radius: 3px;
  width: 0.9em;
  height: 0.9em;
  background: #fff;
  background-image: linear-gradient(135deg, #e1e1e1 25%, transparent 0%, transparent 75%, #e1e1e1 0%),linear-gradient(135deg, #e1e1e1 25%, transparent 0%, transparent 75%, #e1e1e1 0%);
  background-size: 1em 1em;
  background-position: 0 0, 0.5em 0.5em;
}
.color-chip>span {
  display: inline-block;
  width: 100%;
  height: 100%;
  margin-bottom: 2px;
  border-radius: 3px;
  border: 1px solid rgba(0,0,0,0.3);
}`
  }

  render () {
    return html`<code>${this.target}<span class="color-chip"><span style="background-color:${this.target};"></span></span></code>`
  }
}

customElements.define('x-color', ColorElement)
