import React, { useState, useContext } from "react";
import ItemCount from "../components/ItemCounter";
import { orderUpdateContext } from "../components/CartContext";
import { orderContext } from "../components/CartContext";



function Details(props) {
    const [counter, setCounter] = useState(0);
    const order = useContext(orderContext);
    const {insertOrder} = useContext(orderUpdateContext);

    function addItem (){
        const checkIndex = order.findIndex((element)=>element.id === props.props.id);
        if(checkIndex === -1){
          insertOrder(
                props.props.title,
                props.props.price,
                counter,
                props.props.id,
                props.props.img,
              )
        }else{
            order[checkIndex].cantidad = order[checkIndex].cantidad + counter 
            console.log(order);
        }
        setCounter(0)
    }

  function handelInc() {
    if (counter < props.props.available_quantity) setCounter(counter + 1);
  }

  function handelDec() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      {props !== undefined ? (
        <div className="padre">
          <div className="container">
            <div className="card">
              <article>
                <img src={props.props.img} alt="imagen"></img>
                <div className="text">
                  <h1> {props.props.title}</h1>
                  <p>${props.props.price}</p>
                  <p>Stock: {props.props.description}</p>
                  <ItemCount
                    suma={handelInc}
                    resta={handelDec}
                    contador={counter}
                  />
                  <button
                    id="btn2"
                    onClick={addItem} disabled={counter <= 0}>
                    
                    comprar
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      ) : (
        <h2> no hay nada que mostrar </h2>
      )}
    </div>
  );
}

export default Details;
