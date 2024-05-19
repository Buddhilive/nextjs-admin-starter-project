import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('solias-core')
export class SoliasCore extends LitElement {
  
  render() {
    return html`
      <p>Hello World!</p>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'solias-core': SoliasCore
  }
}
