import React from 'react'


function ItemDetail(props) {
    return (
        <div className="padre">
            <div className="container">
                <div className="card">
                    <article>
                        <img src={props.image} alt="imagen"></img>
                            <div className="text">

                                <h1> {props.nombre}</h1>
                                <p>Especie: {props.descripcion}</p>
                                
                            </div>
                    </article>

                </div>

            </div>
        </div>
    )
}

export default ItemDetail
