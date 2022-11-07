import React from "react";

function Note({ title, content, uniqueID, onDelete, ident }) {
  function onClicked() {
    onDelete(ident, uniqueID);
  }

  return (
    <div id={uniqueID} className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <div>
        <button onClick={onClicked}>x</button>
      </div>
    </div>
  );
}

export default Note;
