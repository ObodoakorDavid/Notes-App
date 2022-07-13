/** @format */

import React from "react";
import "./Style.css";
import { useState } from "react";

const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState("");
  let h2 = document.querySelector(".h2");

  const characterLimit = 200;

  function handleChange(e) {
    
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
      h2.textContent = "Add New Note";
    } else {
      h2.textContent = "Limit Reached";
    }
  }

  return (
    <div className="addNote">
      <h2 className="h2">Add New Note</h2>
      <div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Start typing to add note..."
          value={noteText}
          onChange={handleChange}
        ></textarea>
        <div>
          <small>{characterLimit - noteText.length} Words left</small>
          <button
            onClick={() => {
              if (noteText.trim().length > 0) {
                addNote(noteText);
                setNoteText("");
                h2.textContent = "Add New Note";
              } else {
                h2.textContent = "Note Is Blank";
              }
            }}
          >
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
