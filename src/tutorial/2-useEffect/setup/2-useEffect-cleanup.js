import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checksize = () => {
    setSize(window.innerWidth);
  };
  //Use effect runs after every component render
  useEffect(() => {
    window.addEventListener("resize", checksize);
    return () => {
      //Removing the event listeners
      window.removeEventListener("resize", checksize);
    };
  });
  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
