import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import RestaurantMain from './RestaurantMain'

const Body = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <RestaurantMain/>
      {/* <Outlet/> */}
    </div>
  )
}

export default Body
