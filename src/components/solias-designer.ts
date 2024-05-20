import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('solias-core-design')
export class SoliasCoreDesign extends LitElement {
  
  render() {
    return html`
      <p>Design</p>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'solias-core-design': SoliasCoreDesign
  }
}
