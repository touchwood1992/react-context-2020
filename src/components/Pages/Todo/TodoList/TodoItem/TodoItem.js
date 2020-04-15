import React, { Fragment, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import TodoContext from "../../../../../contexts/TodoContext/TodoContext";
const TodoItem = (props) => {
  const todoContext = useContext(TodoContext);

  const { name, email, id } = props.item;
  return (
    <Fragment>
      <li className="list-group-item">
        <div>Name : {name}</div>
        <div>Email : {email}</div>
        <div>
          <FaTimes onClick={() => todoContext.removeTodoItem(id)} />
        </div>
      </li>
    </Fragment>
  );
};
export default TodoItem;
