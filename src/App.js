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
  const [darkMode, setDarkMode] = useState(true);

  let darktheme = () => {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("react-notes-app-data-dave", JSON.stringify(notes));
      localStorage.setItem("store-dark-mode", darkMode);
    }, 2);
  }, [notes, darkMode]);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-notes-app-data-dave")
    );
    const savedDarkMode = localStorage.getItem("store-dark-mode");
    console.log(savedDarkMode);

    if (savedNotes) {
      setNotes(savedNotes);
    }

    if (savedDarkMode == "true") {
      setDarkMode(true);
      document.body.classList.remove("darkmode");
    } else if (savedDarkMode == "false") {
      setDarkMode(false);
      document.body.classList.add("darkmode");
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
      <Header darktheme={darktheme} darkMode={darkMode} />
      <Search handleSearch={handleSearch} />
      <Notes
        notes={notes.filter((note) =>
          note.noteText
            .toLowerCase()
            .includes(searchText.toLocaleLowerCase().trim())
        )}
        addNote={addNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
