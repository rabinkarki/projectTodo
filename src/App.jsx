import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header.jsx";
import { Inputs } from "./components/inputs";

import Footer from "./components/nav.jsx";
import Todolist from "./components/todolist.jsx";
import "./styles/Home.scss";

function App() {
  const [display, setDisplay] = useState("all");
  const [active, setActive] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [todos, setTodos] = useState([]);

  const updateTodo = (newMessage) => {
    setTodos(newMessage);
  };
  const checkTodo = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
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
    switch (display) {
      case "active":
        return active;
      case "completed":
        return todos.filter((todo) => todo.checked);
      default:
        return todos;
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
            <Inputs tolist={todos} setTolist={updateTodo} />
            <Todolist toDisp={returnDisplay()} checkTodo={checkTodo} />
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
