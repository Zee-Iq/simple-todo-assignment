import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";


const View = ({ todos, deleteTodo }) => {
  return todos.map((todo,index) => (
    <tr key={index}>
      <td> {todo.title} </td>

      <Icon icon={trash} />
      <td className="delete-btn" onClick={() =>deleteTodo(todo.title)}>Done</td>
    </tr>
  ));
};
export default View;
