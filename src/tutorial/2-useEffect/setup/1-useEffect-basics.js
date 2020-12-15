import React, { useState, useEffect } from "react";
// by default useEfect runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //useEffect hook is used when we want to execute some work outside the component (data fetching, listening for events, etc..)
  useEffect(() => {
    if (value > 0) {
      document.title = `New messages (${value})`;
    }
  });
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
