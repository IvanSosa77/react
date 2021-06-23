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

                                <h1> {props.name}</h1>
                                <p>${props.precio}</p>
                                <p>{props.stock}</p>
                                <ItemCount/>
                                <Link className="btn" to={props.id}>Comprar</Link>
                                
                            </div>
                    </article>

                </div>

            </div>
        </div>
    )
}

export default ItemDetail
