import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
        <Link to="/"><button>Links</button></Link>
        <Link to="/Profile"><button>Profile Details</button></Link>
        <Link to="/Preview"><button>Preview</button></Link>
        <Link to="/login"><button>Login</button></Link>
    </div>
  )
}

export default NavBar