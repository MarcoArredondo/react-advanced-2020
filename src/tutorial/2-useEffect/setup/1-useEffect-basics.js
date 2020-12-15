import React, { useState, useEffect } from "react";
// by default useEfect runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //useEffect hook is used when we want to execute some work outside the component (data fetching, listening for events, etc..)
  //The second parameter is an array of dependencies if it's blanck that means that useEffect only runs on the initial render
  //This will run when value attribute is changed
  useEffect(() => {
    if (value > 0) {
      document.title = `New messages (${value})`;
    }
  }, [value]);

  //You can have as many useEffect as you want
  useEffect(() => {
    console.log(
      "This only runs on the first render because the second parameter"
    );
  }, []);
  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
