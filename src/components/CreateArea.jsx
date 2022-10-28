import React, { useState } from "react";

function CreateArea() {
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
    console.log(content);
  }

  return (
    <div>
      <form>
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
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
