import React, { useContext } from "react";
import TodoItem from "./TodoItem/TodoItem";
import TodoContext from "../../../../contexts/TodoContext/TodoContext";
const TodoList = () => {
  const todoContext = useContext(TodoContext);
  return (
    <ul className="list-group">
      {todoContext.allTodos.length === 0 ? (
        <div>No todo found.</div>
      ) : (
        todoContext.allTodos.map((t) => <TodoItem key={t.id} item={t} />)
      )}
    </ul>
  );
};
export default TodoList;
