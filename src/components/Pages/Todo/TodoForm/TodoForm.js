import React, { useState, useContext } from "react";
import TodoContext from "../../../../contexts/TodoContext/TodoContext";
import { v4 as uuidv4 } from "uuid";
const TodoForm = () => {
  const todoContext = useContext(TodoContext);

  const [state, setState] = useState({
    name: "",
    email: "",
    id: uuidv4(),
  });

  const bindForm = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addTodo = (e) => {
    e.preventDefault();
    if (state.name.trim() === "" || state.email.trim() === "") {
      alert("All fields are required");
      return;
    }
    todoContext.addTodo({ ...state });
    setState({
      name: "",
      email: "",
      id: uuidv4(),
    });
  };
  return (
    <form className="form-horizontal" onSubmit={addTodo}>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="name">
          Name:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            onChange={bindForm}
            value={state.name}
            name="name"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="email">
          Email:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            onChange={bindForm}
            value={state.email}
            name="email"
          />
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button type="submit" className="btn btn-dark">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
};
export default TodoForm;
