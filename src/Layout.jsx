import React from 'react'
import NavBar from './Components/NavBar'
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <NavBar />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout