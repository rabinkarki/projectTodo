import React from 'react'
import Todo from './todo.jsx'
import { v4 as uuidv4 } from 'uuid';
 const Todolist = ({toDisp,checkTodo}) => {
   
  return (
    toDisp.map(todo => {
      return (
        <Todo checkTodo={checkTodo}  key={uuidv4()} todo={todo} checked={todo.checked} />
        
      )
    }
  )
 
    )
}
export default Todolist;
