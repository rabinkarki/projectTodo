import React, { useState } from "react";

function Todo({ todo }) {
  const [checked, setChecked] = useState(todo.checked);

  function handleClick() {
    todo.checked = !todo.checked;

    setChecked(todo.checked);
  }

  return (
    <div className="input-3">
      <input
        type="checkbox"
        checked={checked}
        name="create"
        onChange={handleClick}
      />
      {todo.text}
    </div>
  );
}

export default Todo;
