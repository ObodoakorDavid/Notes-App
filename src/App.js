/** @format */

import "./App.css";
import Notes from "./Components/Notes";
import { nanoid } from "nanoid";
import { useState } from "react";
import Search from "./Components/Search";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const currentDate = new Date().toJSON().slice(0, 10);

  let addNote = (text) => {
    let newNote = [
      {
        id: nanoid(),
        noteText: text,
        date: currentDate,
      },
    ];
    let updatedNotes = [...newNote, ...notes];
    setNotes(updatedNotes);
  };

  let deleteNote = (id) => {
    let updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  let handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <Search handleSearch={handleSearch} />
      <Notes
        notes={notes.filter((note) =>
          note.noteText.toLowerCase().includes(searchText.trim())
        )}
        addNote={addNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
