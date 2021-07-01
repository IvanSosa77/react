import React,{useContext} from "react";
import {orderContext,orderUpdateContext} from '../components/CartContext';

function ItemCart(props) {
  const order = useContext(orderContext);
  const actualizar = useContext(orderUpdateContext);

  function delateItem(e){
    e.preventDefault();
    //encontrar el la posicion del ID. 
  const temp = order.splice(props.index,1);
  actualizar([...temp]);
  }

  return (
    <div className="itemCart" id={props.id}>
      <img src={props.image} alt="imageCarro"></img>
      <p>{props.nombre}</p>
      <p>${props.precio}</p>
      <p>cantidad: {props.cantidad}</p>
      <button onClick={delateItem}>borrar</button>
    </div>
  );
}

export default ItemCart;
