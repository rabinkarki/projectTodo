import React from 'react'

export const Footer = ({on,of}) => {
  return (
    <>  
    <nav className='input-2'>
          <ul>
            <li><a href='#' onClick={on}>All</a></li>
            <li><a href='#' onClick={of}>Active</a></li>
            <li><a href='#'>Completed</a></li>
            <li><a href='#'>Clear Completed</a></li>
        </ul>
        </nav>
        
        </>

  )
}
export default Footer;