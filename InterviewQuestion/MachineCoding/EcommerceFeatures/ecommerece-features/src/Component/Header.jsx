import React from 'react'

const Header = () => {
  return (
   <nav className='h5 flex items-center justify-between'>
    <h2 className='text-2xl font-mono'>Flipkart</h2>
    <input type = "text" placeholder='Search the products....' />
   </nav>
  )
}

export default Header
