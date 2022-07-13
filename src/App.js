/** @format */

import "./App.css";
import Notes from "./Components/Notes";
import { nanoid } from "nanoid";
import { useState } from "react";
import Search from "./Components/Search";

function App() {
  const [notes, setNotes] = useState([]);
  const currentDate = new Date().toJSON().slice(0, 10);

  function addNote(text) {
    let newNote = [
      {
        id: nanoid(),
        noteText: text,
        date: currentDate,
      },
    ];
    let updatedNotes = [...newNote, ...notes];

    setNotes(updatedNotes);
  }

  function deleteNote(id) {
    let updatedNotes = notes.filter((note) => note.id !== id);

    setNotes(updatedNotes);
  }
  return (
    <div className="App">
      <h1>Notes App</h1>
      <Search />
      <Notes notes={notes} addNote={addNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
