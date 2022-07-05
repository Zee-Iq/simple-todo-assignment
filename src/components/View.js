import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

const View = ({ todos }) => {
  return todos.map((todo) => (
    <tr key={todo}>
      <td> {todo.title} </td>
      <td className="delete-btn">
        Done
        <Icon icon={trash} />
      </td>
    </tr>
  ));
};
export default View;
