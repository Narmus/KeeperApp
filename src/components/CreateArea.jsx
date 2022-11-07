import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [content, setContent] = useState({
    title: "",
    content: "",
  });

  function changeContent(event) {
    const { name, value } = event.target;
    setContent((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  // function addItem() {
  //   onAdd(content);
  //   setContent({ title: "", content: "" });
  // }

  function formSubmit(event) {
    event.preventDefault();
  }

  const addItem = () => {
    onAdd(content);
    setContent({ title: "", content: "" });
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          onChange={changeContent}
          name="title"
          placeholder="Title"
          value={content.title}
        />
        <textarea
          onChange={changeContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content.content}
        />
        <button onClick={addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
