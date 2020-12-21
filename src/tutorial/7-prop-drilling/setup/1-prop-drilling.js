import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

//With this we have acces to two components the provider and the consumer
const PersonContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    //The provider needs to wrap the whole component tree
    <PersonContext.Provider value={{removePerson, people}}>
      <h3>Context API - UseContect()</h3>
      <List people={people} />
    </PersonContext.Provider>
>
  );
};

const List = () => {
  //We are receiving the people object from the context passed as parameter in the provider
  const {people} = useContext(PersonContext);
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
      
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  //We are looking for the context we created
  const removePerson = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button className="btn" onClick={() => removePerson(id)}>
        Remove Person
      </button>
    </div>
  );
};

export default ContextAPI;
