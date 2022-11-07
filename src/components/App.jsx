import React, { Fragment, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { getNotes } from "../utils/api";
import { postNotes } from "../utils/api";

function App() {
  // localStorage.length < 1 && localStorage.setItem("Notes", JSON.stringify([]));

  // let localArray = JSON.parse(localStorage.getItem("Notes"));
  const [lists, setLists] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("Notes", JSON.stringify(lists));
  // }, [lists]);

  // const setNotes = async () => {
  //   const notesObject = await getNotes();
  //   console.log("setnotes", notesObject);
  //   setLists(notesObject.notes);
  // };

  const setNotes = async () => {
    const notesObject = await getNotes();
    setLists(notesObject);
  };

  useEffect(() => {
    setNotes();
  }, []);

  function addNote(note) {
    setLists((prevValue) => {
      return [...prevValue, note];
    });
    postNotes(note.title, note.content);
  }

  function deletNote(id) {
    // console.log("triggered " + id);
    setLists((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <Fragment>
      <Header />

      <CreateArea onAdd={addNote} />

      {/*Created a map function to gather all notes from notes.js array file*/}
      {lists.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deletNote}
          />
        );
      })}

      <Footer />
    </Fragment>
  );
}

export default App;
