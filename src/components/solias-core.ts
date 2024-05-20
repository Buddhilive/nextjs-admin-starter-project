import { LitElement, css, html } from 'lit';
import { customElement, query, queryAll } from 'lit/decorators.js';

@customElement('solias-core')
export class SoliasCore extends LitElement {

  @query('#app-root') appRoot!: HTMLDivElement;
  @queryAll('.view-panel') viewPanels!: HTMLDivElement[];
  @queryAll('.solias-core__nav-item') navItems!: HTMLLIElement[];

  render() {
    return html`
      <div class="solias-core">
        <div class="solias-core__nav">
          <ul class="solias-core__nav-list">
            <li class="solias-core__nav-item" id="nav-design" @click="${() => this.changeView('nav-design')}">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#242424"><path d="m352-522 86-87-56-57-44 44-56-56 43-44-45-45-87 87 159 158Zm328 329 87-87-45-45-44 43-56-56 43-44-57-56-86 86 158 159Zm24-567 57 57-57-57ZM290-120H120v-170l175-175L80-680l200-200 216 216 151-152q12-12 27-18t31-6q16 0 31 6t27 18l53 54q12 12 18 27t6 31q0 16-6 30.5T816-647L665-495l215 215L680-80 465-295 290-120Zm-90-80h56l392-391-57-57-391 392v56Zm420-419-29-29 57 57-28-28Z"/></svg>
              <span class="nav-label">Design<span>
            </li>
            <li class="solias-core__nav-item" id="nav-workflow" @click="${() => this.changeView('nav-workflow')}">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#242424"><path d="M480-60q-63 0-106.5-43.5T330-210q0-52 31-91.5t79-53.5v-85H200v-160H100v-280h280v280H280v80h400v-85q-48-14-79-53.5T570-750q0-63 43.5-106.5T720-900q63 0 106.5 43.5T870-750q0 52-31 91.5T760-605v165H520v85q48 14 79 53.5t31 91.5q0 63-43.5 106.5T480-60Zm240-620q29 0 49.5-20.5T790-750q0-29-20.5-49.5T720-820q-29 0-49.5 20.5T650-750q0 29 20.5 49.5T720-680Zm-540 0h120v-120H180v120Zm300 540q29 0 49.5-20.5T550-210q0-29-20.5-49.5T480-280q-29 0-49.5 20.5T410-210q0 29 20.5 49.5T480-140ZM240-740Zm480-10ZM480-210Z"/></svg>
              <span class="nav-label">Workflow<span>
            </li>
            <li class="solias-core__nav-item" id="nav-database" @click="${() => this.changeView('nav-database')}">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#242424"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/></svg>
              <span class="nav-label">Database<span>
            </li>
            <li class="solias-core__nav-item" id="nav-launch" @click="${() => this.changeView('nav-launch')}">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#242424"><path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"/></svg>
              <span class="nav-label">Launch<span>
            </li>
          </ul>
        </div>
        <div class="solias-core__workspace">
          <div class="view-panel" data-view="nav-design">
            <solias-core-design></solias-core-design>
          </div>
        </div>
      </div>
    `
  }

  changeView(navItemRef: string) {
    const navItem = Array.from(this.navItems).find((item: HTMLLIElement) => item.id == navItemRef);
    this.navItems.forEach((item: HTMLLIElement) => item.classList.remove('solias-core__nav-item--active'));
    navItem?.classList.add('solias-core__nav-item--active');
    const view = Array.from(this.viewPanels).find((item: HTMLDivElement) => item.getAttribute('data-view') == navItemRef);
    this.viewPanels.forEach((item: HTMLDivElement) => item.style.display = 'none');
    if (view) {
      view.style.display = 'flex';
    }
    console.log(navItem);
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
    transition: background-color 0.5s ease;
  }

  .solias-core__nav-item:hover {
    background-color: var(--solias-secondary-container);
  }

  .solias-core__nav-item.solias-core__nav-item--active {
    background-color: var(--solias-secondary-container);
    font-weight: 600;
    border-right: 4px solid var(--solias-primary);
  }

  .solias-core__nav-item .nav-label {
    color: var(--solias-on-variant);
  }

  .solias-core__workspace {
    flex-grow: 1;
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .solias-core__workspace .view-panel {
    display: none;
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
