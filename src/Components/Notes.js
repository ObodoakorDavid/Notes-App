/** @format */

import React from "react";
import AddNote from "./AddNote";
import "./Style.css";
import { MdDelete } from "react-icons/md";

const Todos = ({ notes, addNote, deleteNote }) => {
  return (
    <div className="Todos">
      {notes.map((note) => {
        let { id, noteText, date } = note;
        return (
          <div className="items" key={id}>
            <p>{noteText}</p>
            <div className="inner_div">
              <small>{date}</small>
              <MdDelete
                onClick={() => {
                  deleteNote(id);
                }}
                className="icon"
                style={{color: 'black'}}
              />
            </div>
          </div>
        );
      })}

      <AddNote addNote={addNote} />
    </div>
  );
};

export default Todos;
