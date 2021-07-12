import React, { useContext } from "react";
import {  orderUpdateContext } from "../components/CartContext";

function ItemCart(props) {
  //const order = useContext(orderContext);
  const {deleteItem}= useContext(orderUpdateContext)
  
  
  

  

  return (
    <div className="itemCart" id={props.id}>
      <img src={props.image} alt="imageCarro"></img>
      <p>{props.nombre}</p>
      <p>${props.precio} x unidad</p>
      <p>total: $ {props.total}</p>
      <p>cantidad: {props.cantidad}</p>
      <button onClick={()=>deleteItem(props.index)}>Eliminar</button>
    </div>
      
  );
}

export default ItemCart;
