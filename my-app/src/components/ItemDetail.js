import React from 'react'
import ItemCount from '../components/ItemCounter'
import {Link} from 'react-router-dom'


function ItemDetail(props) {

    
    return (
        <div className="padre">
            <div className="container">
                <div className="card">
                    <article>
                        <img src={props.image} alt="imagen"></img>
                            <div className="text">

                                <Link to={props.id}><h1> {props.name}</h1></Link>
                                <p>${props.precio}</p>
                                <p>Disponibles: {props.stock}</p>
                                <ItemCount/>
                                <button className="btn">Comprar</button>
                                
                            </div>
                    </article>

                </div>

            </div>
        </div>
    )
}

export default ItemDetail
