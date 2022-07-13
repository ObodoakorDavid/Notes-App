/** @format */

import "./App.css";
import Notes from "./Components/Notes";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Search from "./Components/Search";
import Header from "./Components/Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const currentDate = new Date().toJSON().slice(0, 10);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("react-notes-app-data-dave", JSON.stringify(notes));
    }, 2);
  }, [notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-notes-app-data-dave")
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

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
    localStorage.setItem("react-notes-app-data-dave", JSON.stringify(notes));
  };

  let deleteNote = (id) => {
    let updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("react-notes-app-data-dave", JSON.stringify(notes));
  };

  let handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="App">
      <Header />
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
