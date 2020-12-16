import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  //const firstValue = text || "hello world";
  //const secondValue = text && "hello world";

  return (
    <>
      <h1>{text || "Default value in case text is false"}</h1>
      <h1>{text && "This text will be displayed in case text is true"}</h1>
      <hr />
      <h1>{isError && <h1>Error..</h1>}</h1>
      {isError ? (
        <p>True case in ternay operator (There's an error)</p>
      ) : (
        <p>False case in ternary operator (There's no error)</p>
      )}
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        Toggle Error
      </button>
    </>
  );
};

export default ShortCircuit;
