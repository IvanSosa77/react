import React, { useContext } from "react";
import { orderContext } from "../components/CartContext";
import ItemCart from "../components/ItemCart";



function Carrito() {
  const order = useContext(orderContext);

  return (
    <div className="carrito">
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
          />
        );
      })}
    </div>
  );
}

export default Carrito;
