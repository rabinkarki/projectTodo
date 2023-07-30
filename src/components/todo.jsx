import React, { useState } from "react";

function Todo({ todo, updateTodo }) {
  const [checked, setChecked] = useState(todo.checked);

  function handleClick() {
    const updatedTodo = { ...todo, checked: !checked };
    updateTodo(updatedTodo);
    setChecked(!checked);
  }

  return (
    <div className="input-3">
      <input type="checkbox"  checked={checked} onChange={handleClick} />
      <span>{todo.text}</span>
    </div>
  );
}

export default Todo;
