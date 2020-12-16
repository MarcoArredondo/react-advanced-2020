import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default user");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        //Catching a 404 error
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        //Onbject deconstructing
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);
  if (isLoading) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
