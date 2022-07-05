import React from 'react'

const View = ({todos}) => {
  return todos.map(todo=>(
    <tr key={todo}>
        <td> {todo.title} </td>
        <td> {todo.category} </td>
    </tr>
  ))
}

export default View