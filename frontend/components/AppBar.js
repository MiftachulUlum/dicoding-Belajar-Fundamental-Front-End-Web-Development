class AppBar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <br>  
      <div style="width: 100%; background: #333; color: white; padding: 2px 0; text-align: center;">
          <h1> Notes App - Miftachul Ulum </h1>
        </div>
        <br>
      `;
    }
  }
  
  customElements.define('app-bar', AppBar);
  