import React from 'react'
import Todo from './todo'

export const todolist = ({todos}) => {
  return (
    todos.map(todo => {
      return (
        <Todo key={todo.id} todo={todo} checked={todo.checked} />
        
      )
    }
  )
 
    )
}
export default todolist;
