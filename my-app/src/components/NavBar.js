import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

function NavBar(props) {
  return (
    <header>
      <nav>
      <ul className="nav__links">
                    <li><Link exact to="/">Home</Link></li>
                    <li><Link to="/Products">products</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <Link to="/Carrito"><img src={props.image} alt="carrito" className="img" ></img></Link>
                </ul>
      </nav>
    </header>
  )
}

export default NavBar
