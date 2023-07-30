import React from 'react'
import Todo from './todo.jsx'
import { v4 as uuidv4 } from 'uuid';
 const Todolist = ({todoes,updateTodo}) => {
   
  return (
    todoes.map(todo => {
      return (
        <Todo updateTodo={updateTodo}  key={uuidv4()} todo={todo} checked={todo.checked} />
        
      )
    }
  )
 
    )
}
export default Todolist;
