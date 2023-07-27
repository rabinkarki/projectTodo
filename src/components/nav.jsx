import React from 'react'

export const Footer = (props) => {
  console.log(props);
  return (
    <> 
   
    <nav className='input-2'>
          <ul>
            <li><a href='#' onClick={props.allClick}>All</a></li>
            <li><a href='#' onClick={props.activeClick}>Active</a></li>
            <li><a href='#' onClick={props.comClick}>Completed</a></li>
            <li><a href='#' onClick={props.clearclick}>Clear Completed</a></li>
        </ul>
        </nav>
        
        </>

  )
}
export default Footer;