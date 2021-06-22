import React from 'react'
import ItemCount from '../components/ItemCounter'
import {Link} from 'react-router-dom'


function ItemDetail(props) {

    function getCartItems(){
        alert("se envio el producto al carrito")
    }
    return (
        <div className="padre">
            <div className="container">
                <div className="card">
                    <article>
                        <img src={props.image} alt="imagen"></img>
                            <div className="text">

                                <h1> {props.nombre}</h1>
                                <p>Especie: {props.descripcion}</p>
                                <ItemCount/>
                                <Link className="btn" onClick={getCartItems} to="/Products/Detail/:ProductsId">Comprar card</Link>
                                
                            </div>
                    </article>

                </div>

            </div>
        </div>
    )
}

export default ItemDetail
