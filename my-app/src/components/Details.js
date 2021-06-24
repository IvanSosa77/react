import React from 'react'
import ItemCount from '../components/ItemCounter'


function Details(props) {
    return (
        <div>
            {props !== undefined ? <div className="padre">
            <div className="container">
                <div className="card">
                    <article>
                        <img src={props.props.thumbnail} alt="imagen"></img>
                            <div className="text">

                                <h1> {props.props.title}</h1>
                                <p>${props.props.price}</p>
                                <p>Stock: {props.props.available_quantity}</p>
                                <p>Description</p>
                                <ItemCount stock={props.props.available_quantity}/>
                                <button className="btn">Comprar</button>
                                
                            </div>
                    </article>

                </div>

            </div>
        </div> : <h2>no hay nada que mostrar</h2>}
        </div>
    )
}

export default Details
