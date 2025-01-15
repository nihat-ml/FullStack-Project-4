import React from 'react'
import UserNavbar from '../components/UserNavbar'
import UserFooter from '../components/UserFooter'
import {Outlet} from "react-router"

function UserRoot() {
  return (
    <>
      <UserNavbar/>
      <Outlet/>
      <UserFooter/>
    </>
  )
}

export default UserRoot
