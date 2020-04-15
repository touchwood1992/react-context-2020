import React, { Fragment, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import TodoContext from "../../../../../contexts/TodoContext/TodoContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TodoItem = (props) => {
  const todoContext = useContext(TodoContext);

  const { name, email, id } = props.item;

  const removeitem = (id) => {
    todoContext.removeTodoItem(id);
    toast("Removed Successfully !", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  return (
    <Fragment>
      <ToastContainer />
      <li className="list-group-item">
        <div>Name : {name}</div>
        <div>Email : {email}</div>
        <div>
          <FaTimes onClick={() => removeitem(id)} />
        </div>
      </li>
    </Fragment>
  );
};
export default TodoItem;
