import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");

  //const firstValue = text || "hello world";
  //const secondValue = text && "hello world";

  return (
    <>
      <h1>{text || "Default value in case text is false"}</h1>
      <h1>{text && "This text will be displayed in case text is true"}</h1>
    </>
  );
};

export default ShortCircuit;
