import React from "react";
import { useState } from "react";
import App from "../App";
import img from "../assets/mountain.png";

const Home = (props) => {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputs(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      props.addList(inputs);
      setInputs("");
    }
  };
  return (
    <>
      <input
        type="text"
        className="input-1"
        name="create"
        value={inputs}
        onChange={handleChange}
        onKeyUp={handleSubmit}
        placeholder="Create a new todo"
      />
    </>
  );
};
export default Home;
