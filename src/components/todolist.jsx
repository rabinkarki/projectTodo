import React from 'react'

export const todolist = ({item,on,OF}) => {
  return (
    
        <div className="input-3"   key={item.id}>
        
                  <input type="checkbox" checked={item.checked}  name="create"   />
                  {item.text}
                </div>
    
  )
}
export default todolist;
