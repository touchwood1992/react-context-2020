import React, { Fragment } from "react";
const TodoItem = (props) => {
  const { name, email } = props.item;
  return (
    <Fragment>
      <li className="list-group-item">
        <div>Name : {name}</div>
        <div>Email : {email}</div>
      </li>
    </Fragment>
  );
};
export default TodoItem;
