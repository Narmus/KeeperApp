import React from "react";

function Note(props) {
  function onClicked() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div>
        <button onClick={onClicked}>x</button>
      </div>
    </div>
  );
}

export default Note;
