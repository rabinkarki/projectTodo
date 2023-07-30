import React, { useState } from "react";

export const Inputs = ({ tolist, setTolist }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      const newTodo = {
        id: tolist.length + 1,
        text: inputText,
        checked: false,
      };
      setTolist([...tolist, newTodo]);
      setInputText("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="input-1">
        <input
          type="text"
          className="input-1-in"
          name="create"
          value={inputText}
          onChange={handleChange}
          placeholder="Create a new todo"
        />
      </form>
    </>
  );
};
