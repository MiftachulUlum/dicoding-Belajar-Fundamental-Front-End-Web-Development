document.addEventListener('DOMContentLoaded', () => {
    const notesContainer = document.getElementById('notes-container');
    const noteForm = document.getElementById('note-form');
  
    const fetchNotes = async () => {
      const response = await fetch('http://localhost:3000/api/notes');
      const notes = await response.json();
      notesContainer.innerHTML = '';
      notes.forEach(note => {
        const noteItem = document.createElement('note-item');
        noteItem.setAttribute('title', note.title);
        noteItem.setAttribute('body', note.body);
        notesContainer.appendChild(noteItem);
      });
    };
  
    noteForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = document.getElementById('note-title').value;
      const body = document.getElementById('note-body').value;
  
      const response = await fetch('http://localhost:3000/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, body })
      });
  
      if (response.ok) {
        fetchNotes();
        noteForm.reset();
      }
    });
  
    fetchNotes();
  });
  