import React, { useState, useEffect } from "react";
import { data } from "../../../data";
//useParams is a hook provided from React Router Dom
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("Default Name");
  const { id } = useParams();
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn">
        People
      </Link>
    </div>
  );
};

export default Person;
