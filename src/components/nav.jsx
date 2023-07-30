import React from "react";

export const Footer = (props) => {
  console.log(props);
  return (
    <>
      <nav className="input-2">
        <ul>
          <li>
            <button onClick={props.allClick}>All</button>
          </li>
          <li>
            <button onClick={props.activeClick}>Active</button>
          </li>
          <li>
            <button onClick={props.comClick}>Completed</button>
          </li>
          <li>
            <button onClick={props.clearclick}>Clear Completed</button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Footer;
