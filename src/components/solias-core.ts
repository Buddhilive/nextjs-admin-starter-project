import { LitElement, css, html } from 'lit';
import { customElement, query, queryAll } from 'lit/decorators.js';

@customElement('solias-core')
export class SoliasCore extends LitElement {

  @query('#app-root') appRoot!: HTMLDivElement;
  @queryAll('.view-panel') viewPanels!: HTMLDivElement[];

  render() {
    return html`
      <div class="solias-core">
        <div class="solias-core__nav">
          <ul class="solias-core__nav-list">
            <li class="solias-core__nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#242424"><path d="m352-522 86-87-56-57-44 44-56-56 43-44-45-45-87 87 159 158Zm328 329 87-87-45-45-44 43-56-56 43-44-57-56-86 86 158 159Zm24-567 57 57-57-57ZM290-120H120v-170l175-175L80-680l200-200 216 216 151-152q12-12 27-18t31-6q16 0 31 6t27 18l53 54q12 12 18 27t6 31q0 16-6 30.5T816-647L665-495l215 215L680-80 465-295 290-120Zm-90-80h56l392-391-57-57-391 392v56Zm420-419-29-29 57 57-28-28Z"/></svg>
              <span class="nav-label">Design<span>
            </li>
          </ul>
        </div>
        <div class="solias-core__workspace">
          <div class="view-panel">
            <solias-core-design></solias-core-design>
          </div>
        </div>
      </div>
    `
  }

  changeView() {
    
  }

  static styles = css`
  .solias-core {
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .solias-core__nav {
    display: flex;
    flex-direction: column;
    width: 80px;
    height: 100vh;
    background-color: var(--solias-surface);
  }

  .solias-core__nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  .solias-core__nav-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    padding: 8px 12px;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.5s ease;
  }

  .solias-core__nav-item:hover {
    background-color: var(--solias-secondary-container);
  }

  .solias-core__workspace {
    flex-grow: 1;
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .solias-core__workspace .view-panel {
    display: flex;
    width: 100%;
    height: 100%;
  }
  `;

}

declare global {
  interface HTMLElementTagNameMap {
    'solias-core': SoliasCore
  }
}
