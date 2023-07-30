import React from 'react'
import Todo from './todo.jsx'

 const Todolist = ({todoes,updateTodo}) => {
   
  return (
    todoes.map(todo => {
      return (
        <Todo updateTodo={updateTodo} key={todo.id} todo={todo} checked={todo.checked} />
        
      )
    }
  )
 
    )
}
export default Todolist;
