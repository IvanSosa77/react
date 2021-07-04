import React, { useContext } from "react";
import { orderContext, orderUpdateContext } from "../components/CartContext";

function ItemCart(props) {
  //const order = useContext(orderContext);
  const {deleteItem}= useContext(orderUpdateContext)

  console.log(deleteItem);
  

  

  return (
    <div className="itemCart" id={props.id}>
      <img src={props.image} alt="imageCarro"></img>
      <p>{props.nombre}</p>
      <p>${props.precio}</p>
      <p>cantidad: {props.cantidad}</p>
      <button onClick={()=>deleteItem(props.index)}>borrar</button>
    </div>
  );
}

export default ItemCart;
