import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/nav.jsx";
import Todolist from "./components/todolist.jsx";
import "./styles/Home.scss";

function App() {
  const [disinput, setDisinput] = useState([]);
  const [showAll,setShowAll]=useState(true);
  const addList = (inputs) => {
    
    const newTodo={
      id:disinput.length + 1,
      text:inputs,
      checked:false
    }
    setDisinput([...disinput, newTodo]);
  };
  const handleToggle = (id) => {
   
  };
  const handleShowAll = (id) => {
    setDisinput((prevTodos) =>
    prevTodos.filter((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    })
  );
    
  };
  console.log(handleShowAll);

  const handleShowChecked = () => {
    setShowAll(false);
  };

  
  
  return (
    <>
      <div className="container-1">
        <section className="section">
          <div className="heading">
            <Header />
          </div>

          <div className="content-2">
            <Home addList={addList} />
            {disinput.map((item) => {
              return (
                <Todolist item={item }    />
              );
            })}
            <Footer on={()=>handleShowAll(newTodo.id)} of={handleShowChecked}/>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
