import React, { useState } from "react";
//useState is a function
//React hooks start with the word 'use'
//Hooks need to be invoke inside the function/component body
//Hooks cannot be call conditionally

const UseStateBasics = () => {
  //console.log(useState('Hello World'));
  //const value = useState(1)[0];
  //const handler = useState(1)[1];
  //This operations can be donce using array destructring as below
  const [text, setText] = useState("Random Title");
  const handleClick = () => {
    if (text === "Random Title") {
      setText("Hello World");
    } else {
      setText("Random Title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
