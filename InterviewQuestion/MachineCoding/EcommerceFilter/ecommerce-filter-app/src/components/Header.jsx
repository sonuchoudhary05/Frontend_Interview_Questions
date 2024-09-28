import React from 'react';

const Header = () => {
  return (
    <div className='h-5 flex items-center justify-between'>
      <p className='text-2xl font-mono'>RoadSideCoder Store</p>
      <input type="text" placeholder="Search a products..." className='p-2' />
    </div>
  )
}

export default Header
