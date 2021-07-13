import React, { useState, useContext, useEffect } from "react";
import { orderContext } from "../components/CartContext";
import ItemCart from "../components/ItemCart";
import { Link } from "react-router-dom";
import { getFirestore } from "../components/Firebase";

function Carrito() {
  const order = useContext(orderContext);
  const [buyer, setBuyer] = useState({});
  const [pedidos, setPedidos] = useState();

  function sendBuy(pedidos) {
    const db = getFirestore();
    const orders = db.collection("orders");
    orders
      .add(pedidos)
      .then(({ id }) => {
        console.log("se registro");
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(console.log("proceso finalizado"));
  }

  function getBuyer(event) {
    let temp = { ...buyer };
    if (event.target.attributes.placeholder.nodeValue === "nombre") {
      let nombre = event.target.value;
      temp.name = nombre;
    } else if (event.target.attributes.placeholder.nodeValue === "apellido") {
      let apellido = event.target.value;
      temp.surname = apellido;
    } else {
      let telefono = event.target.value;
      temp.phone = telefono;
    }
    setBuyer(temp);
  }

  useEffect(() => {
    setPedidos({ buyer: buyer, orders: order });
  }, [buyer, order]);

  return (
    <>
      {order.length >= 1 ? (
        <div className="carrito">
          {order.map((item, i) => {
            return (
              <ItemCart
                key={i}
                index={i}
                image={item.image}
                id={item.id}
                nombre={item.nombre}
                precio={item.precio}
                cantidad={item.cantidad}
                total={item.precio * item.cantidad}
              />
            );
          })}
          
          <input placeholder="nombre" onChange={getBuyer} className="formu" requiered></input>
          <input placeholder="apellido" onChange={getBuyer} className="formu" requiered></input>
          <input placeholder="cellPhone" onChange={getBuyer} className="formu" requiered></input>
          
          
          {!buyer.name || !buyer.surname || !buyer.phone ? (
            <button onClick={() => sendBuy(pedidos)} disabled>
              Finalizar compra
            </button>
          ) : (
            <button onClick={() => sendBuy(pedidos)}>Finalizar compra</button>
          )}
        </div>
      ) : (
        <div>
          <h1 id="title__cart">El carro se encuentra vacío!</h1>
          <li className="nav__links">
            <Link to="/Products">ir a productos</Link>
          </li>
        </div>
      )}
    </>
  );
}

export default Carrito;
