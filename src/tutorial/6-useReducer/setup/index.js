import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  //It is mandatory to return the state from reducer function
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item added",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter value",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }

  if (action.type === "REMOVE_PERSON") {
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payload;
    });
    return { ...state, people: newPeople };
  }

  throw new Error("No matching function type");
};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "Hello World",
};
const Index = () => {
  const [name, setName] = useState("");
  //When using useReducer we are getting back two things, state and the dispatch
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      //For dispatch function we always have to pass an object with type attribute
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const removePerson = (id) => {
    dispatch({ type: "REMOVE_PERSON", payload: id });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              className="btn"
              onClick={() => {
                removePerson(person.id);
              }}
            >
              Remove Person
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
