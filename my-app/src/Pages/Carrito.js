import React, { useContext} from "react";
import { orderContext } from "../components/CartContext";
import ItemCart from "../components/ItemCart";
import {Link} from 'react-router-dom'




function Carrito() {
  const order = useContext(orderContext);

  console.log(order.length)
return (
    <>
      {order.length >=1 ?<div className="carrito">
      {order.map((item,i) => {
        return (
          <ItemCart
            key={i}
            index= {i}
            image={item.image}
            id={item.id}
            nombre={item.nombre}
            precio={item.precio}
            cantidad={item.cantidad}
            total= {item.precio * item.cantidad}
          />
        );
      })}
    </div>: <div>
    <h1>El carro se encuentra vacío!</h1>
    <li className="nav__links">
    <Link to="/Products">ir a productos</Link>
    </li>
    </div>
    }
    </>
  );
}


export default Carrito;
