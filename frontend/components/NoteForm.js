class NoteForm extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <form id="note-form">
          <input type="text" id="note-title" placeholder="Judul Catatan" required>
          <textarea id="note-body" placeholder="Isi Catatan" required></textarea>
          <button type="submit" class="btn btn-primary">Tambah Catatan</button>
        </form>
      `;
    }
  }
  
  customElements.define('note-form', NoteForm);
  