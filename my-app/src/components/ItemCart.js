import React from "react";

function ItemCart(props) {
  return (
    <div className="itemCart">
    
      <p>{props.nombre}</p>
      <p>${props.precio}</p>
      <p>cantidad: {props.cantidad}</p>
    </div>
  );
}

export default ItemCart;
