export const reducer = (state, action) => {
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
