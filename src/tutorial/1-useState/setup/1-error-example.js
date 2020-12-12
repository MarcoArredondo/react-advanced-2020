import React from "react";

const ErrorExample = () => {
  let title = "Random title";
  const handleClick = () => {
    //Example on how is not possible to change tha value of title inside the component
    //without re-rednering the component.
    title = "Hello People";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" type="button" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
