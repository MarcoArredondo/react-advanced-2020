import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Marco",
    age: 26,
    message: "Random message",
  });
  const changeMessage = () => {
    //Spread operator to copy the old values and then we decide which value we want to change
    setPerson({ ...person, message: "Hello world" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
