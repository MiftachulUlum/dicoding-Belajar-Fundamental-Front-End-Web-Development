class NoteItem extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="note-item">
          <h3>${this.getAttribute('title')}</h3>
          <p>${this.getAttribute('body')}</p>
        </div>
      `;
    }
  }
  
  customElements.define('note-item', NoteItem);
  