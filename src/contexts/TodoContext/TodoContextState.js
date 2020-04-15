import React, { useReducer, useEffect } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./todoContextReducer";
import { ADD_TODO, LOAD_ALL_TODO, REMOVE_TODO } from "./Types";

const TodoState = (props) => {
  let defaultState = {
    todos: [],
    loading: false,
    add: true,
  };

  //Load all todos from localstorage
  useEffect(() => {
    //get values from localstorage
    dispatch({
      type: LOAD_ALL_TODO,
    });
  }, []);

  const [state, dispatch] = useReducer(TodoReducer, defaultState);

  const addTodo = (todo) => {
    dispatch({ type: ADD_TODO, payload: todo });
  };
  const removeTodoItem = (id) => {
    dispatch({ type: REMOVE_TODO, payload: id });
  };

  return (
    <TodoContext.Provider
      value={{ allTodos: state.todos, addTodo, removeTodoItem }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
