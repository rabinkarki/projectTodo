import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header.jsx";

import Footer from "./components/nav.jsx";
import Todolist from "./components/todolist.jsx";
import "./styles/Home.scss";

function App() {
  const [todos, setTodos] = useState([]);
  const [display, setDisplay] = useState("all");
  const [active, setActive] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputs(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      const newTodo = {
        id: todos.length + 1,
        text: inputs,
        checked: false,
      };
      setTodos([...todos, newTodo]);
      setInputs("");
    }
  };

  function allClick() {
    setDisplay("all");
  }

  function activeClick() {
    setActive(() => {
      return todos.filter((todo) => !todo.checked);
    });

    setDisplay("active");
  }
  function completeclick() {
    setCompleted(() => {
      return todos.filter((todo) => todo.checked);
    });
    setDisplay("completed");
  }
  function clearclick() {
    setTodos(todos.filter((todo) => !todo.checked));

    setCompleted(completed.filter((todo) => !todo.checked));
  }

  /* Returns display */
  function returnDisplay() {
    if (display == "all") {
      return todos;
    } else if (display == "active") {
      return active;
    } else if (display == "completed") {
      return completed;
    } else if (display == "clear completed") {
      return completed;
    }
  }

  return (
    <>
      <div className="container-1">
        <section className="section">
          <div className="heading">
            <Header />
          </div>

          <div className="content-2">
            <input
              type="text"
              className="input-1"
              name="create"
              value={inputs}
              onChange={handleChange}
              onKeyUp={handleSubmit}
              placeholder="Create a new todo"
            />

            <Todolist todos={returnDisplay()} />

            <Footer
              allClick={allClick}
              activeClick={activeClick}
              comClick={completeclick}
              clearclick={() => clearclick()}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
