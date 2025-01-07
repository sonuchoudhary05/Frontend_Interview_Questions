import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/header'

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default AppLayout
