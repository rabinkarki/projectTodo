import React from 'react'
import Todo from './todo.jsx'

 const Todolist = ({todoes}) => {
  console.log(Array.isArray(todoes));
  return (
    todoes.map(todo => {
      return (
        <Todo key={todo.id} todo={todo} checked={todo.checked} />
        
      )
    }
  )
 
    )
}
export default Todolist;
