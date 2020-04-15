import { ADD_TODO, LOAD_ALL_TODO } from "./Types";
export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      const arrayToStore = {
        ...state,
        todos: [...state.todos, action.payload],
      };
      localStorage.setItem("alltodos", JSON.stringify(arrayToStore));

      return arrayToStore;

    case LOAD_ALL_TODO:
      if (localStorage.getItem("alltodos")) {
        const allItems = localStorage.getItem("alltodos");
        const objState = JSON.parse(allItems);
        return { ...objState };
      }
      return { ...state };

    default:
      return { ...state };
  }
};
