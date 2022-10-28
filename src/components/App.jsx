import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />

      <CreateArea />

      {/*Created a map function to gather all notes from notes.js array file*/}
      {notes.map((note, index) => {
        return (
          <Note key={note.key} title={note.title} content={note.content} />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
