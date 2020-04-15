import React from "react";
import TodoList from "./TodoList/TodoList";
import TodoForm from "./TodoForm/TodoForm";
const Todo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <TodoForm />
          <div className="card">
            <div className="card-body">
              <h4 className="mt-2 mb-2">All todos</h4>
              {<TodoList />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Todo;
