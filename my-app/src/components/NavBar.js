import React,{useContext} from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom';
import { orderContext } from "../components/CartContext";

function NavBar(props) {
  const order = useContext(orderContext);

  const disabled = {
    width: order <= 0 ? '0px': '40px'
  }

  return (
    <header>
      <nav>
      <ul className="nav__links">
                    <li><Link exact to="/">Home</Link></li>
                    <li><Link to="/Products">products</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <Link to="/Carrito" ><img src={props.image} alt="carrito" className="img" style={disabled}></img></Link>
                </ul>
      </nav>
    </header>
  )
}

export default NavBar
