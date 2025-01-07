import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const AppLayout = () => {
  return (
    <div className='p-6'>
        <Header />
      <main>
      <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
